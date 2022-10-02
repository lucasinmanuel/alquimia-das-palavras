package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.model.Usuario;
import br.com.alquimiadaspalavras.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path = "/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping(path = "/select")
    public String select(ModelMap modelMap){
        modelMap.addAttribute("usuario",new Usuario());
        List<Usuario> usuarios = usuarioRepository.findAll();
        modelMap.addAttribute("usuarios",usuarios);
        return "admin/interface/usuario";
    }

    @GetMapping("/edit/{id}")
    public String edit(Model model, @PathVariable Integer id){
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        usuario.ifPresent(value -> model.addAttribute("usuario", value));
        return "admin/interface/editar-usuario";
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Integer id){
        usuarioRepository.deleteById(id);
        return "redirect:/usuario/select";
    }

    @PostMapping("/insert")
    public String insert(@ModelAttribute Usuario usuario){
        usuario.setData_cadastro(LocalDate.now());
        usuarioRepository.save(usuario);
        return "redirect:/usuario/select";
    }

    @PostMapping("/update")
    public  String update(@ModelAttribute Usuario usuario){
        usuarioRepository.save(usuario);
        return "redirect:/usuario/select";
    }

    @PostMapping("/login")
    public String login(){
        return "redirect:/";
    }

    @PostMapping("/signup")
    public  String signup(){
        return "pages/profile";
    }
}
