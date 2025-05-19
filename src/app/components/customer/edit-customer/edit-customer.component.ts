import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../interfaces/customer';
import { CustomerService } from '../../../services/customer.service';
import { DatePipe } from '@angular/common';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  providers: [MatNativeDateModule, DatePipe],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})

export class EditCustomerComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private _customerService: CustomerService,
    private dialogRef: MatDialogRef<EditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) private customer: Customer,
    private snackBar: MatSnackBar, private datePipe: DatePipe) { }

  ngOnInit(): void {
    //console.log('customer', this.customer);
    this.form = this.fb
      .group({
        firstName: [this.customer.firstName, Validators.required],
        lastName: [this.customer.lastName, Validators.required],
        gender: [this.customer.gender, Validators.required],
        birthDate: [new Date(this.customer.birthDate), Validators.required],
      })
  }

  saveChanges(): void {
    if (this.form.valid) {

      const formattedDate = this.datePipe.transform(this.form.value.birthDate, 'yyyy-MM-dd');
      this.customer.birthDate = formattedDate as any;
      this.customer.firstName = this.form.value.firstName;
      this.customer.lastName = this.form.value.lastName;
      this.customer.gender = this.form.value.gender;
      console.log('updated customer', this.customer);

      this._customerService.updateCustomer(this.customer).subscribe();
      this.snackBar.open("reading successfully updated", "", { duration: 2000 });
      this.dialogRef.close(this.form.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
