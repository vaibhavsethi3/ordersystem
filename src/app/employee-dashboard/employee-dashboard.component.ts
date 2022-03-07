import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  employeeValue!: FormGroup;

  employeeObj: EmployeeModel = new EmployeeModel();

  employeeList: any = [];

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.employeeValue = this.formBuilder.group({
      name: [''],
      email: [''],
    });
    this.getEmployee();
  }
  AddEmployee() {
    this.employeeObj.name = this.employeeValue.value.name;
    this.employeeObj.email = this.employeeValue.value.email;

    this.api.postEmployee(this.employeeObj).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
        alert('Error');
      },
      complete: () => {
        console.log('Employee recored added!');
        alert('Employee record added!');
        this.getEmployee();
        this.employeeValue.reset();
      },
    });
  }
  getEmployee() {
    this.api.getEmployee().subscribe((res) => {
      this.employeeList = res;
    });
  }

  deleteEmployee(data: any) {
    this.api.deleteEmployee(data.id).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
        alert('Error');
      },
      complete: () => {
        console.log('Employee recored delete!');
        alert('Employee record delete!');
        this.getEmployee();
      },
    });
  }

  editEmployee(data: any) {}
}