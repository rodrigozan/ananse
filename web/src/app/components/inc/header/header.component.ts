import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'Ananse';

  menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Explore', link: '/explore' },
    { name: 'Profile', link: '/profile' }
  ]
}
