import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpService } from './index';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { User } from '../home/user/shared/index';

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