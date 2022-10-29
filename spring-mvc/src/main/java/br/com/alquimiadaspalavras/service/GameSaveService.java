package br.com.alquimiadaspalavras.service;

import br.com.alquimiadaspalavras.model.GameSave;
import br.com.alquimiadaspalavras.model.Usuario;

import java.time.LocalDate;

public class GameSaveService {
    public GameSave dafaultSave(Usuario usuario,Integer save_slot){
        GameSave gameSave = new GameSave();
        gameSave.setUsuario(usuario);
        gameSave.setData_save(LocalDate.now());
        gameSave.setSave_slot(save_slot);
        gameSave.setDia(1);
        gameSave.setNpc(0);
        gameSave.setMoeda_bronze(0);
        gameSave.setMoeda_prata(0);
        gameSave.setMoeda_ouro(0);
        gameSave.setArmazem("[{\"id\":\"alecrim\",\"title\":\"Planta de Alecrim\",\"alt\":\"Planta de Alecrim\",\"src\":\"http://localhost:8080/images/game/ingredientes/alecrim.png\"},{\"id\":\"jade\",\"title\":\"Planta de Jade\",\"alt\":\"Planta de Jade\",\"src\":\"http://localhost:8080/images/game/ingredientes/jade.png\"},{\"id\":\"revelador-simples\",\"title\":\"Revelador Simples\",\"alt\":\"Revelador Simples\",\"src\":\"http://localhost:8080/images/game/itens/revelador-simples.png\"}]");
        gameSave.setReceita("[{\"name\":\"Comprar\",\"valor\":\"5 moedas de bronze\",\"ingredientes\":[{\"id\":\"\",\"title\":\"Planta de Jade\",\"alt\":\"Planta de Jade\",\"src\":\"http://localhost:8080/images/game/ingredientes/jade.png\"},{\"id\":\"\",\"title\":\"Planta de Jade\",\"alt\":\"Planta de Jade\",\"src\":\"http://localhost:8080/images/game/ingredientes/jade.png\"}],\"tempoPreparo\":\"5\"},{\"name\":\"Correr\",\"valor\":\"3 moedas de bronze\",\"ingredientes\":[{\"id\":\"\",\"title\":\"Planta de Alecrim\",\"alt\":\"Planta de Alecrim\",\"src\":\"http://localhost:8080/images/game/ingredientes/alecrim.png\"},{\"id\":\"\",\"title\":\"Planta de Alecrim\",\"alt\":\"Planta de Alecrim\",\"src\":\"http://localhost:8080/images/game/ingredientes/alecrim.png\"}],\"tempoPreparo\":\"3\"}]");
        return gameSave;
    }
}
