package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.model.GameSave;
import br.com.alquimiadaspalavras.repository.GameSaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path = "/gamesave")
public class GameSaveController {
    @Autowired
    private GameSaveRepository gameSaveRepository;

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
        return "redirect:/gamesave/select";
    }

    @PostMapping("/insert")
    public String insert(@ModelAttribute GameSave gameSave){
        gameSaveRepository.save(gameSave);
        return "redirect:/gamesave/select";
    }

    @PostMapping("/update")
    public  String update(@ModelAttribute GameSave gameSave){
        gameSaveRepository.save(gameSave);
        return "redirect:/gamesave/select";
    }
}
