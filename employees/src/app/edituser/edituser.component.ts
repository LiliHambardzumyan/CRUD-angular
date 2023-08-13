import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent {
  constructor(private router:Router) {
    let arr:any = [];
   for(let i = 11; i< this.router.url.length; i++){
    arr.push(this.router.url[i]);
    }
   let id = arr.join('')
    console.log(id)
  }
}
