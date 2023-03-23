package com.logone.plantservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Culture implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom_plante;
    private String urlImg;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Param param;

}
