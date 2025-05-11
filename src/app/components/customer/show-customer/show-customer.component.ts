import { Component } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { listOfCustomers } from '../../../shared/list-customers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-customer',
  imports: [CommonModule],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  myList: Customer[] = listOfCustomers;
  nameTest: string = "mensage";

  ngOnit() : void{
    this.refreshPage();
  }

  refreshPage() {
    this.myList = listOfCustomers;
  }

  public eventClick() {
    this.nameTest = "New Name";
    console.log(this.nameTest);
  }
}
