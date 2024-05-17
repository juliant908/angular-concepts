import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ngInput]',
  standalone: true
})
export class InputDirective {
  @Input() color!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.color;
  }
  constructor(private el: ElementRef) { }

}
