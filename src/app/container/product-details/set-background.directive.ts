import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[SetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  // private element:ElementRef
  constructor(private element:ElementRef) {
    // this.element = element
   }

   ngOnInit(){
    this.element.nativeElement.style.backgroundColor ='#36544F'
    this.element.nativeElement.style.color ='white'
   }
   
}
