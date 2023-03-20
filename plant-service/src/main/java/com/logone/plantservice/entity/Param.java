package com.logone.plantservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Param implements Serializable {
    private  static final long serialVersionUID = 8;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id;
    private double niv_phosphore;
    private double temps_croissance;
    private double niv_ph;
    private  double niv_azote;
    private double niv_potasium;
    private  double taux_humidite;


    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Culture culture;

}
