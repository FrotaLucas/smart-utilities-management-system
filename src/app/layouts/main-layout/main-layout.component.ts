import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../auth/auth-service';
@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {

  title = 'final_project_frontend';


  constructor(private router: Router, private dataBaseService: DatabaseService, private auth: AuthService) {

  }

  ngOnInit(): void {

  }

  resetDatabase(): void {
    this.dataBaseService.deleteDatabase().subscribe();
    console.log("delete");
  }

  logout(): void {
    this.auth.clearCredentials();
    this.router.navigate(['/auth/login']);
  }

  account(): void {
  }
}


