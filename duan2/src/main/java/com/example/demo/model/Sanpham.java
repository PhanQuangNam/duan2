package com.example.demo.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Sanpham {
	@Id
	@Column(length = 20)
	private String Product_id;
	private String Product_name;
	private String Product_description;
	private int Product_price;
	private int Product_stock;
	private boolean Product_status;
	private String Product_img;
	private int Product_amount;
	@Column(name = "Category_id")
	private String Category_id;
	@Column(name = "Size_id")
	private String Size_id;
	
	public Sanpham() {
		
	}
	
	public Sanpham(String product_id, String product_name, String product_description, int product_price,
			int product_stock, boolean product_status, String product_img, int product_amount, String category_id,
			String size_id) {
		
		super();
		Product_id = product_id;
		Product_name = product_name;
		Product_description = product_description;
		Product_price = product_price;
		Product_stock = product_stock;
		Product_status = product_status;
		Product_img = product_img;
		Product_amount = product_amount;
		Category_id = category_id;
		Size_id = size_id;
	}
	public String getProduct_id() {
		return Product_id;
	}
	public void setProduct_id(String product_id) {
		Product_id = product_id;
	}
	public String getProduct_name() {
		return Product_name;
	}
	public void setProduct_name(String product_name) {
		Product_name = product_name;
	}
	public String getProduct_description() {
		return Product_description;
	}
	public void setProduct_description(String product_description) {
		Product_description = product_description;
	}
	public int getProduct_price() {
		return Product_price;
	}
	public void setProduct_price(int product_price) {
		Product_price = product_price;
	}
	public int getProduct_stock() {
		return Product_stock;
	}
	public void setProduct_stock(int product_stock) {
		Product_stock = product_stock;
	}
	public boolean isProduct_status() {
		return Product_status;
	}
	public void setProduct_status(boolean product_status) {
		Product_status = product_status;
	}
	public String getProduct_img() {
		return Product_img;
	}
	public void setProduct_img(String product_img) {
		Product_img = product_img;
	}
	public int getProduct_amount() {
		return Product_amount;
	}
	public void setProduct_amount(int product_amount) {
		Product_amount = product_amount;
	}
	public String getCategory_id() {
		return Category_id;
	}
	public void setCategory_id(String category_id) {
		Category_id = category_id;
	}
	public String getSize_id() {
		return Size_id;
	}
	public void setSize_id(String size_id) {
		Size_id = size_id;
	}
	
	
	
}
