import { Component, OnInit } from '@angular/core';
import { listOfreading } from '../../../shared/list-readings';
import { CommonModule } from '@angular/common';
import { Reading } from '../../../interfaces/reading';


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

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb
    .group({meterId: ['', Validators.required],
      kindOfMeter: ['', Validators.required],
      meterCount: ['', Validators.required],
      comment: ['', Validators.required],  //nao requerido!!
      dateOfReading: ['', Validators.required],
    }
    )
  }

  onSubmit(): void {
    if(this.form.valid){
      const reading: Reading = this.form.value;
      this.mylist.push(reading);
      console.log('new reading addes');
    }
  }
 
}
