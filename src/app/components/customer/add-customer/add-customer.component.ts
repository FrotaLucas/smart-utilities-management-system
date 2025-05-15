import { Component, OnInit } from '@angular/core';
import { list } from '../../../shared/list-customers';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../interfaces/customer';
import { CustomerService } from '../../../services/customer.service';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule
  ],  //it works without CommomMOdule and RouterModule
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css' //need to be plural here ?
})

export class AddCustomerComponent implements OnInit {

  //why this ! symbol??
  form!: FormGroup;
  myList: Customer[] = list;

  //pq formgroup nao entra tbm no construtor?
  constructor(private fb: FormBuilder, private _customerService: CustomerService) { }

  ngOnInit(): void {
    this.form = this.fb
      .group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        birthDate: ['', Validators.required],
      })
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // mês começa em 0
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const customer: Customer = this.form.value;

      // Converter birthDate para string no formato desejado
      customer.birthDate = this.formatDate(new Date(customer.birthDate));

      this._customerService.addCustomer(customer).subscribe(customer =>
        console.log('new customer added', customer)
      );
    }
  }


}
