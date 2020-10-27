import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { FindUserComponent } from './find-user/find-user.component';
import { HomeComponent } from './home/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'', redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'find-user',
    component:FindUserComponent
  },
  {
    path:'all-users',
    component:AllUsersComponent
  },
  {
    path:'update-user',
    component:UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
