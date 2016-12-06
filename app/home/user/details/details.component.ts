import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { User } from '../shared/index';
import {UserService} from '../../../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'details.component.html',
    providers: [UserService]
})

export class UserDetailsComponent implements OnInit {

    public user:any;
    public data:any;
    public options:any;


    constructor(
        private route:ActivatedRoute,
        private http:UserService) {

        this.options = {
            title: {
                display: false
            },
            responsive: false,
            maintainAspectRatio: false
        };

        // todo: fill with proper data
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October'],
            datasets: [
                {
                    label: 'My Second dataset',
                    backgroundColor: '#26B99A',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90, 20, 14, 19]
                }
            ]
        }
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            return this.http.getUser(+params['id']).subscribe((data)=> {
                this.user = data;
            });
        });
    }

}