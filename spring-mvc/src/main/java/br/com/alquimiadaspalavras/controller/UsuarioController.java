package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.dao.GameSaveDAO;
import br.com.alquimiadaspalavras.dao.UsuarioDAO;
import br.com.alquimiadaspalavras.model.GameSave;
import br.com.alquimiadaspalavras.model.Usuario;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class UsuarioController {
    private UsuarioDAO usuarioDAO = new UsuarioDAO();

    @GetMapping(path = "/usuario-select")
    public String select(ModelMap modelMap){
        modelMap.addAttribute("usuario",new Usuario());
        modelMap.addAttribute("usuarios",usuarioDAO.getUsuarios());
        return "admin/interface/usuario";
    }

    @GetMapping("/usuario-edit/{id}")
    public String edit(Model model, @PathVariable int id){
        model.addAttribute("usuario",usuarioDAO.getUsuarioById(id));
        return "admin/interface/editar-usuario";
    }

    @GetMapping("/usuario-delete/{id}")
    public String delete(@PathVariable int id){
        usuarioDAO.deleteById(id);
        return "redirect:/usuario-select";
    }

    @PostMapping("/usuario-insert")
    public String insert(@ModelAttribute Usuario usuario){
        usuario.setData_cadastro(new Date());
        usuarioDAO.insert(usuario);
        return "redirect:/usuario-select";
    }

    @PostMapping("/usuario-update")
    public  String update(@ModelAttribute Usuario usuario){
        usuario.setData_cadastro(new Date());
        usuarioDAO.updateById(usuario);
        return "redirect:/usuario-select";
    }
}
