package com.wmw.bellaface.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.PrePersist;
import javax.persistence.Table;

@Entity
@Table(name = "tb_order_product")
public class OrderProduct implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private OrderProductPK id = new OrderProductPK();
	private Double unitPrice;
	private Double totalPrice;
	private Long quantity;
	
	public OrderProduct() {
		
	}
	
	public OrderProduct(OrderProductPK id, Double unitPrice, Long quantity) {
		this.id = id;
		this.unitPrice = unitPrice;
		this.quantity = quantity;
	}

	public void setProduct(Product product) {
		id.setProduct(product);
	}
	
	public void setOrder(Order order) {
		id.setOrder(order);
	}
	
	public Product getProduct() {
		return id.getProduct();
	}
	
	public Order getOrder() {
		return id.getOrder();
	}

	public OrderProductPK getId() {
		return id;
	}

	public void setId(OrderProductPK id) {
		this.id = id;
	}

	public Double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}
	
	@PrePersist
	public void prePersist() {		
		totalPrice = unitPrice * quantity;
	}
	
}
