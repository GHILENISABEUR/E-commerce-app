import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  CartService=inject(CartService)

}
