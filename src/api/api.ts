import { Product } from "../types"
const API_URL = "http://localhost:8080/api";

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    return products;
}

export async function getProduct(id: number) {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const product = await response.json();
    return product;
}

export async function addProduct(product:Product) {
    const response = await fetch(`${API_URL}/products/add-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const newProduct = await response.json();
    return newProduct;
  }


export async function deleteProduct(id: number) {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        console.log('Product deleted successfully');
      } else {
        console.error('Failed to delete product');
      }
}

export async function updateProduct(id: number, product: Product) {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const updatedProduct = await response.json();
    return updatedProduct;
    }
