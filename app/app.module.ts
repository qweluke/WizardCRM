import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

// used to create fake backend

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, HttpService } from './_services/index';

import { HomeModule } from './home/index';
import { LoginModule } from './login/login.module';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        HomeModule,
        LoginModule
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: HttpService,
            useFactory: (backend: XHRBackend, options: RequestOptions) => {
                return new HttpService(backend, options);
            },
            deps: [XHRBackend, RequestOptions]
        },
        AuthGuard,
        AuthenticationService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }