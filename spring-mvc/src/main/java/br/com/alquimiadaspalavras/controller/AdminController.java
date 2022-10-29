package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.model.ProfilePicture;
import br.com.alquimiadaspalavras.repository.ProfilePictureRepository;
import org.apache.coyote.Request;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Controller
@RequestMapping(path = "/admin")
public class AdminController {

    @GetMapping(path = "/dashboard")
    public String dashboard(){
        return "admin/dashboard";
    }

}
