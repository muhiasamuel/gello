import { Component } from '@angular/core';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
 listOfString: string[]=['Mary','John','Anabel','Jane'];

 searchText:string = ''

 setSearchText(value:any){
  this.searchText = value;
 }
}
