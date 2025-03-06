import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

import { HeaderComponent } from '../inc/header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.user).subscribe({
      next: () => {
        this.router.navigate(['/login']); // Redireciona para o login após o registro
      },
      error: (error) => {
        console.error('Erro no registro:', error);
      },
    });
  }
}