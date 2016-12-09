import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from '../shared/index';
import {UserService} from '../../../_services/index';


import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'edit.component.html',
    providers: [UserService]
})

export class UserEditComponent implements OnInit {

    user:User;
    private userId:number;

    constructor(private route:ActivatedRoute,
                private http:UserService) {

        this.user = new User();
    }

    ngOnInit() {

        this.route.params.forEach((params:Params) => {
            if (params['id'] !== undefined) {
                this.userId = +params['id'];
            }
        });

        if (this.userId) {
            this.http.getUser(this.userId)
                .subscribe(
                    data => {
                        this.user = <User>data;
                    },
                    err => console.log('error', err)
                );
        }
    }

    updateUser() {
        this.http.updateUser(this.userId, this.user)
            .subscribe(
                data => {
                    console.log(data);
                },
                err => console.log('error', err)
            );

    }


}