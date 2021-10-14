import { Directive, Input } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
import { PatternValidator } from '@angular/forms';
@Directive({
  selector: '[appTesting]'
})
export class TestingDirective {

  constructor(private elementRef: ElementRef) { }
  
@Input() appTesting: boolean  = true;
@HostListener('change')
onChange() {
  console.log('test');
  if (this.elementRef.nativeElement.value !='ham') {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  } else {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}

@HostListener('click')
onClick() {
  console.log('test');
  if (this.appTesting) {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  } else {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
}


