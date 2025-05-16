import { Component, OnInit } from '@angular/core';
import { Reading } from '../../../interfaces/reading';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReadingService } from '../../../services/reading.service';
import { HttpClient } from '@angular/common/http';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { EditReadingComponent } from '../edit-reading/edit-reading.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-reading',
  imports: [CommonModule, RouterModule, MatIconModule, FormsModule],
  templateUrl: './show-reading.component.html',
  styleUrl: './show-reading.component.css'
})

export class ShowReadingComponent implements OnInit {

  listOfReading!: Reading[]
  uuid: string = '';
  isFindMode: boolean = false;
  foundReading!: Reading;

  constructor(private router: Router, private _readingService: ReadingService, private dialog: MatDialog) {
    //nao poderia inicializar listOfReading aqui dentro
  }

  ngOnInit(): void {
    this.refreshPage();
  }


  refreshPage(): void {
    this._readingService.getReadings().subscribe(data =>
      this.listOfReading = data
    );
  }

  deleteReading(uuid: string) {
    this._readingService.deleteReading(uuid).subscribe(result => {
      //console.log('reding deleted');
      this.refreshPage();
    }

    )
  }

  toggleFind(): void {
    this.isFindMode = !this.isFindMode;

    if (this.uuid.trim()) {
      this._readingService.getReading(this.uuid).subscribe(response => {
        console.log('hi', response)
        this.foundReading = response;
      })
    }
    else {
      console.log('hi');
    }

  }

  exportData(): void{
    if (!this.listOfReading || this.listOfReading.length === 0) {
    console.warn('Nenhum dado disponível para exportar.');
    return;
  }

  const json = JSON.stringify(this.listOfReading, null, 2); // indentado
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'readings.json';
  a.click();

  URL.revokeObjectURL(url); //
  }

  editReading(reading: Reading) {
    const dialogRef = this.dialog.open(EditReadingComponent, {
      width: '600px',
      data: reading
    })
    console.log(reading)
  }

  navigateTo(): void {
    this.router.navigate(['/reading/add']);
  }

}
