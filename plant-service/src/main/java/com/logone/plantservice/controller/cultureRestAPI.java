package com.logone.plantservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.logone.plantservice.entity.culture;


@RestController
@RequestMapping(value ="/api/culture" )
public class cultureRestAPI {

    @Autowired
    private com.logone.plantservice.service.cultureService cultureService;


    //Configuration de la methode POST
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<culture> createculture(@RequestBody culture culture) {
        return new ResponseEntity<>(cultureService.addculture(culture), HttpStatus.OK);
    }

    
    //Configuration de la methode PUT
    //Execution URL: http://localhost:8282/api/param/search
    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<culture> updateculture(@PathVariable(value = "id") int id, @RequestBody culture culture) {
        return new ResponseEntity<>(cultureService.updateculture(id, culture), HttpStatus.OK);
    }

    //Configuation de la methode Delete
    //Execution URL: http://localhost:8282/api/param/{id}
    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<culture> deleteculture(@PathVariable(value = "id") int id) {
        cultureService.deleteculture(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }
    
    //Configuration de la methode GET All
    //Execution URL: http://localhost:8282/api/param/
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<culture> getAllculture(){
        return cultureService.getculture();
    }


    
    //Configuration de la methode de recherche GET specifique avec PathParam
    //il faut que les noms des methodes ici assurance Resst API) et celles dans paramervice n'aient pas le meme nom, sinon ca degere une erreue de mapping
    //Execution URL: http://localhost:8282/api/param
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<culture> searchculture(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(cultureService.findculture(id) , HttpStatus.OK);
    }


}
