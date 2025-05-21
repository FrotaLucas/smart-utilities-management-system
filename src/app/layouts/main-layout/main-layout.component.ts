import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit{

   title = 'final_project_frontend';
  
  
    constructor(private router: Router ,private dataBaseService: DatabaseService){
  
    }
  
    ngOnInit(): void {
        
    }
  
    resetDatabase(): void{
      this.dataBaseService.deleteDatabase().subscribe();
      console.log("delete");
    }

    logout(): void{
      this.router.navigate(['/login']);
    }

    account(): void {
      this.router.navigate(['user/edit']);
    }
  }
  

