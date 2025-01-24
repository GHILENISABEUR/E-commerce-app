import { CartService } from './../../services/cart.service';
import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template:`
  <div class="p-8 grid grid-cols-2  gap-2">
    @for (product of products(); track product.url) {
      <app-product-card [Product]="product"/>

    }
  </div>
  `

  ,
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

      async ngOnInit(): Promise<void> {
        const res =await fetch("Api ");
        const data =await res.json();
        this.products.set(data);
        

      }





  CartService=inject(CartService)
products=signal<Product[]>([
  {
    "name": "googlelogo_desk_heirloom_color_150x55dp.gif",
    "path": "/home/saber/Desktop/auth/images/googlelogo_desk_heirloom_color_150x55dp.gif",
    "url": "https://www.google.com/images/branding/searchlogo/1x/googlelogo_desk_heirloom_color_150x55dp.gif",
    "stock":88
}
,
{
  "name": "images?q=tbn:ANd9GcTDWHR-ZiC8Im-uum1hzJsQRVj1mgfUUY6lNqjjAmmNrJX4Ge3q26uDSsu2zA&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcTDWHR-ZiC8Im-uum1hzJsQRVj1mgfUUY6lNqjjAmmNrJX4Ge3q26uDSsu2zA&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWHR-ZiC8Im-uum1hzJsQRVj1mgfUUY6lNqjjAmmNrJX4Ge3q26uDSsu2zA&s",
  "stock":10

},
{
  "name": "images?q=tbn:ANd9GcTdoJc0fmBoYnF0Kbr45dYj1yeqZRbqwT3xkBKq0TyUDmsFa9DsFQ7_FxhdJw&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcTdoJc0fmBoYnF0Kbr45dYj1yeqZRbqwT3xkBKq0TyUDmsFa9DsFQ7_FxhdJw&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdoJc0fmBoYnF0Kbr45dYj1yeqZRbqwT3xkBKq0TyUDmsFa9DsFQ7_FxhdJw&s",
  "stock":0
},
{
  "name": "images?q=tbn:ANd9GcSykl0Rm-hw6b16SsI47ct_bK8IKdpPOezN0A46jfAWCziOkv7vYaPNziGkffs&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcSykl0Rm-hw6b16SsI47ct_bK8IKdpPOezN0A46jfAWCziOkv7vYaPNziGkffs&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykl0Rm-hw6b16SsI47ct_bK8IKdpPOezN0A46jfAWCziOkv7vYaPNziGkffs&s",
  "stock":71

},{
  "name": "images?q=tbn:ANd9GcSxEzg4GVqK5mlc1qW5qN1U4giXVls_rwfmg_wAcflHFQJAtO1YgfRGdm-j1gU&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcSxEzg4GVqK5mlc1qW5qN1U4giXVls_rwfmg_wAcflHFQJAtO1YgfRGdm-j1gU&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEzg4GVqK5mlc1qW5qN1U4giXVls_rwfmg_wAcflHFQJAtO1YgfRGdm-j1gU&s",
  "stock":8

},
{
  "name": "images?q=tbn:ANd9GcSWqd7BZQsE9snKudsSEmaJN6tNzm8_oMzCNcI5cs3cKCUFTG_ftOoIyo3vVQ&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcSWqd7BZQsE9snKudsSEmaJN6tNzm8_oMzCNcI5cs3cKCUFTG_ftOoIyo3vVQ&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqd7BZQsE9snKudsSEmaJN6tNzm8_oMzCNcI5cs3cKCUFTG_ftOoIyo3vVQ&s",
  "stock":23
},
{
  "name": "images?q=tbn:ANd9GcSwlBulrM2xkJkDa9DG_XrALs-jh0Vqk2tYdAhUAHiamz596jRB0tbEB-ZUyw&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcSwlBulrM2xkJkDa9DG_XrALs-jh0Vqk2tYdAhUAHiamz596jRB0tbEB-ZUyw&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlBulrM2xkJkDa9DG_XrALs-jh0Vqk2tYdAhUAHiamz596jRB0tbEB-ZUyw&s",
  "stock":150
},

  {
    "name": "googlelogo_desk_heirloom_color_150x55dp.gif",
    "path": "/home/saber/Desktop/auth/images/googlelogo_desk_heirloom_color_150x55dp.gif",
    "url": "https://www.google.com/images/branding/searchlogo/1x/googlelogo_desk_heirloom_color_150x55dp.gif",
    "stock":66,

},
{
  "name": "images?q=tbn:ANd9GcQG1GfhSsiV-HEvxLB4xUQDLPajmPNgy9v-Mf4q69bZAunzzgbZH5quCIdoEQ&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcQG1GfhSsiV-HEvxLB4xUQDLPajmPNgy9v-Mf4q69bZAunzzgbZH5quCIdoEQ&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1GfhSsiV-HEvxLB4xUQDLPajmPNgy9v-Mf4q69bZAunzzgbZH5quCIdoEQ&s",
  "stock":289
},
{
"name": "images?q=tbn:ANd9GcQiAZGPf977eECe3nyfPmP4e4sJf3Y4oBne6r9lVUHPuVccRpwjvD_wlRxmoQ&s",
"path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcQiAZGPf977eECe3nyfPmP4e4sJf3Y4oBne6r9lVUHPuVccRpwjvD_wlRxmoQ&s",
"url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAZGPf977eECe3nyfPmP4e4sJf3Y4oBne6r9lVUHPuVccRpwjvD_wlRxmoQ&s",
"stock":78
},
{
"name": "images?q=tbn:ANd9GcQMrIU9rD5zyTZICU2Pn3ycDCeiFG4uwhFAHe3jkxCyH9EeCjTWjnJFrGcLfxI&s",
"path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcQMrIU9rD5zyTZICU2Pn3ycDCeiFG4uwhFAHe3jkxCyH9EeCjTWjnJFrGcLfxI&s",
"url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrIU9rD5zyTZICU2Pn3ycDCeiFG4uwhFAHe3jkxCyH9EeCjTWjnJFrGcLfxI&s",
"stock":88

},
{
  "name": "images?q=tbn:ANd9GcQnuADSCzzkR1cckii9ifZqiu2azP3kBYijzt8nqHj_o9C303Elaxt-25aNCg&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcQnuADSCzzkR1cckii9ifZqiu2azP3kBYijzt8nqHj_o9C303Elaxt-25aNCg&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuADSCzzkR1cckii9ifZqiu2azP3kBYijzt8nqHj_o9C303Elaxt-25aNCg&s",
  "stock":88

},
{
  "name": "images?q=tbn:ANd9GcQTK-d3eJs-GjVjX3zq4HSgpTgR2uC5Z73qVvuAAk70zY_ZT7gsgKsrpgf8Q5w&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcQTK-d3eJs-GjVjX3zq4HSgpTgR2uC5Z73qVvuAAk70zY_ZT7gsgKsrpgf8Q5w&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTK-d3eJs-GjVjX3zq4HSgpTgR2uC5Z73qVvuAAk70zY_ZT7gsgKsrpgf8Q5w&s",
  "stock":88

}
,
{
  "name": "images?q=tbn:ANd9GcQxTV76WGr9o6lYybuuGx3ltLjCq3JnsLXHqvQF9JQ7rwxJ-wecSFnOSITQGw&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcQxTV76WGr9o6lYybuuGx3ltLjCq3JnsLXHqvQF9JQ7rwxJ-wecSFnOSITQGw&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTV76WGr9o6lYybuuGx3ltLjCq3JnsLXHqvQF9JQ7rwxJ-wecSFnOSITQGw&s",    "stock":88

},
{
  "name": "images?q=tbn:ANd9GcT8sh6Rkz2n2siNCj-NGBZPa1J4_KXt4FEWydWeK0FunjYtRRFl6BC4vDVNcQ&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcT8sh6Rkz2n2siNCj-NGBZPa1J4_KXt4FEWydWeK0FunjYtRRFl6BC4vDVNcQ&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sh6Rkz2n2siNCj-NGBZPa1J4_KXt4FEWydWeK0FunjYtRRFl6BC4vDVNcQ&s",
  "stock":88

},
{
  "name": "images?q=tbn:ANd9GcTE_m5O-YelwGmZ5o3b-42bn6j6Ib6QO2yASCvWq1M0QOJUpyEo-m1mXawUjdQ&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcTE_m5O-YelwGmZ5o3b-42bn6j6Ib6QO2yASCvWq1M0QOJUpyEo-m1mXawUjdQ&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_m5O-YelwGmZ5o3b-42bn6j6Ib6QO2yASCvWq1M0QOJUpyEo-m1mXawUjdQ&s",
  "stock":88

},
{
  "name": "images?q=tbn:ANd9GcTlFgwzjjuivkM9AGa7VC8rKQ0ZwE0ZBTV1Mj2cMG-22qQxkbohlnB6uR2JrA&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcTlFgwzjjuivkM9AGa7VC8rKQ0ZwE0ZBTV1Mj2cMG-22qQxkbohlnB6uR2JrA&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFgwzjjuivkM9AGa7VC8rKQ0ZwE0ZBTV1Mj2cMG-22qQxkbohlnB6uR2JrA&s",
  "stock":88

},
{
  "name": "images?q=tbn:ANd9GcTrc-Jc8DRU4gjmnC1ytLqgB7ScOsQ0G0hGxubb0ujIVhKAz08t5XCIaVcTOw&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcTrc-Jc8DRU4gjmnC1ytLqgB7ScOsQ0G0hGxubb0ujIVhKAz08t5XCIaVcTOw&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrc-Jc8DRU4gjmnC1ytLqgB7ScOsQ0G0hGxubb0ujIVhKAz08t5XCIaVcTOw&s",    "stock":88

},
{
  "name": "images?q=tbn:ANd9GcTrOpQWQ0Y0sCrtDlLlz6W3A-z2uoqZDsj21W7JN-ChvuUt2aLB9wdju7B02A&s",
  "path": "/home/saber/Desktop/auth/images/images?q=tbn:ANd9GcTrOpQWQ0Y0sCrtDlLlz6W3A-z2uoqZDsj21W7JN-ChvuUt2aLB9wdju7B02A&s",
  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOpQWQ0Y0sCrtDlLlz6W3A-z2uoqZDsj21W7JN-ChvuUt2aLB9wdju7B02A&s",    "stock":88

}
])
}
