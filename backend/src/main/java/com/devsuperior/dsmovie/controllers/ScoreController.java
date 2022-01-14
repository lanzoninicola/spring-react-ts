package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/score")
public class ScoreController {
	
	@Autowired
	private ScoreService service;

	@PutMapping(value= "/{id}")
	public MovieDTO saveScore(@RequestBody ScoreDTO dto){
		return service.saveScore(dto);
	}
	
	
}