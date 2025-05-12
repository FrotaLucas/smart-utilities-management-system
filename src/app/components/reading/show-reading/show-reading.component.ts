import { Component, OnInit } from '@angular/core';
import { Reading } from '../../../interfaces/reading';
import { listOfreading } from '../../../shared/list-readings';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-reading',
  imports: [CommonModule],
  templateUrl: './show-reading.component.html',
  styleUrl: './show-reading.component.css'
})
export class ShowReadingComponent {

  myReading: Reading[] = listOfreading;

  ngOnInit(): void {
    this.myReading = listOfreading;
  }

  navigateTo(): void {

  }

}
