package com.wmw.bellaface.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wmw.bellaface.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
