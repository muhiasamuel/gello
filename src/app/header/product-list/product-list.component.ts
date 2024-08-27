import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product={
    name: "Mango Mania",
    flavor: "Mango",
    mainIngredient: "Mango Juice",
    origin: "India",
    imageUrl: "/assets/images/mango-jello-1.jpg",
    inStock: 5
  }
}
