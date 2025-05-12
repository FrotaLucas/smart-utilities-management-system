import { Component, OnInit } from '@angular/core';
import { Reading } from '../../../interfaces/reading';
import { listOfreading } from '../../../shared/list-readings';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-reading',
  imports: [CommonModule, RouterModule],
  templateUrl: './show-reading.component.html',
  styleUrl: './show-reading.component.css'
})
export class ShowReadingComponent {

  myReading: Reading[] = listOfreading;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.myReading = listOfreading;
  }

  navigateTo(): void {
    this.router.navigate(['/reading/add']);
  }

}
