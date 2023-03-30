import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_BASE_PATH: string = 'http://localhost:4200/api/';
  constructor(private _httpService: HttpClient) { }
  getUsers() {
    return this._httpService.get(this.API_BASE_PATH + "users");
  }
  getUser(userId: number) {
    return this._httpService.get(`${this.API_BASE_PATH}user/${userId}`);
  }
  addUser(user: any) {
    return this._httpService.post(`${this.API_BASE_PATH}users`, user);
  }
  updateUser(user: any) {
    return this._httpService.put(`${this.API_BASE_PATH}users/${user.id}`, user);
  }
  deleteUser(userId: number) {
    return this._httpService.delete(`${this.API_BASE_PATH}users/${userId}`);
  }
}
