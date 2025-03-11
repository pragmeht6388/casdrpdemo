import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 // private baseUrl ="http://localhost:4200/"
  private apiUrl = 'assets/countries.json';  // Path to your JSON file

  private apiUrl1 = 'assets/country.json';  // Path to your JSON file
  private apiUrl2 = 'assets/states.json'; 

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Makes the HTTP request to load the JSON
  }

  getCountry(): Observable<any> {
    return this.http.get(this.apiUrl1);
  }

  getStatesByCountryId(abc:number): Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl2).pipe(
      map(states => states.filter((state: { country_id: number; }) => state.country_id === abc))
    );
  }
}
