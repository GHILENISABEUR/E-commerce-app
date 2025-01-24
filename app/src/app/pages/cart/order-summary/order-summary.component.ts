import { CartService } from './../../../services/cart.service';
import { Component, computed, inject } from '@angular/core';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {
  CartService=inject(CartService);
  total=computed(()=>
  {
    let total=0;
    for (const item of this.CartService.cart()){
      total+=item.stock
    }
    return total;
  })

}
