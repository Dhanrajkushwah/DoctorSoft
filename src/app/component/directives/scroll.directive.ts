import { Directive,  HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
@Input('appScroll') goNextId!:string ;
@HostListener('click')
onClick(){
   document.getElementById(this.goNextId)?.scrollIntoView({behavior : 'smooth'})
}
}
