import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

import { HeaderComponent } from '../inc/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials);
  }
}