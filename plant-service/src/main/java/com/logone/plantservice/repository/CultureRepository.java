package com.logone.plantservice.repository;

import com.logone.plantservice.entity.Culture;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CultureRepository extends JpaRepository<Culture, Integer> {
//   @Query("select culture from culture where culture.type like : type")
//   public Page<culture> cultureByType(@Param("culture") String n, Pageable pageable);
}
