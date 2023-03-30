import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Change this to your API URL

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  public getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password })
      .pipe(
        map((response: any) => {
          const token = response.access_token;
          localStorage.setItem('access_token', token);
          return response;
        })
      );
  }

  public signUp(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { name, email, password })
      .pipe(
        map((response: any) => {
          const token = response.access_token;
          localStorage.setItem('access_token', token);
          return response;
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('access_token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
