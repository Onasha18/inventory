package com.example.inventory.controller;

import com.example.inventory.model.Products;
import com.example.inventory.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping(path = "/api/v1/")
public class Controller {

    @Autowired
    private ProductsRepository productsRepository;

    //Get All Products

    @GetMapping(path = "/products")
    public List<Products> getAllProducts(){

        return productsRepository.findAll();

    }

    //Add new product

    @PostMapping(path = "/products/add-new")
    public Products addNewProduct(@RequestBody Products product){

        return productsRepository.save(product);

    }

    //update product

    @PutMapping(path = "/products/update-product/{id}")
    public ResponseEntity<Products> updateProduct
            (@PathVariable(value = "id") Integer id,@RequestBody Products productDetails)throws IllegalStateException{

      Products product = productsRepository.findById(id).orElseThrow(()-> new IllegalStateException("Product not found for this id" + id));

      product.setProduct_title(productDetails.getProduct_title());
      product.setPrice(productDetails.getPrice());

      final Products updatedProduct = productsRepository.save(product);
      return ResponseEntity.ok(updatedProduct);
    }


    //delete product

    @DeleteMapping(path = "/products/delete-product/{id}")
    public void deleteProduct(@PathVariable Integer id){

        productsRepository.deleteById(id);
    }
}
