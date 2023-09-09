import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class PlantDataService {

  constructor(private http: HttpClient) {}

  getUserPlants(userId: number) {
    return this.http.get(`${BASE_URL}/getPlants/${userId}`);
  }
}
