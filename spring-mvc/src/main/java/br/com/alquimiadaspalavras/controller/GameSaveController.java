package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.model.GameSave;
import br.com.alquimiadaspalavras.model.Usuario;
import br.com.alquimiadaspalavras.repository.GameSaveRepository;
import br.com.alquimiadaspalavras.repository.UsuarioRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path = "/admin/gamesave")
public class GameSaveController {
    private final GameSaveRepository gameSaveRepository;
    private final UsuarioRepository usuarioRepository;
    public GameSaveController(GameSaveRepository gameSaveRepository, UsuarioRepository usuarioRepository) {
        this.gameSaveRepository = gameSaveRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @GetMapping(path = "/select")
    public String select(ModelMap modelMap){
        modelMap.addAttribute("gamesave",new GameSave());
        List<GameSave> gameSaves = gameSaveRepository.findAll();
        modelMap.addAttribute("gamesaves",gameSaves);
        return "admin/interface/gamesave";
    }

    @GetMapping("/edit/{id}")
    public String edit(Model model,@PathVariable int id){
        Optional<GameSave> gameSave = gameSaveRepository.findById(id);
        gameSave.ifPresent(value -> model.addAttribute("gamesave",value));
        return "admin/interface/editar-gamesave";
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        gameSaveRepository.deleteById(id);
        return "redirect:/admin/gamesave/select";
    }

    @PostMapping("/insert")
    public String insert(@ModelAttribute GameSave gameSave,@RequestParam("id_usuario") Integer id_usuario){
        Optional<Usuario> usuario = usuarioRepository.findById(id_usuario);
        usuario.ifPresent(value -> gameSave.setUsuario(value));
        gameSaveRepository.save(gameSave);
        return "redirect:/admin/gamesave/select";
    }

    @PostMapping("/update")
    public  String update(@ModelAttribute GameSave gameSave,@RequestParam("id_usuario") Integer id_usuario){
        Optional<Usuario> usuario = usuarioRepository.findById(id_usuario);
        usuario.ifPresent(value -> gameSave.setUsuario(value));
        gameSaveRepository.save(gameSave);
        return "redirect:/admin/gamesave/select";
    }
}
