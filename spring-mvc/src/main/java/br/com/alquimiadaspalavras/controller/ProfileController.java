package br.com.alquimiadaspalavras.controller;

import br.com.alquimiadaspalavras.model.ProfilePicture;
import br.com.alquimiadaspalavras.model.Usuario;
import br.com.alquimiadaspalavras.model.UsuarioProfilePicture;
import br.com.alquimiadaspalavras.repository.ProfilePictureRepository;
import br.com.alquimiadaspalavras.repository.UsuarioProfilePictureRepository;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@Controller
@RequestMapping(path = "/profile")
public class ProfileController {
    private final ProfilePictureRepository profilePictureRepository;
    private final UsuarioProfilePictureRepository usuarioProfilePictureRepository;

    public ProfileController(ProfilePictureRepository profilePictureRepository, UsuarioProfilePictureRepository usuarioProfilePictureRepository) {
        this.profilePictureRepository = profilePictureRepository;
        this.usuarioProfilePictureRepository = usuarioProfilePictureRepository;
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping(path = "/picture/{id}",produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
    @ResponseBody
    public byte[] showImage(@PathVariable Integer id){
        ProfilePicture profilePicture = profilePictureRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Não encontrado"));
        return profilePicture.getPicture();
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping(path = "/picture/alter")
    public String alterImage(@RequestParam Integer id_profilepicture,HttpSession session){

        ProfilePicture profilePicture = profilePictureRepository.findById(id_profilepicture)
                .orElseThrow(() -> new UsernameNotFoundException("Não encontrado"));

        //DESELECIONANDO A FOTO ATUAL
        UsuarioProfilePicture atual_usuarioProfilePicture = usuarioProfilePictureRepository.findByUsuarioAndProfilePicture((Usuario) session.getAttribute("usuario"), (ProfilePicture) session.getAttribute("active_profilepicture"));
        atual_usuarioProfilePicture.setActive(false);
        usuarioProfilePictureRepository.save(atual_usuarioProfilePicture);

        //SELECIONADO A NOVA FOTA
        UsuarioProfilePicture novo_usuarioProfilePicture = usuarioProfilePictureRepository.findByUsuarioAndProfilePicture((Usuario) session.getAttribute("usuario"),profilePicture);
        novo_usuarioProfilePicture.setActive(true);
        usuarioProfilePictureRepository.save(novo_usuarioProfilePicture);

        return "redirect:/pages/profile";
    }
}
