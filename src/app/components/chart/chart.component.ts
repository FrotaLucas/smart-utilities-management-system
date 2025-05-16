import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReadingService } from '../../services/reading.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interfaces/customer';
import { Reading } from '../../interfaces/reading';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {

  listOfCustomers!: Customer[];
  listOfReading!: Reading[];

  totalC: number = 0;
  totalR: number = 0;

  normalizedC: number = 0;
  normalizedR: number = 0;

  constructor(
    private _customerService: CustomerService,
    private _readingService: ReadingService
  ) {}

  ngOnInit(): void {
    this.refreshPage();
  }

  refreshPage(): void {
    this._customerService.getCustomers().subscribe(data => {
      this.listOfCustomers = data;
      this.totalC = data.length;
      this.updateNormalizedHeights();
    });

    this._readingService.getReadings().subscribe(data => {
      this.listOfReading = data;
      this.totalR = data.length;
      this.updateNormalizedHeights();
    });
  }

  updateNormalizedHeights(): void {
    const max = Math.max(this.totalC, this.totalR, 1); // evita divisão por zero
    this.normalizedC = (this.totalC / max) * 100;
    this.normalizedR = (this.totalR / max) * 100;
  }

}
