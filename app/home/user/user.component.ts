import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/index';

@Component({
	moduleId: module.id,
	selector: 'user-cmp',
	providers: [UserService],
	templateUrl: 'user.component.html'
})

export class UserComponent {

	public userList:any[];
	public adminList:any[];

	constructor(private users:UserService) {}

	ngOnInit(): void {
		this.getUsers();
        this.getAdmins();
	}

    getUsers() {
        return this.users.searchUser('role=user').subscribe((data)=> {
            this.userList = data;
        });
    }

    getAdmins() {
        return this.users.searchUser('role=admin').subscribe((data)=> {
            this.adminList = data;
        });
    }


}
