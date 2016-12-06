import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/primeng';

import { UserDetailsComponent } from './index';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ChartModule
    ],
    declarations: [
        UserDetailsComponent
    ],
    exports: [UserDetailsComponent]
})

export class UserDetailsModule {
}
