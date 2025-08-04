import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


export const routes: Routes = [
    {
        path: '', // صفحه اول
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        children: [
            { path: '', redirectTo: 'signin', pathMatch: 'full' },
            // { path: 'signin', component: SigninComponent },
            // { path: 'faq', component: FaqComponent },
        ]
    },
    {
        // path: 'main',
        // component: MainComponent,
        // children: [
        //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        //     // { path: 'dashboard', component: DashboardComponent },
        //     // { path: 'profile', component: ProfileComponent },
        // ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
