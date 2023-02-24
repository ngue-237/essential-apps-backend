package com.logone.plantservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/plants")
public class plantController {
    @GetMapping
    public ResponseEntity<String> helloWorld(){
        return ResponseEntity.ok().body("Hello world Ngué");
    }
}
