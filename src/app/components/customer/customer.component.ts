import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';

        // ADCIONAR COMMOM TBM NOS IMPORTS
@Component({
  selector: 'app-customer',
  //standalone: true,
  imports: [AddCustomerComponent],  //it works without CommonModule and RouterModule
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
