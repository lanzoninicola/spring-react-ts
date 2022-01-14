package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;

// Responsible for the operation against the database
public interface MovieRepository extends JpaRepository<Movie, Long>{

}
