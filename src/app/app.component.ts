import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule , FormsModule , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  constructor(private title: Title, private appService: AppService) {}

  country: any[] = [];
  state: any[] = [];
  city: any[] = [];

  ngOnInit() {
    this.appService.getCountries().subscribe(data => {
      this.country = data;
    });
  }
	
	selectedCountry: String = "--Choose Country--";
  selectedState: String = "--Choose State--";
  selectedCity: String = "--Choose City--";
	
	changeCountry(country: any) {

    this.appService.getStatesByCountryName(this.selectedCountry.toString()).subscribe(data => {
      this.state = data;
    });
	}

	changeState(state: any) {
    this.appService.getCitiesByStateName(this.selectedState.toString()).subscribe(data => {
      this.city = data;
    });
	}

	changeCity(city: any) {
    // API call to save cities.
	}
}
