import { Component, OnInit } from '@angular/core';
import { listOfreading } from '../../../shared/list-readings';
import { CommonModule } from '@angular/common';
import { Reading } from '../../../interfaces/reading';
import { ReadingService } from '../../../services/reading.service';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddCustomerComponent } from '../../customer/add-customer/add-customer.component';

@Component({
  selector: 'app-add-reading',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-reading.component.html',
  styleUrl: './add-reading.component.css'
})
export class AddReadingComponent implements OnInit {

  form!: FormGroup;
  mylist: Reading[] = listOfreading;

  constructor(private fb: FormBuilder, private _readingService: ReadingService, 
    private dialog: MatDialog, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.form = this.fb
      .group({
        meterId: ['', Validators.required],
        customerId: [''],
        kindOfMeter: ['', Validators.required],
        meterCount: ['', Validators.required],
        comment: [''],  //nao requerido!!
        dateOfReading: ['', Validators.required],
      }
      )
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // mês começa em 0
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const reading: Reading = {
        ...this.form.value,
        substitute: false,
        customer: {
          id: this.form.value.customerId,
          gender: "M",
          birthDate: "1800-01-01"
        }
      };

      reading.dateOfReading = this.formatDate(new Date(reading.dateOfReading));

      if( !this.form.value.customerId){

        const dialogRef = this.dialog.open(AddCustomerComponent, {
          width: '800px',
          data: {
            reading: reading,
            isNewCustomer: false
          }
        });

        dialogRef.afterClosed().subscribe((result)=> {
          if(result == true) {
            this.form.reset();
            this.snackBar.open("customer created and reading saved successfully", " ", {duration: 2000});
          }
        

        })
      }

      else{
        this._readingService.addReading(reading).subscribe();
        this.form.reset();
        this.snackBar.open("data added successfully", "", {duration: 2000})
      }

    }
  }

}
