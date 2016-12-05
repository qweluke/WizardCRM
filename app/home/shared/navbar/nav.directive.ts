import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({selector: '[sidebar-menu]'})
export class NavDirective {

    constructor(el:ElementRef, renderer:Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}