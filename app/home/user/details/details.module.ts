import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/primeng';

import { UserDetailsComponent } from './index';
import { DaterangepickerComponent } from '../../shared/index';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ChartModule
    ],
    declarations: [
        UserDetailsComponent,
        DaterangepickerComponent
    ],
    exports: [UserDetailsComponent]
})

export class UserDetailsModule {
}
