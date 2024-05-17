import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ngHostListener]',
  standalone: true
})
export class HostListenerDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'violet';
  }
}
