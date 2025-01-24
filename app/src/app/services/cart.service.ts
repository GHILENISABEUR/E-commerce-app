import { Product } from './../models/products.model';
import { inject, Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {



cart=signal<Product[]>([

]);
AddToCart(Product:Product){
    this.cart.set([...this.cart(),Product]);


  }
  RemoveFromCart(url:string){
    this.cart.set(this.cart().filter((p) => p.url !== url));
  }

  constructor() { }
}
