import { Component, OnInit } from '@angular/core';
import { Reading } from '../../../interfaces/reading';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReadingService } from '../../../services/reading.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-reading',
  imports: [CommonModule, RouterModule],
  templateUrl: './show-reading.component.html',
  styleUrl: './show-reading.component.css'
})

export class ShowReadingComponent implements OnInit {

  listOfReading!: Reading[]

  constructor(private router: Router, private _readingService: ReadingService){
    //nao poderia inicializar listOfReading aqui dentro
  }

  ngOnInit(): void {
    this.refreshPage();
  }


  refreshPage(): void {
    this._readingService.getReadings().subscribe( data => 
      this.listOfReading = data
    );
  }

  navigateTo(): void {
    this.router.navigate(['/reading/add']);
  }

}
