import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { User } from '../shared/index';
import {UserService} from '../../../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'details.component.html',
    providers: [UserService]
})

export class UserDetailsComponent implements OnInit {

    @Input() user: User;
    public data:any;

    private options: Object = {
        'showDropdowns': true,
        'showWeekNumbers': true,
        'timePicker': true,
        'timePicker12Hour': false,
        'alwaysShowCalendars': true,
        'minDate': '06/01/2014',
        'buttonClasses': 'btn btn-outline-success',
        'applyClass': 'btn btn-outline-primary',
        'cancelClass': 'btn btn-outline-warning'
    };

    private selectedDate(value: any) {
        console.log(value);
    }


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

        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.http.getUser(id)
                    .subscribe(
                        data => { this.user = <User>data },
                        err => console.log('error', err)
                    );
            }
        });
    }

}