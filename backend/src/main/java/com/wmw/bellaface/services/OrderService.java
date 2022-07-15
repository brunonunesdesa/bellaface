package com.wmw.bellaface.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wmw.bellaface.dto.OrderDTO;
import com.wmw.bellaface.entities.Order;
import com.wmw.bellaface.repositories.OrderRepository;

@Service
public class OrderService {

	//@Autowired	
	//private ProductRepository productRepository;
	
	//@Autowired	
	//private UserRepository userRepository;
	
	//@Autowired	
	//private OrderProductRepository orderProductRepository;
	
	@Autowired
	private OrderRepository repository;
	
	@Transactional	
	public OrderDTO saveOrder(OrderDTO dto) {
		
		Order entity = new Order();
		copyDtoToEntity(dto, entity);
		//Optional<User> obj = userRepository.findById(1L);
		//User user = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		//entity.setUser(user);
		entity = repository.saveAndFlush(entity);
		
		/*for(OrderProductDTO orderProductDto : dto.getOrderProducts()) {
			OrderProduct orderProduct = new OrderProduct();
			orderProduct.setOrder(entity);
			
			Optional<Product> obj2 = productRepository.findById(1L);
			Product product = obj2.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
			orderProduct.setProduct(product);
			
			orderProductRepository.save(orderProduct);
			
		}*/
		
		return new OrderDTO(entity);
	}

	private void copyDtoToEntity(OrderDTO dto, Order entity) {

		entity.setCommentary(dto.getCommentary());
		entity.setTotalOrder(dto.getTotalOrder());
		
	}	
}
