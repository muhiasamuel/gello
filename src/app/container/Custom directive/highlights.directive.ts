import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('MouseEvent')OnMouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'highlight-product')
  }
  @HostListener('MouseEvent')OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'highlight-product')
  }
}
