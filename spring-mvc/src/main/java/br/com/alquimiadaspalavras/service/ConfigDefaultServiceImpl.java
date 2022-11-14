package br.com.alquimiadaspalavras.service;

import br.com.alquimiadaspalavras.enums.RoleName;
import br.com.alquimiadaspalavras.model.Cargo;
import br.com.alquimiadaspalavras.model.ProfilePicture;
import br.com.alquimiadaspalavras.repository.CargoRepository;
import br.com.alquimiadaspalavras.repository.ProfilePictureRepository;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

@Service
public class ConfigDefaultServiceImpl {
    private CargoRepository cargoRepository;
    private ProfilePictureRepository profilePictureRepository;

    public ConfigDefaultServiceImpl(CargoRepository cargoRepository,ProfilePictureRepository profilePictureRepository) {
        this.cargoRepository = cargoRepository;
        this.profilePictureRepository = profilePictureRepository;
    }

    @EventListener(ContextRefreshedEvent.class)
    public void saveCargos(){
        if(cargoRepository.findAll().isEmpty()){
            Cargo cargo_admin = new Cargo();
            cargo_admin.setNome(RoleName.valueOf("ROLE_ADMIN"));

            Cargo cargo_user = new Cargo();
            cargo_user.setNome(RoleName.valueOf("ROLE_USER"));

            List<Cargo> cargosDefault = new ArrayList<>();
            cargosDefault.add(cargo_admin);
            cargosDefault.add(cargo_user);
            if(!cargoRepository.findAll().equals(cargosDefault)){
                cargoRepository.saveAll(cargosDefault);
            }
        }
    }

    @EventListener(ContextRefreshedEvent.class)
    public void saveProfilePictures() throws IOException {
            File[] files = new File("src/main/resources/static/images/profilepicture").listFiles();
            assert files != null;
            for(File file : files){
                String[] fileName = file.getName().split("\\.");
                if(profilePictureRepository.findByNome(fileName[0]) == null){
                    ProfilePicture profilePicture = new ProfilePicture();

                    profilePicture.setNome(fileName[0]);

                    byte[] pictureBytes = Files.readAllBytes(file.toPath());
                    profilePicture.setPicture(pictureBytes);

                    profilePictureRepository.save(profilePicture);
                }
            }
    }
}
