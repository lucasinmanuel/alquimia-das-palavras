package br.com.alquimiadaspalavras.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeRedirect {
    @GetMapping(path = {"","/","/login"})
    public String home(){
        return "redirect:/pages/home";
    }
}
