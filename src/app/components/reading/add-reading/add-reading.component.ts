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

import { DatePipe } from '@angular/common';

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
  providers: [DatePipe],
  templateUrl: './add-reading.component.html',
  styleUrl: './add-reading.component.css'
})
export class AddReadingComponent implements OnInit {

  form!: FormGroup;
  mylist: Reading[] = listOfreading;

  constructor(private fb: FormBuilder, private _readingService: ReadingService, 
    private dialog: MatDialog, private snackBar: MatSnackBar, private datePipe: DatePipe ) { }

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

 

  onSubmit(): void {

    if (this.form.valid) {
      const reading: Reading = {
        ...this.form.value,
        substitute: false,
        customer: {
          id: this.form.value.customerId,
          gender: "M", //no effect in backend
          birthDate: "1800-01-01" //no effect in backend
        }
      };

      const formattedDate = this.datePipe.transform(reading.dateOfReading);
      reading.dateOfReading = formattedDate as any;

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
