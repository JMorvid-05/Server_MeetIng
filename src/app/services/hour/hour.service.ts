import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Hour} from '../../models/Hour';
import { SocialUser } from 'angularx-social-login';
import { Social } from 'src/app/models/Social';
@Injectable({
  providedIn: 'root'
})
export class HourService {
  api_url = 'http://localhost:27017/hours';
  constructor(private http:HttpClient) { }

  savehour(hour: Hour) {
    return this.http.post(`${this.api_url}/save`,hour);
  }
  gethour() {
    return this.http.get(`${this.api_url}/list`);
  }

}
