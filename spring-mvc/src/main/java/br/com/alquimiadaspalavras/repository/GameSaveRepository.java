package br.com.alquimiadaspalavras.repository;

import br.com.alquimiadaspalavras.model.GameSave;
import br.com.alquimiadaspalavras.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GameSaveRepository extends JpaRepository<GameSave,Integer> {
    List<GameSave> findAllByUsuario(Usuario usuario);
}
