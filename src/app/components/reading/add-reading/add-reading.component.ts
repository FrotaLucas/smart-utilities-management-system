import { Component, OnInit } from '@angular/core';
import { listOfreading } from '../../../shared/list-readings';
import { CommonModule } from '@angular/common';
import { Reading } from '../../../interfaces/reading';



import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-reading',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
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
    .group({input: ['', Validators.required],
      select: ['', Validators.required],
      textArea: ['', Validators]
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
