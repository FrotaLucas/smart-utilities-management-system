import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reading } from '../../../interfaces/reading'
import { ReadingService } from '../../../services/reading.service';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
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
  providers: [DatePipe],
  templateUrl: './edit-reading.component.html',
  styleUrl: './edit-reading.component.css'
})


export class EditReadingComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private _readingService: ReadingService,
    @Inject(MAT_DIALOG_DATA) private reading: Reading,
    private dialogRef: MatDialogRef<EditReadingComponent>, private datePipe: DatePipe) {

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


  saveChanges(): void {
    if (this.form.valid) {
      const formattedDate = this.datePipe.transform(this.form.value.dateOfReading);

      this.reading.meterId = this.form.value.meterId;
      this.reading.kindOfMeter = this.form.value.kindOfMeter;
      this.reading.meterCount = this.form.value.meterCount;
      this.reading.comment = this.form.value.comment;
      this.reading.substitute = this.form.value.substitute;
      this.reading.dateOfReading = formattedDate as any;

      //console.log('updated customer', this.reading);

      this._readingService.updateReading(this.reading).subscribe();
      this.dialogRef.close(this.form.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
