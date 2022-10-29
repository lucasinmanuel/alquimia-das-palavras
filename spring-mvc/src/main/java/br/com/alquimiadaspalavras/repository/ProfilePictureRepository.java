package br.com.alquimiadaspalavras.repository;

import br.com.alquimiadaspalavras.model.ProfilePicture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfilePictureRepository extends JpaRepository<ProfilePicture,Integer> {
    ProfilePicture findByNome(String nome);
}
