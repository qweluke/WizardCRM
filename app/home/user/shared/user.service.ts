import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpService } from 'app/_services/http.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from 'app/_services/index';
import { User } from 'index';

@Injectable()
export class UserService {

    constructor(private http:HttpService) {
    }

    getUser(id:number) {
        return this.http.get(`/user/${id}`).map((res) => {
            return res.json();
        });
    }

    searchUser():Observable<User[]> {
        return this.http.get(`/user/`).map((res) => {
            return res.json();
        });
    }
}