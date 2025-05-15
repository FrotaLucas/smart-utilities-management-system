import { Component, OnInit } from '@angular/core';
import { listOfreading } from '../../../shared/list-readings';
import { CommonModule } from '@angular/common';
import { Reading } from '../../../interfaces/reading';
import { ReadingService } from '../../../services/reading.service';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-reading',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-reading.component.html',
  styleUrl: './add-reading.component.css'
})
export class AddReadingComponent implements OnInit{

  form!: FormGroup;
  mylist: Reading[] = listOfreading;

  constructor(private fb: FormBuilder, private _readingService: ReadingService){}

  ngOnInit(): void {
    this.form = this.fb
    .group({meterId: ['', Validators.required],
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
    if(this.form.valid){
      const reading: Reading = this.form.value;
      reading.substitute = false;

      if (!reading.customer) {
      reading.customer = {
        id: 0,
        uuid: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: ''
      };
    }

      reading.customer.id = this.form.value.customerId;
      reading.customer.birthDate = "1990-01-01";
      reading.customer.gender = "M";

      reading.dateOfReading = this.formatDate( new Date(reading.dateOfReading));

      this._readingService.addReading(reading).subscribe();

      //this.mylist.push(reading);
      console.log('new reading addes', reading);
    }
  }
 
}
