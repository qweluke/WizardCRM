import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    public localhost: String = 'localhost';
    public port: String = '8000';

    public token: string;

    private authenticateUrl = 'http://'+this.localhost+':'+this.port+'/api/security/login';

    constructor(private http: Http) {
    // set token if saved in local storage
        this.token = localStorage.getItem('token');
    }

    login(username: string, password: string): Observable<boolean> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams()
        urlSearchParams.append('_username', username);
        urlSearchParams.append('_password', password);
        let body = urlSearchParams.toString()

        return this.http.post(this.authenticateUrl, body, {headers:headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response


                let token = response.json() && response.json().token;
                let user = response.json() && response.json().user;

                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ user }));
                    localStorage.setItem('token', token );

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            })
            .catch(e => {
                if (e.status === 401) {
                    return Observable.throw('Bad credentials');
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}