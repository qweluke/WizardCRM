import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
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

    updateUser(id:number, user:User): Observable<User>{


        return this.http
            .patch(`/user/${id}`, this.parseUserUpdate(user, 'admin'))
            .map((res) => { return res.json(); })
            .catch(this.handleError);
    }

    searchUser(query:string):Observable<User[]> {
        return this.http
            .get(`/user/?${query}`)
            .map((res) => { return res.json(); });
    }

    private parseUserUpdate(user:User, type:string) {
        console.log(user.roles);
        let params: URLSearchParams = new URLSearchParams();
        for (var key in user) {
            if (user.hasOwnProperty(key)) {
                params.set(key, user[key]);
            }
        }
        if('true' === params.get('enabled')) {
            params.set('enabled', '1');
        } else {
            params.set('enabled', '0');
        }

        let roles:any;

        for (let role of user.roles) {
            if('ADMIN' == role) {
                params.set('roles[]', 'admin');
            }
        }
        params.set('roles[]', 'user');
        //params.set('roles[]', 'ROLE_API');

        params.delete('id');

        let data:any;
        if('user' == type) {
            params.delete('username');
            params.delete('roles');
        }

        return params;
    }
}