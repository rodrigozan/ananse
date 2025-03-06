import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-cta',
  standalone: true,
  templateUrl: './auth-cta.component.html',
  styleUrls: ['./auth-cta.component.scss'],
})
export class AuthCtaComponent {
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}