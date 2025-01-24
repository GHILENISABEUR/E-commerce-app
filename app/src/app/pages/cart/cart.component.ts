import { Product } from './../../models/products.model';
import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { ProductsListComponent } from "../products-list/products-list.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from './order-summary/order-summary.component';
@Component({
  selector: 'app-cart',
  imports: [CartItemComponent,OrderSummaryComponent ],
template:`

<div class="p-6 flex felx-col gap-4">
  <h2 class="text-2xl">Shopping Cart

  </h2>
@for (item of CartService.cart(); track item.name) {
  <app-cart-item [item]="item"/>
  <app-order-summary/>

}
</div>


`
,



  styleUrl: './cart.component.css'
})
export class CartComponent {
  CartService=inject(CartService)


}
