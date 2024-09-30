import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  subscribe(type:string){
    alert('Thank you for signing up for '+type+' .You can now save produts in the cart')
  }
}
