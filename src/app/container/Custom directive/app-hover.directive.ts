import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  // create an element reference of the selector
  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string ='pink'
}
