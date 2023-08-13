import { Component, OnInit } from '@angular/core';

import {MainService} from './main.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'employees';
  
  constructor(private mainService:MainService ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('users')) {
      this.mainService.users = JSON.parse(localStorage.getItem('users')!)
      localStorage.setItem('users', JSON.stringify(this.mainService.users))
    }
    localStorage.setItem('users', JSON.stringify(this.mainService.users))

  }
}
