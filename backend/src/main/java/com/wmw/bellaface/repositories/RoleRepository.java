package com.wmw.bellaface.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wmw.bellaface.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
