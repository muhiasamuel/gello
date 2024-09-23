import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  OnMouseEnter(){
    
  }
}
