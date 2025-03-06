import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; 
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    const token = localStorage.getItem('token');
    this.isAuthenticatedSubject.next(!!token);
  }

  register(user: { name: string; email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.isAuthenticatedSubject.next(true);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erro no login:', error);
      },
    });
  }

  logout(): void {
    localStorage.removeItem('token'); 
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/']); 
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}