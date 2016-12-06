import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { UserComponent, UserDetailsModule } from './index';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        UserDetailsModule,
        DataTableModule,SharedModule
    ],
    declarations: [
        UserComponent
    ],
    exports: [UserComponent]
})

export class UserModule {
}
