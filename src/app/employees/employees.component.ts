import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('expandEmployee', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class EmployeesComponent implements OnInit {

  employeesDataSource: any;
  columnsToShow = ['id', 'firstName', 'lastName', 'empId', 'email', 'mobileNo'];
  expandedEmployee: Employee | null;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getAllEmployees().subscribe(data => {
      console.log(data);
      this.employeesDataSource = new MatTableDataSource<Employee>(data);
    });
  }

  filterEmployees(filterValue: string) {
    this.employeesDataSource.filter = filterValue.trim().toLowerCase();
  }

}
