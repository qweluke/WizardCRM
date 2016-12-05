import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserListComponent, UserComponent } from './index';


@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        UserComponent,
        UserListComponent
    ],
    exports: [UserComponent, UserListComponent]
})

export class UserModule { }
