import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard'),
        children: [
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection'),
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options'),
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views'),
            },
            {
                path: 'user/:id',
                title: 'User View',
                loadComponent: () => import('./dashboard/pages/user/user'),
            },
            {
                path: 'user-list',
                title: 'User List',
                loadComponent: () => import('./dashboard/pages/users/users'),
            },
            {
                path: 'view-transition',
                title: 'View Transition',
                loadComponent: () => import('./dashboard/pages/view-transitions/view-transitions'),
            },
            {
                path: 'view-transition-2',
                title: 'View Transition 2',
                loadComponent: () => import('./dashboard/pages/view-transitions/view-transitions2'),
            },
            {
                path: '', redirectTo: 'change-detection', pathMatch: 'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }



];