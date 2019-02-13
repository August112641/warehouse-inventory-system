package com.revature.spark.todo;

import java.util.List;
import java.util.Map;

import com.revature.spark.beans.Product;
import com.revature.spark.beans.Warehouse;

/**
 * Within this class, you will implement the logic to calculate data for various
 * reports.
 * 
 * @author 
 * 
 */
public class AssociateImplementation {
	
	
	/**
	 * Find the sum of all product assets. Remember that quantity times price is the
	 * total value for a given product.
	 * 
	 * @param products
	 * @return
	 */
	public Double sum(List<Product> products) {
		double result = 0.0;
      for(Product i : products) { 
          result = result + (i.getPrice() * i.getQuantity());
         
      }
	return result;
	}
	/**
	 * Find the lowest product price out of all products.
	 * 
	 * @param products
	 * @return
	 */
	public Double min(List<Product> products) {
		double min=100.0;
		for(Product i : products) {
			if(min >= i.getPrice()) {
				min=i.getPrice();
			}
		}
		return min;
	}

	/**
	 * Find the highest product price out of all products.
	 * 
	 * @param products
	 * @return
	 */
	public Double max(List<Product> products) {
		double max=0.0;
		for(Product i : products) {
			if(max <= i.getPrice()) {
				max=i.getPrice();
			}
		}
		return max;
	}
	

	/**
	 * Find the average product price of all products.
	 * 
	 * @param products
	 * @return
	 */
	public Double avg(List<Product> products) {
		double sum = 0.0;
		double avg=0.0;
		for(Product i: products) {
			sum= sum + i.getPrice();
			avg= sum/products.size();
		}
		return avg;
	}

	/**
	 * Find the median product price of all products.
	 * 
	 * @param products
	 * @return
	 */
	public Double median(List<Product> products) {
			double[] arrProduct = new double [products.size()];
			System.out.println(arrProduct);
			
			for(int i =0; i < products.size(); i++) {
				arrProduct[i] = products.get(i).getPrice();
			}
		
			//sort
			for(int i = 0; i < arrProduct.length-1; i++) {
				for(int j = 0; j < arrProduct.length-1; i++) {
					if(arrProduct[i] < arrProduct[j]) {
						double val =arrProduct[j];
						arrProduct[j]=arrProduct[i];
						arrProduct[i]= val;
					}
				}
			}		
		
		double median=0.0;
		double middle;
			if(arrProduct[arrProduct.length] % 2 ==0) {
				middle =(arrProduct[arrProduct.length]%2 + arrProduct[arrProduct.length]%2-1)/2;
				median=median + middle;
			}
			else {
				middle =(arrProduct[arrProduct.length]%2);
				median=median + middle;
			}
		return null;
	}

	/**
	 * !! BONUS CHALLENGE REQUIREMENT !!
	 * 
	 * Find the total value of all products in each warehouse (total assets).
	 * 
	 * Let's look at some example data:
	 * 
	 * Warehouse A 
	 * Product 	| Price | Quantity 
	 * Rice 	| $3.40 | 8 
	 * Beans 	| $1.50 | 3
	 * ------------------------------------ 
	 * Warehouse B 
	 * Product 	| Price 	| Quantity
	 * TV 		| $50.25 	| 4 
	 * Speaker 	| $15.10 	| 6 
	 * -----------------------------------
	 * Result: 
	 * Warehouse A : $31.70 
	 * Warehouse B : $291.60
	 * 
	 * 
	 * @param products
	 * @return
	 */
	public Map<Warehouse, Double> totalAssetsPerWarehouse(List<Product> products) {
		return null;
	}

}
