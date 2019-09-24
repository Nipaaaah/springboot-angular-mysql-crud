package com.thomas.springbootangular.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thomas.springbootangular.models.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer>{
	public List<User> findAllByOrderById();
	
//	//On liste des méthodes pour les différentes opérations que l'on va effectuer sur la DAO
//	public List<User> findAll();
//	
//	public User userFindById(int id);
//	
//	public User userSave(User user);

}
