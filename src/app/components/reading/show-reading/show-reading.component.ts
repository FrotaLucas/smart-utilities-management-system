import { Component, OnInit } from '@angular/core';
import { Reading } from '../../../interfaces/reading';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReadingService } from '../../../services/reading.service';
import { HttpClient } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-show-reading',
  imports: [CommonModule, RouterModule, MatIconModule],
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

  deleteReading(uuid: string){
      this._readingService.deleteReading(uuid).subscribe( result => {
        console.log('reding deleted');
        this.refreshPage();
      }
        
      )
  }

  editReading(){

  }

  navigateTo(): void {
    this.router.navigate(['/reading/add']);
  }

}
