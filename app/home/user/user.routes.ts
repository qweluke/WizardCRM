import { Route } from '@angular/router';

import { UserComponent } from './index';
import {UserDetailsComponent} from "./details/details.component";

export const UserRoutes: Route[] = [
	{ path: 'users', component: UserComponent },
	{ path: 'users/:id', component: UserDetailsComponent },
];
