import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../models/Person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url = ' localhost:27017/persons';
  constructor(private http: HttpClient) { }
  getpersons() {
    return this.http.get(`${this.api_url}/list`);
  }
  getone(id: String){
   return this.http.get(`${this.api_url}/get/${id}`);
  }
  saveperson(person: Person) {
    return this.http.post(`${this.api_url}/create`, person);
  }

  deleteperson(id: string) {
    return this.http.get(`${this.api_url}/delete/${id}`);
  }
  updateperson(id: String, updateuser: Person): Observable<any> {
    return this.http.put(`${this.api_url}/edit/${id}`, updateuser);
  }
}
