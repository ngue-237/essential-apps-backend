package com.logone.plantservice.service;

import java.util.List;
import com.logone.plantservice.entity.*;
import com.logone.plantservice.repository.ParamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParamService {

    @Autowired
    private ParamRepository paramRepository;

    //Ajouter une param
    public Param addparam(Param param) {return  paramRepository.save(param);}

    //Mettre a jour les informations d'une param

    public Param updateparam(int id, Param newparam) {
        if(paramRepository.findById(id).isPresent()) {
            Param existingparam = paramRepository.findById(id).get();
            existingparam.setNiv_ph(newparam.getNiv_ph());
            existingparam.setNiv_azote(newparam.getNiv_azote());
            existingparam.setNiv_potasium(newparam.getNiv_potasium());
            existingparam.setNiv_phosphore(newparam.getNiv_phosphore());
            existingparam.setTaux_humidite(newparam.getTaux_humidite());
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

    public  List<Param> getparam() {
        return paramRepository.findAll();
    }

    //Chercher un param

    public Param findparam(int id) {
        if(paramRepository.findById(id).isPresent()) {
            Param existingparam = paramRepository.findById(id).get();
            return existingparam;
        }
        else {
            return null;
        }


    }

}
