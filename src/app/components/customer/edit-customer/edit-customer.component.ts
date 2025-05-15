import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../interfaces/customer';
import { CustomerService } from '../../../services/customer.service';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-customer',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})

export class EditCustomerComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private _customerService: CustomerService,
    private dialogRef: MatDialogRef<EditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) private customer: Customer,) { }

  ngOnInit(): void {
    //console.log('customer', this.customer);
    this.form = this.fb
      .group({
        firstName: [this.customer.firstName, Validators.required],
        lastName: [this.customer.lastName, Validators.required],
        gender: [this.customer.gender, Validators.required],
        birthDate: [this.customer.birthDate, Validators.required],
      })
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // mês começa em 0
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  saveChanges(): void {
    if (this.form.valid) {
      
      this.customer.birthDate = this.formatDate(new Date(this.form.value.birthDate));
      this.customer.firstName = this.form.value.firstName;
      this.customer.lastName = this.form.value.lastName;
      this.customer.gender = this.form.value.gender;
      //console.log('updated customer', this.customer);

      this._customerService.updateCustomer(this.customer).subscribe();
      this.dialogRef.close(this.form.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
