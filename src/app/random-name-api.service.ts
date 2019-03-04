import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomNameAPIService {
  constructor(private http: HttpClient) {}

  getRandomName() {
    return this.http.get('https://uinames.com/api/?region=poland');
  }
}
