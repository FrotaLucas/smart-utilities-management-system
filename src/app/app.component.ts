import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';

import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], //CommonModule enable ngIf, ngFor and RouterModule enable routerLink, <router-outlet>
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  title = 'final_project_frontend';


  constructor(private dataBaseService: DatabaseService){

  }

  ngOnInit(): void {
      
  }

  resetDatabase(): void{
    this.dataBaseService.deleteDatabase().subscribe();
    console.log("delete");
  }
}
