import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name='John Doe'
  addToCart: number = 0

  product={
    name: "Mango Mania",
    flavor: "Mango",
    mainIngredient: "Mango Juice",
    origin: "India",
    imageUrl: "/assets/images/mango-jello-1.jpg",
    inStock: 5
  }
  onNameChange(event: any){
    // this.name=event.target.value
    console.log(event.target.value); 
  }

  decreamentValue(){
    if(this.addToCart >0){
      this.addToCart--
    }
    
  }
  increamentValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++
    }
   
  }
}
