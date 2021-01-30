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
    {id: 2, name: "Paola", country: "USA"},
    {id: 3, name: "Joe", country: "USA"}
  ];

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }

  addOrEdit(){

    if(this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeedArray.length + 1;
      this.employeedArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  delete(){
    if(confirm('¿Estas Seguro de querer elminar el registro?')){
      this.employeedArray = this.employeedArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
