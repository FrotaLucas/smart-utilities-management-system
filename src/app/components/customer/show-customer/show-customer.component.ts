import { Component } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { listOfCustomers } from '../../../shared/list-customers';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-customer',
  //standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  myList: Customer[] = listOfCustomers;
  nameTest: string = "mensage";

  constructor (private router: Router){}

  ngOnit() : void{
    this.refreshPage();
  }

  refreshPage() {
    this.myList = listOfCustomers;
  }

  public navigateTo() {
    this.router.navigate(['/customer/add']);
  }
}
