import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  title = 'Ananse';

  menuItems = [
    { name: 'Explore', link: '/explore',  requiresAuth: true },
    { name: 'Profile', link: '/profile', requiresAuth: true },
    { name: 'Create Book', link: '/book/create', requiresAuth: true },

  ]

  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
