import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private router: Router, private auth: AuthService ){

  }

  login(): void {
    const result = this.auth.validateCredentials(this.username, this.password);
    if(result){
      this.router.navigate(['/dashboard/customer']);
    } else {
       this.errorMsg = 'incorrect username or password!';
    }
  }
}
