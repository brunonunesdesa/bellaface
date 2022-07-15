package com.wmw.bellaface.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wmw.bellaface.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
