package br.com.alquimiadaspalavras.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PagesController {
    @GetMapping(path = "/")
    public String home(){
        return "/pages/home";
    }
    @GetMapping(path = "/mechanics")
    public String mechanics(){
        return "/pages/mechanics";
    }
    @GetMapping(path = "/news")
    public String news(){
        return "/pages/news";
    }
    @GetMapping(path = "/about")
    public String about(){
        return "/pages/about";
    }
    @GetMapping(path = "/login")
    public String login(){
        return "/pages/login";
    }
    @GetMapping(path = "/admin")
    public String dashboard(){
        return "admin/dashboard";
    }
}
