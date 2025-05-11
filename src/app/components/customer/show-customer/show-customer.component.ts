import { Component } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { listOfCustomers } from '../../../shared/list-customers';

@Component({
  selector: 'app-show-customer',
  imports: [],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  myList: Customer[] = listOfCustomers;


  ngOnit() : void{
    this.refreshPage();
  }

  refreshPage() {
    this.myList = listOfCustomers;
  }
}
