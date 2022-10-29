package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.model.ProfilePicture;
import br.com.alquimiadaspalavras.repository.ProfilePictureRepository;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping(path = "/profile",method = RequestMethod.GET)
public class ProfileController {
    private final ProfilePictureRepository profilePictureRepository;

    public ProfileController(ProfilePictureRepository profilePictureRepository) {
        this.profilePictureRepository = profilePictureRepository;
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping(path = "/picture/{id}",produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
    @ResponseBody
    public byte[] showImage(@PathVariable Integer id){
        ProfilePicture profilePicture = profilePictureRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Não encontrado"));
        return profilePicture.getPicture();
    }
}
