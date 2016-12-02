import { Route } from '@angular/router';

import { BlankPageRoutes } from './blank-page/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard3',
    	component: DashboardComponent,
    	children: [
	    	...BlankPageRoutes,
    	]
  	}
];
