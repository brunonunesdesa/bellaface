package com.devsuperior.dscatalog.dto;

import java.io.Serializable;

import com.devsuperior.dscatalog.entities.Category;

public class CategoryDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long Id;
	private String name;

	public CategoryDTO() {

	}

	public CategoryDTO(Long id, String name) {
		this.Id = id;
		this.name = name;
	}

	public CategoryDTO(Category entity) {
		this.Id = entity.getId();
		this.name = entity.getName();
	}
	
	public CategoryDTO(CategoryDTO entity) {
		this.Id = entity.getId();
		this.name = entity.getName();
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
