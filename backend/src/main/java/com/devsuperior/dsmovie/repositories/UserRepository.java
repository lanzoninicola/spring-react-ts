package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

// Responsible for the operation against the database
public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}
