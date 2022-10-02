package br.com.alquimiadaspalavras.repository;

import br.com.alquimiadaspalavras.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
}
