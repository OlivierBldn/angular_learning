// // EX 1

// import { Routes } from '@angular/router';
// // import { RouterComponent } from ./

// export const routes: Routes = [{
//     path : "",
//     // pathMatch : "full",
//     loadComponent : () => import('./home/home.component').then(c => c.HomeComponent)
// },{
//     path : "messenger",
//     // component : MessengerComponent,
//     loadComponent : () => import('./messenger/messenger.component').then(c => c.MessengerComponent)
// },{
//     path : "project",
//     loadComponent : () => import('./project/project.component').then(c => c.ProjectComponent)
// },
// {
//     path : "login",
//     loadComponent : () => import('./login/login.component').then(c => c.LoginComponent)
// }];


// // EX 2 ---- Ajout protection des routes

// // Dans le terminal -> création du Guard ->  ng g guard auth

import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [{
    path : "",
    canActivate : [() => authGuard()],
    loadComponent : () => import('./home/home.component').then(c => c.HomeComponent)
},{
    path : "messenger",
    canActivate : [() => authGuard()],
    loadComponent : () => import('./messenger/messenger.component').then(c => c.MessengerComponent)
},{
    path : "project",
    canActivate : [() => authGuard()],
    loadComponent : () => import('./project/project.component').then(c => c.ProjectComponent)
},
{
    path : "login",
    loadComponent : () => import('./login/login.component').then(c => c.LoginComponent)
}];