import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { CustomerComponent } from './components/customer/customer.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { ShowCustomerComponent } from './components/customer/show-customer/show-customer.component';

import { ReadingComponent } from './components/reading/reading.component';
import { AddReadingComponent } from './components/reading/add-reading/add-reading.component';
import { ChartComponent } from './components/chart/chart.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { AuthGuard } from './auth/auth-guard';
//I am using standalone arquitecture
//benefits:
//Suitable for small, modular, or isolated components.
//obs: Angule Module is a different approach can be better than standalone in case 
//large enterprise applications like E-commmerce Platform.



export const routes: Routes = [
  {
    path: '',    //rota vazia 
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'customer', component: CustomerComponent },
      { path: 'customer/add', component: AddCustomerComponent },
      { path: 'reading', component: ReadingComponent },
      { path: 'reading/add', component: AddReadingComponent },
      { path: 'analytics', component: ChartComponent },
      { path: 'user/edit', component: UserEditComponent}
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: 'auth/login' }, //rota errada
];

export const appRouterProviders = [
    provideRouter(routes)
];