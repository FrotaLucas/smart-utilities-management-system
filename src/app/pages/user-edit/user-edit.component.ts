import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';


@Component({
  selector: 'app-user-edit',
  imports: [CommonModule, MatFormField, FormsModule, ReactiveFormsModule, MatLabel, MatInput,
     MatButtonModule, MatTooltip, MatIcon],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})


export class UserEditComponent implements OnInit {

  email: string = 'admin@hotmail.com';
  form!: FormGroup;
  @ViewChild('emailInput') refEmail!: ElementRef;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
        email: ['admin@hotmail.com'],
        password: [''],
        confirmPassword: ['']
      })
  }

  edit(): void{
    this.clearField('email');
    
    this.refEmail.nativeElement.focus();
  }

  clearField(formField: string): void {
    this.form.patchValue({ [formField]:''});

  }

  onSubmit(): void {
    this.form.reset();
    console.log('change');
  }
}
