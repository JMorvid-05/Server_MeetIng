import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginComponent } from './components/login/login.component';
import { MeetCreateComponent } from './components/meet-create/meet-create.component';
import { MeetListComponent } from './components/meet-list/meet-list.component';
import { MeetEditComponent } from './components/meet-edit/meet-edit.component';
import{HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import { AuthGuard } from "./auth.guard";
import {FormhourComponent} from './components/formhour/formhour.component';
import { HourlistComponent } from "./components/hourlist/hourlist.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:  HomeComponent /*FormhourComponent*/
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate:[AuthGuard]
  },
  
  
  {
    path: 'persons/list',
    component: UserListComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'persons/edit/:id',
    component: UserFormComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'meetings/create',
    component: MeetCreateComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'hours/save',
    component: FormhourComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'hours/list',
    component: HourlistComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'meetings/list',
    component: MeetListComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'meetings/edit/:id',
    component: MeetEditComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
