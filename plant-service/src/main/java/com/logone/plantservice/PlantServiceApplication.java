package com.logone.plantservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.cloud.client.ServiceInstance;
//import org.springframework.cloud.client.discovery.DiscoveryClient;
//import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication

public class PlantServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlantServiceApplication.class, args);
	}

}
