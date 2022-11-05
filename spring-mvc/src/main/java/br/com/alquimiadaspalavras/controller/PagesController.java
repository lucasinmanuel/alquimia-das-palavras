package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.config.WebSecurityConfig;
import br.com.alquimiadaspalavras.enums.RoleName;
import br.com.alquimiadaspalavras.model.*;
import br.com.alquimiadaspalavras.repository.*;
import br.com.alquimiadaspalavras.service.GameSaveService;
import br.com.alquimiadaspalavras.utils.PasswordEncoderUtils;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.apache.coyote.Response;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.security.Principal;
import java.time.LocalDate;
import java.util.*;

@Controller
@RequestMapping(path = "/pages")
public class PagesController {

    private final GameSaveService gameSaveService = new GameSaveService();
    private final UsuarioRepository usuarioRepository;
    private final UsuarioProfilePictureRepository usuarioprofilePictureRepository;
    private final GameSaveRepository gameSaveRepository;

    public PagesController(UsuarioRepository usuarioRepository, UsuarioProfilePictureRepository usuarioprofilePictureRepository, GameSaveRepository gameSaveRepository) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioprofilePictureRepository = usuarioprofilePictureRepository;
        this.gameSaveRepository = gameSaveRepository;
    }

    //SISTEMA DE CADASTRO
    @PostMapping("/signup")
    public String signup(@ModelAttribute Usuario usuario){
        usuario.setData_cadastro(LocalDate.now());
        if(Objects.equals(usuario.getApelido(), "")){
            usuario.setApelido(null);
        }
        String senhaEncriptada = PasswordEncoderUtils.encode(usuario.getSenha());
        usuario.setSenha(senhaEncriptada);

        Cargo cargo = new Cargo();
        cargo.setId(2);
        cargo.setNome(RoleName.ROLE_USER);
        usuario.setCargo(cargo);

        Usuario usuarioDb = usuarioRepository.saveAndFlush(usuario);

        return "redirect:/pages/login";
    }
    //LISTA DE GETS
    @GetMapping(path = {"","/","/home"})
    public String home(){
        return "pages/home";
    }
    @GetMapping(path = "/mechanics")
    public String mechanics(){
        return "pages/mechanics";
    }
    @GetMapping(path = "/news")
    public String news(){
        return "pages/news";
    }
    @GetMapping(path = "/about")
    public String about(){
        return "pages/about";
    }
    @GetMapping(path = "/suggestion")
    public String suggestion(){
        return "pages/suggestion";
    }
    @GetMapping(path = "/login")
    public String login(Model model){
        model.addAttribute("usuario",new Usuario());
        return "pages/login";
    }
    @GetMapping(path = "/signup")
    public String signup(Model model){
        model.addAttribute("usuario",new Usuario());
        return "pages/signup";
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping(path = "/profile")
    public String profile(Authentication authentication, HttpSession session){
        try{
        Usuario usuario = usuarioRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

        session.setAttribute("usuario",usuario);
        List<UsuarioProfilePicture> usuarioProfilePictures = usuarioprofilePictureRepository.findAllByUsuario(usuario);
        List<ProfilePicture> profilePictures = new ArrayList<>();
        for(UsuarioProfilePicture usuarioProfilePicture : usuarioProfilePictures){
            profilePictures.add(usuarioProfilePicture.getProfilePicture());
        }
        session.setAttribute("profilePictures",profilePictures);

        List<GameSave> gameSaves = gameSaveRepository.findAllByUsuario(usuario);
        session.setAttribute("gameSaves",gameSaves);
        session.removeAttribute("slot_1");
        session.removeAttribute("slot_2");
        session.removeAttribute("slot_3");
        for(GameSave gameSave : gameSaves){
            session.setAttribute("slot_"+gameSave.getSave_slot(),gameSave.getSave_slot());
        }

        return "pages/profile";
        }catch (Exception e){
            e.printStackTrace();
            return "redirect:/pages/home";
        }
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping(path = "/game")
    public String game(Model model,HttpSession httpSession,
                       @RequestParam(value = "id",required = false) Integer id,
                       @RequestParam(value = "slot",required = false) Integer save_slot){
        try {
            if(id != null){
                GameSave gameSave = gameSaveRepository.findById(id)
                        .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));
                model.addAttribute("gamesave", gameSave);
            }else{
                Usuario usuario = (Usuario) httpSession.getAttribute("usuario");
                List<GameSave> gameSaves = gameSaveRepository.findAllByUsuario(usuario);
                if(gameSaves.size() <= 3){
                    GameSave gameSaveDb = gameSaveRepository.saveAndFlush(gameSaveService.dafaultSave(usuario,save_slot));
                    model.addAttribute("gamesave",gameSaveDb);
                }else{
                    return "redirect:/pages/profile";
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return "game/index";
    }
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping(path = "/game/save")
    @ResponseStatus(code = HttpStatus.CREATED, reason = "CREATED")
    public String save(@RequestBody String save,HttpSession httpSession){
        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(save, JsonObject.class);

        GameSave gameSaveDb = gameSaveRepository.findById(jsonObject.get("id").getAsInt())
                .orElseThrow(() -> new UsernameNotFoundException("Game Save não encontrado"));

        Usuario usuario = (Usuario) httpSession.getAttribute("usuario");
        GameSave gameSave = new GameSave();

        gameSave.setData_save(gameSaveDb.getData_save());
        gameSave.setSave_slot(gameSaveDb.getSave_slot());

        gameSave.setId(jsonObject.get("id").getAsInt());
        gameSave.setUsuario(usuario);
        gameSave.setDia(jsonObject.get("day").getAsInt());
        gameSave.setNpc(jsonObject.get("whichNpc").getAsInt());
        gameSave.setMoeda_bronze(jsonObject.get("copper_coin").getAsInt());
        gameSave.setMoeda_prata(jsonObject.get("silver_coin").getAsInt());
        gameSave.setMoeda_ouro(jsonObject.get("gold_coin").getAsInt());
        System.out.println(jsonObject.get("store").getAsJsonArray());
        gameSave.setArmazem(jsonObject.get("store").getAsJsonArray().toString());
        gameSave.setReceita(jsonObject.get("recipes").getAsJsonArray().toString());
        gameSaveRepository.save(gameSave);
        return "Salvamento efetuado!";
    }
}
