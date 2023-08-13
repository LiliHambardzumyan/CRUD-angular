import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AppComponent } from './app.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    title: ''
  },
  {
    path: 'edit-user',
    component: EdituserComponent,
    title: ''
  },
  {
    path: 'edit-user/:id',
    component: EdituserComponent,
    title: ''
  },
  {
    path: 'add-user',
    component: AdduserComponent,
    title: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
