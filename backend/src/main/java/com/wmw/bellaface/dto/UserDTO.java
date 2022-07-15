package com.wmw.bellaface.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.wmw.bellaface.entities.Role;
import com.wmw.bellaface.entities.User;

public class UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long id;
	@NotBlank(message = "O nome informado não pode estar em branco.")
	private String firstName;
	@NotBlank(message = "O sobrenome informado não pode estar em branco.")
	private String lastName;
	@Email(message = "O e-mail informado deve ser válido.")
	@Column(unique = true)
	private String email;
	private String password;
	private Set<RoleDTO> roles = new HashSet<>();
	
	public UserDTO () {
		
	}

	public UserDTO(Long id, String firstName, String lastName, String email) {
		
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	
	public UserDTO(User entity) {
		this.id = entity.getId();
		this.firstName = entity.getFirstName();
		this.lastName = entity.getLastName();
		this.email = entity.getEmail();
		entity.getRoles().forEach((Role role) -> this.roles.add(new RoleDTO(role)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<RoleDTO> getRoles() {
		return roles;
	}
	
}
