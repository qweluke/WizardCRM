import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model:any = {};
    loading = false;
    error = '';

    constructor(private router:Router,
                private authenticationService:AuthenticationService) {
    }

    ngOnInit() {
        document.body.classList.add('login'); //needed to change background color
        // reset login status
        this.authenticationService.logout();
    }


    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                    if (result === true) {
                        this.router.navigate(['/dashboard']);
                    }
                }, (err) => {
                    this.loading = false;
                    document.getElementById('response').innerHTML = `
                        <div class="alert alert-danger alert-dismissible fade in" role="alert" style="padding:6px;">
                            <strong>Error!</strong> ${err}
                        </div>
                    `;
                }
            );
    }
}
