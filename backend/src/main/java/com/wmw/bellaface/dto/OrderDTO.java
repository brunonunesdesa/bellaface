package com.wmw.bellaface.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.wmw.bellaface.entities.Order;

public class OrderDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Double totalOrder;
	private String commentary;
	private List<OrderProductDTO> orderProducts = new ArrayList<>();
	
	public OrderDTO() {
		
	}
	
	public OrderDTO(Long id, Double totalOrder, String commentary) {
		this.id = id;
		this.totalOrder = totalOrder;
		this.commentary = commentary;
	}
	
	public OrderDTO(Order entity) {
		this.id = entity.getId();
		this.totalOrder = entity.getTotalOrder();
		this.commentary = entity.getCommentary();
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Double getTotalOrder() {
		return totalOrder;
	}
	
	public void setTotalOrder(Double totalOrder) {
		this.totalOrder = totalOrder;
	}
	
	public String getCommentary() {
		return commentary;
	}
	
	public void setCommentary(String commentary) {
		this.commentary = commentary;
	}
	
	public List<OrderProductDTO> getOrderProducts() {
		return this.orderProducts;
	}
	
	public void setCategories(List<OrderProductDTO> orderProducts) {
		this.orderProducts = orderProducts;
	}
	
}
