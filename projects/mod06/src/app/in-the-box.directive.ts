import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInTheBox]'
})
export class InTheBoxDirective {

  @Input('appInTheBox') borderStyle: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    if(this.borderStyle === undefined || this.borderStyle === ''){
      this.putInTheBox('solid 2px red');
      return;
    }
    this.putInTheBox(this.borderStyle);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.putInTheBox('none');
  }

  constructor(private element: ElementRef) {
    // this.putInTheBox('solid 2px red');
  }

  private putInTheBox(borderStyle: string): void {
    this.element.nativeElement.style.border = borderStyle;
  }

}
