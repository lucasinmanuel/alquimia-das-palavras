package br.com.alquimiadaspalavras.dao.interfaces;

import br.com.alquimiadaspalavras.model.GameSave;

import java.util.List;

public interface IGameSaveDAO {
    void insert(GameSave gameSave);
    boolean deleteById(int id);
    void updateById(GameSave gameSave);
    List<GameSave> getGameSave();
    GameSave getGameSaveById(int id);
}
