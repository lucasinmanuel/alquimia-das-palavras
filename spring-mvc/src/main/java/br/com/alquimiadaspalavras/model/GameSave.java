package br.com.alquimiadaspalavras.model;

public class GameSave {
    private int id;
    private int id_usuario;
    private int dia;
    private int moeda_bronze;
    private String ingredientes;
    private int moeda_prata;
    private int moeda_ouro;
    private String itens;
    private String potions;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public int getDia() {
        return dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public int getMoeda_bronze() {
        return moeda_bronze;
    }

    public void setMoeda_bronze(int moeda_bronze) {
        this.moeda_bronze = moeda_bronze;
    }

    public int getMoeda_prata() {
        return moeda_prata;
    }

    public void setMoeda_prata(int moeda_prata) {
        this.moeda_prata = moeda_prata;
    }

    public int getMoeda_ouro() {
        return moeda_ouro;
    }

    public void setMoeda_ouro(int moeda_ouro) {
        this.moeda_ouro = moeda_ouro;
    }

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
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
