import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users:any = []
  constructor(private router:Router) {}

 ngOnInit() {
   let arr;
   !localStorage ? arr = [] : arr = JSON.parse(localStorage.getItem('users')!)
   this.users = arr
   console.log(this.users)
 }
 peakUser(id:any){
    this.router.navigate(['/edit-user',id])
 }
}
