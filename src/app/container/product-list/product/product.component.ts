import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product!: {
    id: number;
    name: string;
    flavour: string;
    origin: string;
    main_ingredient: string;
    image_url: string;
    is_in_inventory: boolean;
    items_left: number;
    packaging: string[];
  };

}
