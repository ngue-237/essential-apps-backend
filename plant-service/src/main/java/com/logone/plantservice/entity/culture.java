package com.logone.plantservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.io.Serial;
import java.io.Serializable;


@Entity
public class culture implements Serializable {

    @Serial
    private  static final long serialVersionUID = 3;

    @Id
    @GeneratedValue
    private int id;
    private String type, nom_plante;

    public int getId() {return id;}
    public void setId(int id) {this.id = id;}
    public String getType() {return type;}
    public  void  setType(String type){this.type= type; }
    public String getNom_plante() {return nom_plante;}
    public  void  setNom_plante(String nom_plante){this.nom_plante= nom_plante; }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }
    public culture(){super(); }

    public  culture(String type){
        super();
        this.type= type;
    }

    public culture(int id,String type,String nom_plante){
        super();
        this.id = id;
        this.type = type;
        this.nom_plante = nom_plante;
    }
}
