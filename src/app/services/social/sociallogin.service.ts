import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Social } from "../../models/Social";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {

  constructor(private http: HttpClient, private router: Router) { }
  api_url = 'http://localhost:27017';
  sendlog(profile: Social) {
    return this.http.post(`${this.api_url}/login`, profile);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['home']);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getToken() {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  admin(){
    
  }
}
