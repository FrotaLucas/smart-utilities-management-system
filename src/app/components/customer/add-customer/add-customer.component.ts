import { Component, Inject, OnInit, Optional } from '@angular/core';
import { list } from '../../../shared/list-customers';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../interfaces/customer';
import { Reading } from '../../../interfaces/reading';
import { CustomerService } from '../../../services/customer.service';
import { ReadingService } from '../../../services/reading.service';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    MatButtonModule,
    MatIcon
  ],  //it works without CommomMOdule and RouterModule
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css' //need to be plural here ?
})

export class AddCustomerComponent implements OnInit {

  //why this ! symbol??
  form!: FormGroup;
  myList: Customer[] = list;
  isNewCustomer: boolean = true;
  reading: Reading | null = null;

  //pq formgroup nao entra tbm no construtor?
  constructor(private fb: FormBuilder, private _customerService: CustomerService,
    private _readingService: ReadingService,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: { reading: Reading | null, isNewCustomer: boolean } | null,
    @Optional() private dialogRef: MatDialogRef<AddCustomerComponent>, private snackBar: MatSnackBar) {
    //this.reading = this.data.reading || null;
    this.reading = this.data?.reading ?? null
    this.isNewCustomer = this.data?.isNewCustomer ?? true;
  }

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
      customer.birthDate = this.formatDate(new Date(customer.birthDate));

      //se existir esse componente abrir e  reading tiver algum valor
      if (this.data?.reading) {
        this.data.reading.customer.firstName = customer.firstName;
        this.data.reading.customer.lastName = customer.lastName;
        this.data.reading.customer.gender = customer.gender;
        this.data.reading.customer.birthDate = customer.birthDate;

        this._readingService.addReading(this.data.reading).subscribe(
          {
            next: () => this.dialogRef.close(true),
            error: () => this.dialogRef.close(false)
          }
        );

      }

      else {
        this._customerService.addCustomer(customer).subscribe();

        this.form.reset();
        this.snackBar.open("customer added successfully", "", {duration: 2000})
      }
      
      



    }
  }


}
