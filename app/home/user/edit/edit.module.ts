import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { UserEditComponent } from './index';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        UserEditComponent,
    ],
    exports: [UserEditComponent]
})

export class UserEditModule {
}
