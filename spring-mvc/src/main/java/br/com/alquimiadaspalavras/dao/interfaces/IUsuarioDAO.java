package br.com.alquimiadaspalavras.dao.interfaces;

import br.com.alquimiadaspalavras.model.Usuario;

import java.util.List;

public interface IUsuarioDAO {
    void insert(Usuario usuario);
    boolean deleteById(int id);
    void updateById(Usuario usuario);
    public List<Usuario> getUsuarios();
    public Usuario getUsuarioById(int id);
}
