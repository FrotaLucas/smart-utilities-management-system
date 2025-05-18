import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Reading } from '../../../interfaces/reading';
import { readingColumns } from '../../../shared/reading-column';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReadingService } from '../../../services/reading.service';
import { HttpClient } from '@angular/common/http';


import { EditReadingComponent } from '../edit-reading/edit-reading.component';

import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule, MatCellDef, MatHeaderCellDef, MatColumnDef, MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltip } from '@angular/material/tooltip';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-show-reading',
  imports: [CommonModule, RouterModule, MatFormField, MatLabel, MatInput,
    MatTableModule, MatCellDef, MatColumnDef, MatHeaderCellDef, MatSortModule, MatPaginator, MatTooltip, MatIcon],
  templateUrl: './show-reading.component.html',
  styleUrl: './show-reading.component.css'
})

export class ShowReadingComponent implements OnInit, AfterViewInit {

  listOfReading!: Reading[]

  dataSource!: MatTableDataSource<Reading>;
  @ViewChild(MatPaginator) refPaginator!: MatPaginator;
  @ViewChild(MatSort) refMatSort!: MatSort

  displayedColumns: string[] = readingColumns;

  constructor(private router: Router, private _readingService: ReadingService, private dialog: MatDialog, private snachBar: MatSnackBar) {
    //nao poderia inicializar listOfReading aqui dentro

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.refreshPage();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.refPaginator;
    this.dataSource.sort = this.refMatSort;
  }

  refreshPage(): void {
    this._readingService.getReadings().subscribe(data => {
      //this.listOfReading = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.refPaginator;
      this.dataSource.sort = this.refMatSort;
    }

    );
  }

  applyFilter(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.dataSource.filter = input.trim().toLowerCase();

  }

  deleteReading(uuid: string) {
    this._readingService.deleteReading(uuid).subscribe(result => {
      //console.log('reding deleted');
      this.refreshPage();
    }
    )
    this.snachBar.open('data deleted', "", { duration: 2000 });

  }

  exportData(): void {
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
