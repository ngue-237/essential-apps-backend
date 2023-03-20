package com.logone.plantservice.controller;


import com.logone.plantservice.entity.*;
import com.logone.plantservice.service.ParamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/param")
public class ParamRestAPI {

    @Autowired
    private ParamService paramService;

    //Configuration de la methode POST
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Param> createparam(@RequestBody Param param) {
        return new ResponseEntity<>(paramService.addparam(param), HttpStatus.OK);
    }

    //Configuration de la methode PUT
    //Execution URL: http://localhost:8282/api/param/search
    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Param> updateparam(@PathVariable(value = "id") int id, @RequestBody Param param) {
        return new ResponseEntity<>(paramService.updateparam(id, param), HttpStatus.OK);
    }

    //Configuation de la methode Delete
    //Execution URL: http://localhost:8282/api/param/{id}
    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Param> deleteparam(@PathVariable(value = "id") int id) {
        paramService.deleteparam(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    
    //Configuration de la methode GET All
    //Execution URL: http://localhost:8282/api/param/
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Param> getAllparam(){
        return paramService.getparam();
    }

    
    //Configuration de la methode de recherche GET specifique avec PathParam
    //il faut que les noms des methodes ici param Resst API) et celles dans paramservice n'aient pas le meme nom, sinon ca degere une erreue de mapping
    //Execution URL: http://localhost:8282/api/param
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Param> searchparam(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(paramService.findparam(id) , HttpStatus.OK);
    }


}
