import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { list } from '../../../shared/list-customers';
import { CustomerService } from '../../../services/customer.service';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-customer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  listOfCustomers!: Customer[];

  myList: Customer[] = list;
  nameTest: string = "mensage";

  constructor(private router: Router, private dialog: MatDialog, private _customerService: CustomerService) { }

  ngOnInit(): void {  //deveria importar o metodo ngOnit !!
    this.refreshPage();
  }

  refreshPage() {
    this._customerService.getCustomers().subscribe(data => {
      this.listOfCustomers = data;
      //console.log('list', this.listOfCustomers)
    }
    );

  }

  public navigateTo() {
    this.router.navigate(['/customer/add']);
  }

  // deleteCustomer(id?: number): void {
  //   this.myList = this.myList.filter(item => item.id !== id);
  // }

  deleteCustomer(uuid: string): void {

    this._customerService.deleteCustomer(uuid).subscribe(customer =>
      console.log('deleted customer', customer)
    );

    this.refreshPage();
  }


  editCustomer(id?: number): void {
    const customer = this.myList.find(item => item.id === id);

    //dialog passa o customer dentro do campo data
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '600px',
      data: customer
    });

    //dialogRef recebe de volta o customer editado
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        //encontar o indice na lista Mylist
        const index = this.myList.findIndex(item => item.id === id);
        //se encontrar algo
        if (index !== -1) {
          this.myList[index] = result;
        }
      }
    })
  }

  editCustomerr(customer: Customer): void {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '600px',
      data: customer
    });

    this.refreshPage();
  }
}
