import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// used to create fake backend

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { HttpService } from './_services/http.service';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
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
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }