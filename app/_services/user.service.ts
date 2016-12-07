import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpService } from './index';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { AuthenticationService } from './index';
import { User } from '../home/user/shared/index';

@Injectable()
export class UserService {

    constructor(private http:HttpService) {
    }


    getUser(id:number): Observable<User[]>{
        return this.http
            .get(`/user/?${id}`).map((res) => {
                return res.json();
        });
    }

    searchUser(query:string):Observable<User[]> {
        return this.http.get(`/user/?${query}`).map((res) => {
            return res.json();
        });
    }
}