package br.com.alquimiadaspalavras.repository;

import br.com.alquimiadaspalavras.model.ProfilePicture;
import br.com.alquimiadaspalavras.model.Usuario;
import br.com.alquimiadaspalavras.model.UsuarioProfilePicture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsuarioProfilePictureRepository extends JpaRepository<UsuarioProfilePicture,Integer> {
    List<UsuarioProfilePicture> findAllByUsuario(Usuario usuario);
}
