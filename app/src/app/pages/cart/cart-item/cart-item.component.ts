import { CartService } from './../../../services/cart.service';
import { Product } from './../../../models/products.model';
import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  CartService=inject(CartService);
item = input.required<Product>();

}
