import { Component } from '@angular/core';
import { Employee } from './models/employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeedArray: Employee[] = [
    {id: 1, name: "Ryan", country: "USA"},
    {id: 2, name: "Angelica", country: "USA"},
    {id: 3, name: "Joe", country: "USA"}
  ];

  
}
