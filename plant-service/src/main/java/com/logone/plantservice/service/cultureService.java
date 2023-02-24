package com.logone.plantservice.service;

import  java.util.List;

import com.logone.plantservice.entity.culture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class cultureService {

    @Autowired
    private  com.logone.plantservice.repository.cultureRepository cultureRepository;

    //Ajouter une culture
    public culture addculture(culture culture) {return  cultureRepository.save(culture);}

    //Mettre a jour les informations d'une culture

    public culture updateculture(int id, culture newculture) {
        if(cultureRepository.findById(id).isPresent()) {
            culture existingculture = cultureRepository.findById(id).get();
            existingculture.setType(newculture.getType());
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

    public  List<culture> getculture() {
        return cultureRepository.findAll();
    }

    //Chercher un culture

    public culture findculture(int id) {
        if(cultureRepository.findById(id).isPresent()) {
            culture existingculture = cultureRepository.findById(id).get();
            return existingculture;
        }
        else {
            return null;
        }


    }

}


