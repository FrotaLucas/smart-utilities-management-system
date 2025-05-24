import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent implements OnInit{

  constructor(router: Router){

  }
  ngOnInit(): void {
      
  }
}
