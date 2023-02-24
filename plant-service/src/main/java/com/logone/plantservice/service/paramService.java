package com.logone.plantservice.service;

import java.util.List;
import com.logone.plantservice.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class paramService {

    @Autowired
    private com.logone.plantservice.repository.paramRepository paramRepository;

    //Ajouter une param
    public param addparam(param param) {return  paramRepository.save(param);}

    //Mettre a jour les informations d'une param

    public param updateparam(int id, param newparam) {
        if(paramRepository.findById(id).isPresent()) {
            param existingparam = paramRepository.findById(id).get();
            existingparam.setNom_plante(newparam.getNom_plante());
            existingparam.setNiv_ph(newparam.getNiv_ph());
            existingparam.setNiv_azote(newparam.getNiv_azote());
            existingparam.setNiv_potasium(newparam.getNiv_potasium());
            existingparam.setNiv_phosphore(newparam.getNiv_phosphore());
            existingparam.setTaux_humidité(newparam.getTaux_humidité());
            existingparam.setTemps_croissance(newparam.getTemps_croissance());



            return paramRepository.save(existingparam);
        }
        else {
            return null;
        }
    }

    //Supprimer une param

    public String deleteparam(int id) {
        if(paramRepository.findById(id).isPresent()) {
            paramRepository.deleteById(id);
            return "La param avec l'id " + id + " a été supprime";
        }
        else {
            return "La param avec l'id " + id + " n'a pas ete supprime";
        }
    }

    //afficher tous les params

    public  List<param> getparam() {
        return paramRepository.findAll();
    }

    //Chercher un param

    public param findparam(int id) {
        if(paramRepository.findById(id).isPresent()) {
            param existingparam = paramRepository.findById(id).get();
            return existingparam;
        }
        else {
            return null;
        }


    }

}
