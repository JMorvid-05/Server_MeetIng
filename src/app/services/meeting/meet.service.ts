import { Injectable } from '@angular/core';
import {Meeting} from '../../models/Meeting'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MeetService {
  api_url = 'http://localhost:27017/meetings';
  constructor(private http: HttpClient) { }
  getmeetings() {
    return this.http.get(`${this.api_url}/list`);
  }
  savemeeting(meeting: Meeting) {
    return this.http.post(`${this.api_url}/create`, meeting);
  }
  updatemeeting(id: string, person:any,  paragraph:String): Observable<Meeting> {
    return this.http.put(`${this.api_url}/edit/${id}`,{person,paragraph});
  }
  deletemeetings(id: string) {
    return this.http.delete(`${this.api_url}/delete/${id}`);
  }
  getone(id:string){
    return this.http.get(`${this.api_url}/get/${id}`)
  }
}