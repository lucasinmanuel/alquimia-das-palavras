package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.model.Usuario;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PagesController {
    @GetMapping(path = {"","/"})
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
    @GetMapping(path = "/admin")
    public String dashboard(){
        return "admin/dashboard";
    }
    @GetMapping(path = "/game")
    public String game(){
        return "game/index";
    }
}
