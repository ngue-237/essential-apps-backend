package com.logone.plantservice.repository;

import com.logone.plantservice.entity.culture;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Pageable;


public interface cultureRepository  extends JpaRepository<culture, Integer> {
//   @Query("select culture from culture where culture.type like : type")
//   public Page<culture> cultureByType(@Param("culture") String n, Pageable pageable);
}
