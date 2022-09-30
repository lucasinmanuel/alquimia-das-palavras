package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.dao.GameSaveDAO;
import br.com.alquimiadaspalavras.model.GameSave;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class GameSaveController {
    private GameSaveDAO gameSaveDAO = new GameSaveDAO();

    @GetMapping(path = "/gamesave-select")
    public String select(ModelMap modelMap){
        modelMap.addAttribute("gamesave",new GameSave());
        modelMap.addAttribute("gamesaves",gameSaveDAO.getGameSave());
        return "admin/interface/gamesave";
    }

    @GetMapping("/gamesave-edit/{id}")
    public String edit(Model model,@PathVariable int id){
        model.addAttribute("gamesave",gameSaveDAO.getGameSaveById(id));
        return "admin/interface/editar-gamesave";
    }

    @GetMapping("/gamesave-delete/{id}")
    public String delete(@PathVariable int id){
        gameSaveDAO.deleteById(id);
        return "redirect:/gamesave-select";
    }

    @PostMapping("/gamesave-insert")
    public String insert(@ModelAttribute GameSave gameSave){
        gameSaveDAO.insert(gameSave);
        return "redirect:/gamesave-select";
    }

    @PostMapping("/gamesave-update")
    public  String update(@ModelAttribute GameSave gameSave){
        gameSaveDAO.updateById(gameSave);
        return "redirect:/gamesave-select";
    }
}
