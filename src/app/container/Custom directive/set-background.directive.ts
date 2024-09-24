import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[SetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  constructor(private element:ElementRef) {
   }

   ngOnInit(){
    this.element.nativeElement.style.backgroundColor ='#36544F'
    this.element.nativeElement.style.color ='white'
   }
   
}
