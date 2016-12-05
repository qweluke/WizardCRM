import { Component, OnInit } from '@angular/core';

import { User } from '../shared/index';
import { UserService } from '../../../_services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'user-list.component.html',
})

export class UserListComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.searchUser()
            .subscribe(users => {
                this.users = users;
            });
    }

}