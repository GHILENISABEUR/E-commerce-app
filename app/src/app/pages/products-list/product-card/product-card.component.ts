import { CartService } from './../../../services/cart.service';
import { Product } from './../../../models/products.model';
import { Component, inject, input } from '@angular/core';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template:`

<div class="bg-white shadow-md border rounded-xl p-6 flex-col relative ">



<img [src]=" Product().url" class="w-[200px ] h-[100px] object-contain mx-auto ">
<div class="flex felx-col mt-2 ">
  <app-primary-button label="add to cart"  class="mt-3" (btnclicked)="CartService.AddToCart(Product())"> </app-primary-button>
</div>
<span class="absolute top-2 right-3 text-sm font-bold "
[class]="Product().stock ?  'text-green-500 ' :'text-red-500'"
 >
  @if (Product().stock) {
    {{Product().stock}} left
  }
  @else {
Out Of Stock  }
</span>

<div class="felx felx-col ">
  <span>
    {{Product().name}}
  </span>

</div>
</div>



  `,
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  Product=input.required<Product>();
  CartService=inject(CartService)

}
