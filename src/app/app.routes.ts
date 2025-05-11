import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { CustomerComponent } from './components/customer/customer.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { ShowCustomerComponent } from './components/customer/show-customer/show-customer.component';

import { ReadingComponent } from './components/reading/reading.component';


//I am using standalone arquitecture
//benefits:
//Suitable for small, modular, or isolated components.
//obs: Angule Module is a different approach can be better than standalone in case 
//large enterprise applications like E-commmerce Platform.


export const routes: Routes = [
    {
      path: 'customer', component: CustomerComponent,
      children: [
        // { path: 'api', component: ComponentChildren inside of CustomerComponent, shared Tab }
      ]
    },
    {
      path: 'customer/add', component: AddCustomerComponent
    },
    {
      path: 'reading', component: ReadingComponent
    }
    // { path: '', redirectTo: 'customer', pathMatch: 'full' },
    // { path: '**', redirectTo: 'customer' }
  ];

export const appRouterProviders = [
    provideRouter(routes)
];