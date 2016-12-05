import { Routes, RouterModule } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { HomeRoutes } from './home/home.routes';


const appRoutes: Routes = [
    ...LoginRoutes,
    ...HomeRoutes,

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);