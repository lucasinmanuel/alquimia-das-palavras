package br.com.alquimiadaspalavras.model;

import javax.persistence.*;

@Entity
@Table(name = "gamesave")
public class GameSave {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "id_usuario",nullable = false)
    private Integer id_usuario;
    @Column(name = "dia",nullable = false)
    private Integer dia;
    @Column(name = "npc",nullable = false)
    private Integer npc;
    @Column(name = "moeda_bronze")
    private Integer moeda_bronze;
    @Column(name = "ingredientes")
    private String ingredientes;
    @Column(name = "moeda_prata")
    private Integer moeda_prata;
    @Column(name = "moeda_ouro")
    private Integer moeda_ouro;
    @Column(name = "itens")
    private String itens;
    @Column(name = "potions")
    private String potions;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
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

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
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

    public String getItens() {
        return itens;
    }

    public void setItens(String itens) {
        this.itens = itens;
    }

    public String getPotions() {
        return potions;
    }

    public void setPotions(String potions) {
        this.potions = potions;
    }
}
