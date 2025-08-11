import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/main.component';
import { CreateReportFormComponent } from './create-report-form/create-report-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        children: [
            // { path: '', redirectTo: 'signin', pathMatch: 'full' },
            // { path: 'signin', component: SigninComponent },
            // { path: 'faq', component: FaqComponent },
        ]
    },

    {
        path: 'main',
        component: MainComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'report', component: CreateReportFormComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
