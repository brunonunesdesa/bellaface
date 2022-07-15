package com.wmw.bellaface.dto;

import java.io.Serializable;

public class OrderProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long productId;
	private Double unitPrice;
	private Long quantity;
	
	public OrderProductDTO() {
		
	}

	public OrderProductDTO(Long productId, Double unitPrice, Long quantity) {
		this.productId = productId;
		this.unitPrice = unitPrice;
		this.quantity = quantity;
	}
	
	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
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
	
}
