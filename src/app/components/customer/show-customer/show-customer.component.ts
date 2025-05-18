import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { list } from '../../../shared/list-customers';
import { customerColumns } from '../../../shared/customer-column';
import { CustomerService } from '../../../services/customer.service';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTableModule, MatCellDef, MatHeaderCellDef, MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-show-customer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule,
    MatLabel, MatFormField, MatInput, MatTableModule, MatCellDef, MatHeaderCellDef,
    MatPaginator, MatSortModule, MatTooltip],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent implements OnInit, AfterViewInit {

  listOfCustomers!: Customer[];
  displayedColumns: string[] = customerColumns;

  dataSource!: MatTableDataSource<Customer>
  //class MatSort is the reference to the instance/attribut matSort inside the <table>
  @ViewChild(MatSort) refMatSort!: MatSort;
  //MatSort is reference and MatSortModule is the html component ** setinhas de ordenacao

  //Class MatPaginator is the reference to the element <mat-paginator> inside the <table>
  @ViewChild(MatPaginator) refMatPaginator!: MatPaginator;

  //myList: Customer[] = list;
  //nameTest: string = "mensage";

  constructor(private router: Router, private dialog: MatDialog, private _customerService: CustomerService, private snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {  //deveria importar o metodo ngOnit !!
    this.refreshPage();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.refMatPaginator;
    this.dataSource.sort = this.refMatSort;
  }

  refreshPage() {
    this._customerService.getCustomers().subscribe(data => {
      this.listOfCustomers = data;
      this.dataSource.data = data;

      //references
      this.dataSource.paginator = this.refMatPaginator;
      this.dataSource.sort = this.refMatSort;
      console.log('dataSource', this.dataSource.data);
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

    this._customerService.deleteCustomer(uuid).subscribe(customer => {
      console.log('deleted customer', customer)
      this.refreshPage()
    }
    );

   this.snackBar.open( 'successfully deleted','', {duration: 2000});
  }

  applyFilter(event: Event) {
      const filteredData = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filteredData.trim().toLowerCase();
  }

  exportData(): void {
    if (!this.listOfCustomers || this.listOfCustomers.length === 0) {
      console.warn('Nothing to export.');
      return;
    }

    const json = JSON.stringify(this.listOfCustomers, null, 2); // indentado
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'customers.json';
    a.click();

    URL.revokeObjectURL(url);

  }

  // editCustomer(id?: number): void {
  //   const customer = this.myList.find(item => item.id === id);

  //   //dialog passa o customer dentro do campo data
  //   const dialogRef = this.dialog.open(EditCustomerComponent, {
  //     width: '600px',
  //     data: customer
  //   });

  //   //dialogRef recebe de volta o customer editado
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {

  //       //encontar o indice na lista Mylist
  //       const index = this.myList.findIndex(item => item.id === id);
  //       //se encontrar algo
  //       if (index !== -1) {
  //         this.myList[index] = result;
  //       }
  //     }
  //   })
  // }

  editCustomer(customer: Customer): void {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '600px',
      data: customer
    });

    //angula atualiza sem precisar chamar esse metodo
    //this.refreshPage();
  }
}
