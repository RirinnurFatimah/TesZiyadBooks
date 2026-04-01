export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
  // Add other fields as per API response
}

export interface CartItem extends Product {
  quantity: number;
}
