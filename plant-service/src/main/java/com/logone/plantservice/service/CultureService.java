package com.logone.plantservice.service;

import  java.util.List;

import com.logone.plantservice.entity.Culture;
import com.logone.plantservice.repository.CultureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CultureService {

    @Autowired
    private CultureRepository cultureRepository;

    //Ajouter une culture
    public Culture addculture(Culture culture) {return  cultureRepository.save(culture);}

    //Mettre a jour les informations d'une culture

    public Culture updateculture(int id, Culture newculture) {
        if(cultureRepository.findById(id).isPresent()) {
            Culture existingculture = cultureRepository.findById(id).get();
            existingculture.setNom_plante(newculture.getNom_plante());


            return cultureRepository.save(existingculture);
        }
        else {
            return null;
        }
    }

    //Supprimer une culture

    public String deleteculture(int id) {
        if(cultureRepository.findById(id).isPresent()) {
            cultureRepository.deleteById(id);
            return "La culture avec l'id " + id + " a été supprime";
        }
        else {
            return "La culture avec l'id " + id + " n'a pas ete supprime";
        }
    }

    //afficher tous les cultures

    public  List<Culture> getculture() {
        return cultureRepository.findAll();
    }

    //Chercher un culture

    public Culture findculture(int id) {
        if(cultureRepository.findById(id).isPresent()) {
            Culture existingculture = cultureRepository.findById(id).get();
            return existingculture;
        }
        else {
            return null;
        }


    }

}


