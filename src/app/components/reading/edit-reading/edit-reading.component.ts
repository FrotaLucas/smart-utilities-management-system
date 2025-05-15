import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reading } from '../../../interfaces/reading'

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-edit-reading',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  templateUrl: './edit-reading.component.html',
  styleUrl: './edit-reading.component.css'
})


export class EditReadingComponent implements OnInit{

  form!: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) private reading: Reading, 
  private dialogRef: MatDialogRef<EditReadingComponent>) {

  }

  ngOnInit(): void {
       this.form = this.fb
      .group({
        meterId: [this.reading.meterId, Validators.required],
        kindOfMeter: [this.reading.kindOfMeter, Validators.required],
        meterCount: [this.reading.meterCount, Validators.required],
        comment: [this.reading.comment],
        substitute: [this.reading.substitute, Validators.required],
        dateOfReading: [this.reading.dateOfReading, Validators.required],
      })
  }

  onSubmit(): void{

  }

}
