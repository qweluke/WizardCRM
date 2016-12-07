import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { User } from '../shared/index';
import {UserService} from '../../../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'edit.component.html',
    providers: [UserService]
})

export class UserEditComponent implements OnInit {

    public user:User[];

    constructor(
        private route:ActivatedRoute,
        private http:UserService) {

    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            return this.http.getUser(+params['id']).subscribe((data)=> {
                this.user = data;
            });
        });
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}