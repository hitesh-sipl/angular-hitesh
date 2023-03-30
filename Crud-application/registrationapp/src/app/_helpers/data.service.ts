import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { User } from './user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let users: User[] = [
      { id: 1, title: 'Mr', firstName: 'Hitesh', lastName: 'Rawat', dob: '1988-11-22', email: 'hitesh@test.com', password: '123456', acceptTerms: true },
      { id: 2, title: 'Mr', firstName: 'Prem', lastName: 'Verma', dob: '1985-04-04', email: 'prem@test.com', password: '123456', acceptTerms: true }
    ];
    return { users };
  }

}
