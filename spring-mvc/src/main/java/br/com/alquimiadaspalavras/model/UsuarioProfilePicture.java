package br.com.alquimiadaspalavras.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class UsuarioProfilePicture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
    @ManyToOne
    @JoinColumn(name = "id_profile_picture")
    private ProfilePicture profilePicture;
    @Column
    private Boolean activated;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public ProfilePicture getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(ProfilePicture profilePicture) {
        this.profilePicture = profilePicture;
    }

    public Boolean getActive() {
        return activated;
    }

    public void setActive(Boolean active) {
        this.activated = active;
    }
}
