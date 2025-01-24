import { CartService } from './services/cart.service';
import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "./components/primary-button/primary-button.component";
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [PrimaryButtonComponent, RouterOutlet ,RouterLink],
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
    <button class="text-x1" routerLink="/"> My Store

    </button>
    <app-primary-button [label]="'cart('+ CartService.cart().length +')'"

routerLink="/cart"

    ></app-primary-button>

  </div>
<router-outlet></router-outlet>

`,
    styles: [`
  `],
})
export class AppComponent {
  CartService=inject(CartService)
  cart=signal('Cart');
  // Signal for reactive title updates
 // title = signal('This is my app, Sabeur Ghileni');
 showbuttonclicked() {
  console.log('Button clicked');
}
  clicked = true;

  constructor() {
  }
}
