package br.com.alquimiadaspalavras.repository;

import br.com.alquimiadaspalavras.model.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CargoRepository extends JpaRepository<Cargo,Integer> {
}
