import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { listOfCustomers } from '../../../shared/list-customers';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-customer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  myList: Customer[] = listOfCustomers;
  nameTest: string = "mensage";

  constructor (private router: Router){}

  ngOnInit() : void{  //deveria importar o metodo ngOnit !!
    this.refreshPage();
  }

  

  refreshPage() {
    this.myList = listOfCustomers;
  }

  public navigateTo() {
    this.router.navigate(['/customer/add']);
  }
}
