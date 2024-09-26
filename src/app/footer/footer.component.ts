import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
state:string = 'info'

view(type:string){
  if (type === "info") {
    this.state = "info"
  }
  if (type === "Service" ) {
    this.state = "Service"
  } 
  if (type === "Agreement" ) {
    this.state = "Agreement"
  } 
  else {
    this.state = "Privacy"
  }
}
}
