import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TopNavComponent } from './shared/navbar/top-nav.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { UserModule } from './user/user.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UserModule,
    ],
    declarations: [HomeComponent, TopNavComponent, SidebarComponent],
    exports: [HomeComponent, TopNavComponent, SidebarComponent]
})

export class HomeModule { }