import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list/product-list.component';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
 listOfString: string[]=['Mary','John','Anabel','Jane'];

 searchText:string = ''
 @ViewChild(ProductListComponent)productListComponent!: ProductListComponent; 

 setSearchText(value:any){
  this.searchText = value;
 }
}
