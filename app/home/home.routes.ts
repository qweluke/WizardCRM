import { Route } from '@angular/router';

import { UserRoutes } from './user/index';
import { HomeComponent } from './index';
import { AuthGuard } from '../_guards/index';

export const HomeRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: HomeComponent,
		canActivate: [AuthGuard],
    	children: [
	    	...UserRoutes,
    	]
  	}
];
