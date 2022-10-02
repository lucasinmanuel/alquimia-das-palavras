package br.com.alquimiadaspalavras.repository;

import br.com.alquimiadaspalavras.model.GameSave;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameSaveRepository extends JpaRepository<GameSave,Integer> {
}
