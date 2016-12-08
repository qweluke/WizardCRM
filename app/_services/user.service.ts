﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpService } from './index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { AuthenticationService } from './index';
import { User } from '../home/user/shared/index';

@Injectable()
export class UserService {

    constructor(private http:HttpService) {
    }


    private handleError(error:any) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }

    getUser(id:number): Observable<User>{
        return this.http
            .get(`/user/${id}`)
             .map((res) => { return res.json(); })
            .catch(this.handleError);
    }

    searchUser(query:string):Observable<User[]> {
        return this.http
            .get(`/user/?${query}`)
            .map((res) => { return res.json(); });
    }
}