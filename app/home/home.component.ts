import { Component } from '@angular/core';
import {FunctionsService} from './shared/index'

@Component({
    moduleId: module.id,
    selector: 'dashboard-cmp',
    templateUrl: 'home.component.html',
    providers: [FunctionsService]
})

export class HomeComponent {

    constructor(private functions:FunctionsService) {} // note the private keyword


    toggle(event:any) {
        return this.functions.xPanelToggle(event.srcElement);
    }

    xClose(event:any) {
        return this.functions.xPanelRemove(event.srcElement);
    }

}