import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { listOfCustomers } from '../../../shared/list-customers';
import { Customer } from '../../../interfaces/customer';


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

export class AddCustomerComponent implements OnInit{

  //why this ! symbol??
  form!: FormGroup;
  myList: Customer[] = listOfCustomers;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb
    .group({name: ['', Validators.required],
      familyName: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
    })
  }

  onSubmit(): void {
    if(this.form.valid){
      const customer: Customer = this.form.value;
      this.myList.push(customer);
      console.log("customer added", customer);
      

    }
  }


}
