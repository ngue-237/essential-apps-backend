package com.logone.plantservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.io.Serializable;

@Entity
public class param implements Serializable {
    private  static final long serialVersionUID = 8;

    @Id
    @GeneratedValue
    private  int id;
    private String nom_plante, temps_croissance,niv_phosphore;
    private float niv_ph,niv_azote,niv_potasium,taux_humidité;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNom_plante() {return nom_plante;}
    public void  setNom_plante(String nom_plante) {this.nom_plante = nom_plante;}
    public float getNiv_ph() {return  niv_ph;}
    public void setNiv_ph(float niv_ph) {this.niv_ph = niv_ph;}
    public float getNiv_azote() {return  niv_azote;}
    public void setNiv_azote(float niv_azote) {this.niv_azote = niv_azote;}
    public float getNiv_potasium() {return  niv_potasium;}
    public void setNiv_potasium(float niv_potasium) {this.niv_potasium = niv_potasium;}
    public String getNiv_phosphore() {return niv_phosphore;}
    public void  setNiv_phosphore(String niv_phosphore) {this.niv_phosphore = niv_phosphore;}
    public float getTaux_humidité() {return  taux_humidité;}
    public void setTaux_humidité(float taux_humidité) {this.taux_humidité = taux_humidité;}
    public String getTemps_croissance() {return temps_croissance;}
    public void  setTemps_croissance(String tempscroissance) {this.temps_croissance = tempscroissance;}


    public static long getSerialVersionUID() {
        return serialVersionUID;
    }
    public param() {super();}

    public param(String nom_plante){
        super();
        this.nom_plante = nom_plante;
    }
    public param(int id, String nom_plante,float niv_ph,float niv_azote,float niv_potasium,String niv_phosphore,float taux_humidité,String temps_croissance){
        super();
        this.id = id;
        this.nom_plante = nom_plante;
        this.niv_ph = niv_ph;
        this.niv_azote = niv_azote;
        this.niv_potasium = niv_potasium;
        this.niv_phosphore = niv_phosphore;
        this.taux_humidité = taux_humidité;
        this.temps_croissance = temps_croissance;
    }

}
