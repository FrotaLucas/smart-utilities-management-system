import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { listOfCustomers } from '../../../shared/list-customers';
import { Customer } from '../../../interfaces/customer';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule],  //it works without CommomMOdule and RouterModule
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit{

  ngOnInit(): void {
  };


}
