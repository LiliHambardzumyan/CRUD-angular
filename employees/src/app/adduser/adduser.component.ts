import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit{
  constructor(private router:Router) {}

  new_employee = {
    "id": '',
    "employee_name": "",
    "employee_salary": '',
    "employee_age": '',
    "employee_gender": '',
    "profile_image": ""
  }
  ngOnInit() {
  }

  addEmployee() {
    let arr = localStorage.getItem('users')
    if(arr){
      let users = JSON.parse(arr);
      this.new_employee.id = users[users.length-1].id + 1
      users.push(this.new_employee)
      localStorage.setItem('users', JSON.stringify(users))
    }
    this.router.navigate([""])
    }
}
