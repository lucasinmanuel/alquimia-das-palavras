package br.com.alquimiadaspalavras.dao;

import br.com.alquimiadaspalavras.connection.ConnectionFactory;
import br.com.alquimiadaspalavras.dao.interfaces.IGameSaveDAO;
import br.com.alquimiadaspalavras.model.GameSave;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class GameSaveDAO implements IGameSaveDAO {
    Connection conn = null;
    PreparedStatement pstm = null;

    public void insert(GameSave gameSave) {

        String sql = "INSERT INTO game_save(id_usuario,dia,moeda_bronze,moeda_prata,moeda_ouro,ingredientes,itens,potions)" +
                " VALUES(?,?,?,?,?,?,?,?)";

        try {

            conn = ConnectionFactory.createConnectionToMySQL();

            pstm = conn.prepareStatement(sql);

            pstm.setInt(1, gameSave.getId_usuario());
            pstm.setInt(2, gameSave.getDia());
            pstm.setInt(3, gameSave.getMoeda_bronze());
            pstm.setInt(4, gameSave.getMoeda_prata());
            pstm.setInt(5, gameSave.getMoeda_ouro());
            pstm.setString(6, gameSave.getIngredientes());
            pstm.setString(7, gameSave.getItens());
            pstm.setString(8, gameSave.getPotions());

            pstm.execute();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {

            try {
                if (pstm != null) {

                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {

                e.printStackTrace();
            }
        }

    }

    public boolean deleteById(int id) {

        String sql = "DELETE FROM game_save WHERE id = ?";
        boolean result = false;

        try {

            conn = ConnectionFactory.createConnectionToMySQL();
            pstm = conn.prepareStatement(sql);
            pstm.setInt(1, id);

            pstm.execute();
            result = true;

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (pstm != null) {
                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return result;
    }

    public void updateById(GameSave gameSave){

        String sql = "UPDATE game_save SET id_usuario = ?,dia = ?,moeda_bronze = ?,moeda_prata = ?,moeda_ouro = ?," +
                "ingredientes = ?,itens = ?,potions = ? WHERE id = ?";

        try {

            conn = ConnectionFactory.createConnectionToMySQL();

            pstm = conn.prepareStatement(sql);

            pstm.setInt(1, gameSave.getId_usuario());
            pstm.setInt(2, gameSave.getDia());
            pstm.setInt(3, gameSave.getMoeda_bronze());
            pstm.setInt(4, gameSave.getMoeda_prata());
            pstm.setInt(5, gameSave.getMoeda_ouro());
            pstm.setString(6, gameSave.getIngredientes());
            pstm.setString(7, gameSave.getItens());
            pstm.setString(8, gameSave.getPotions());
            pstm.setInt(9, gameSave.getId());

            // Executa a sql para inserção dos dados
            pstm.execute();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Fecha as conexões
            try {
                if (pstm != null) {

                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {

                e.printStackTrace();
            }
        }

    }

    public List<GameSave> getGameSave() {

        String sql = "SELECT * FROM game_save";
        ResultSet rset = null;
        List<GameSave> gameSaves = new ArrayList<>();
        try {
            // Cria uma conexão com o banco
            conn = ConnectionFactory.createConnectionToMySQL();

            // Cria um PreparedStatment, classe usada para executar a query
            pstm = conn.prepareStatement(sql);
            rset = pstm.executeQuery();

            while (rset.next()) {
                GameSave gameSave = new GameSave();
                gameSave.setId(rset.getInt("id"));
                gameSave.setId_usuario(rset.getInt("id_usuario"));
                gameSave.setDia(rset.getInt("dia"));
                gameSave.setMoeda_bronze(rset.getInt("moeda_bronze"));
                gameSave.setMoeda_prata(rset.getInt("moeda_prata"));
                gameSave.setMoeda_ouro(rset.getInt("moeda_ouro"));
                gameSave.setIngredientes(rset.getString("ingredientes"));
                gameSave.setItens(rset.getString("itens"));
                gameSave.setPotions(rset.getString("potions"));
                gameSaves.add(gameSave);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Fecha as conexões
            try {
                if (rset != null) {
                    rset.close();
                }

                if (pstm != null) {

                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {

                e.printStackTrace();
            }
        }

        return gameSaves;
    }

    public GameSave getGameSaveById(int id) {
        String sql = "SELECT * FROM game_save WHERE id = ?";
        ResultSet rset = null;
        GameSave gameSave = new GameSave();
        try {
            // Cria uma conexão com o banco
            conn = ConnectionFactory.createConnectionToMySQL();

            // Cria um PreparedStatment, classe usada para executar a query
            pstm = conn.prepareStatement(sql);
            pstm.setInt(1,id);
            rset = pstm.executeQuery();

            if (rset.next()) {
                gameSave.setId(rset.getInt("id"));
                gameSave.setId_usuario(rset.getInt("id_usuario"));
                gameSave.setDia(rset.getInt("dia"));
                gameSave.setMoeda_bronze(rset.getInt("moeda_bronze"));
                gameSave.setMoeda_prata(rset.getInt("moeda_prata"));
                gameSave.setMoeda_ouro(rset.getInt("moeda_ouro"));
                gameSave.setIngredientes(rset.getString("ingredientes"));
                gameSave.setItens(rset.getString("itens"));
                gameSave.setPotions(rset.getString("potions"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Fecha as conexões
            try {
                if (rset != null) {
                    rset.close();
                }

                if (pstm != null) {

                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {

                e.printStackTrace();
            }
        }

        return gameSave;
    }
}
