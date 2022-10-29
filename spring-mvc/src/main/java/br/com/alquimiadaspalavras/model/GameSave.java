package br.com.alquimiadaspalavras.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class GameSave {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(nullable = false,name = "id_usuario")
    private Usuario usuario;
    @Column(nullable = false)
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate data_save;
    @Column(nullable = false)
    private Integer save_slot;
    @Column(nullable = false)
    private Integer dia;
    @Column(nullable = false)
    private Integer npc;
    @Column(nullable = false)
    private Integer moeda_bronze;
    @Column(nullable = false)
    private Integer moeda_prata;
    @Column(nullable = false)
    private Integer moeda_ouro;
    @Column
    @Lob
    private String armazem;
    @Column
    @Lob
    private String receita;

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

    public LocalDate getData_save() {
        return data_save;
    }

    public void setData_save(LocalDate data_save) {
        this.data_save = data_save;
    }

    public Integer getSave_slot() {
        return save_slot;
    }

    public void setSave_slot(Integer save_slot) {
        this.save_slot = save_slot;
    }

    public Integer getDia() {
        return dia;
    }

    public void setDia(Integer dia) {
        this.dia = dia;
    }

    public Integer getNpc() {
        return npc;
    }

    public void setNpc(Integer npc) {
        this.npc = npc;
    }

    public Integer getMoeda_bronze() {
        return moeda_bronze;
    }

    public void setMoeda_bronze(Integer moeda_bronze) {
        this.moeda_bronze = moeda_bronze;
    }

    public Integer getMoeda_prata() {
        return moeda_prata;
    }

    public void setMoeda_prata(Integer moeda_prata) {
        this.moeda_prata = moeda_prata;
    }

    public Integer getMoeda_ouro() {
        return moeda_ouro;
    }

    public void setMoeda_ouro(Integer moeda_ouro) {
        this.moeda_ouro = moeda_ouro;
    }

    public String getArmazem() {
        return armazem;
    }

    public void setArmazem(String armazem) {
        this.armazem = armazem;
    }

    public String getReceita() {
        return receita;
    }

    public void setReceita(String receita) {
        this.receita = receita;
    }
}
