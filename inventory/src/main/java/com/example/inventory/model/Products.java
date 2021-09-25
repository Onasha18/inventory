package com.example.inventory.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "product_title", length = 250,nullable = false)
    private String product_title;

    @Column(name = "price",length = 100,nullable = false)
    private String price;

    public Products(){

    }

    public Products(String product_title, String price) {
        this.product_title = product_title;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProduct_title() {
        return product_title;
    }

    public void setProduct_title(String product_title) {
        this.product_title = product_title;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
