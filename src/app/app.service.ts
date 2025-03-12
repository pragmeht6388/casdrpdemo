import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'assets/'; 
  private apiUrl1 = 'assets/country.json';  // Path to your JSON file
  private apiUrl2 = 'assets/states.json'; 

  //const s = new BehaviorSubject("initial");

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "countries.json");  // Makes the HTTP request to load the JSON
  }

  getStatesByCountryId(abc:number): Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl + "states.json").pipe(
      map(states => states.filter((state: { country_id: number; }) => state.country_id === abc))
    );
  }

  getStatesByCountryName(abc:string): Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl + "states.json").pipe(
      map(states => states.filter((state: { country_name: string; }) => state.country_name === abc))
    );
  }


  getCitiesByStateName(abc:string): Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl + "cities.json").pipe(
      map(states => states.filter((city: { state_name: string; }) => city.state_name === abc))
    );
  }


  getCityByStateId(abc:number): Observable<any[]>
  {
    return this.http.get<any>(this.apiUrl + "cities.json").pipe(
      map(cities => cities.filter((city: { state_id: number; }) => city.state_id === abc))
    );
  }

}
