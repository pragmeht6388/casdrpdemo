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

  countries: any[] = [];
  country: any[] = [];
  country1: any[] = [];

  state: any[] = [];

  ngOnInit() {
    this.title.setTitle('Angular Cascading or Dependent Dropdown');
    this.appService.getCountries().subscribe(data => {
      this.country = data;  // Assign the fetched countries to the local array
    });

    console.log( this.country);


    this.appService.getCountry().subscribe(data => {
      this.country1 = data;  // Assign the fetched countries to the local array
    });

    console.log( this.country1);


    this.appService.getStatesByCountryId(101).subscribe(data => {
      this.state = data;  // Assign the fetched countries to the local array
    });

    console.log( this.state);
  }
	
	selectedCountry: String = "--Choose Country--";
  
	Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
		{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
		{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
		{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
	];
  
	states: Array<any> = [];

	cities: Array<any> = [];
	
	changeCountry(country: any) {
		this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states;
	}

	changeState(state: any) {
		this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities;
	}
}
