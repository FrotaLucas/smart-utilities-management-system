import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../interfaces/customer';

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
    private dialogRef: MatDialogRef<EditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) private customer: Customer) { }

  ngOnInit(): void {
    //console.log('customer', this.customer);
    this.form = this.fb
    .group({name: [this.customer.firstName, Validators.required],
      familyName: [this.customer.familyName, Validators.required],
      gender: [this.customer.gender, Validators.required],
      birthDate: [this.customer.birthDate, Validators.required],
    })
  }

  saveChanges(): void {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }

  cancel(): void{
    this.dialogRef.close();
  }
}
