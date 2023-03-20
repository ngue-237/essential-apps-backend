package com.logone.plantservice.repository;

import com.logone.plantservice.entity.Param;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParamRepository extends JpaRepository<Param, Integer> {
}
