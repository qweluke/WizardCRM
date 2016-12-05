import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TopNavComponent } from './shared/navbar/top-nav.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { UserModule } from './user/user.module';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UserModule,
        Ng2BootstrapModule
    ],
    declarations: [HomeComponent, TopNavComponent, SidebarComponent],
    exports: [HomeComponent, TopNavComponent, SidebarComponent]
})

export class HomeModule { }