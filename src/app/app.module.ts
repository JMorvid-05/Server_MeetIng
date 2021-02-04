import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserService } from './services/person/user.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MeetListComponent } from './components/meet-list/meet-list.component';
import { MeetCreateComponent } from './components/meet-create/meet-create.component';
import { MeetEditComponent } from './components/meet-edit/meet-edit.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CheckusersComponent } from './components/checkusers/checkusers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/interceptor/token-interceptor.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { FormhourComponent } from './components/formhour/formhour.component';
import { HourlistComponent } from './components/hourlist/hourlist.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HcountryComponent } from './components/hours/hcountry/hcountry.component';
import { HclientComponent } from './components/hours/hclient/hclient.component';
import { HareaComponent } from './components/hours/harea/harea.component';
import { HdatexeComponent } from './components/hours/hdatexe/hdatexe.component';
import { HprojectComponent } from './components/hours/hproject/hproject.component';
import { HpersonqrComponent } from './components/hours/hpersonqr/hpersonqr.component';
import { HcostComponent } from './components/hours/hcost/hcost.component';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";
import { DataTablesModule } from 'angular-datatables';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import '@angular/compiler';
import { MatDialogModule } from '@angular/material/dialog';
import { PruebaComponent } from './components/prueba/prueba.component';



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,

    provider: new GoogleLoginProvider("971693517578-eg3q4s23elt9ujh0dn5cipun17g98uik.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}





@NgModule({
  declarations: [
    FormhourComponent,
    AppComponent,
    UserListComponent,
    LoginComponent,
    NavigationComponent,
    UserFormComponent,
    MeetListComponent,
    MeetCreateComponent,
    MeetEditComponent,
    HomeComponent,
    MenuComponent,
    CheckusersComponent,
    HourlistComponent,
    HcountryComponent,
    HclientComponent,
    HareaComponent,
    HdatexeComponent,
    HprojectComponent,
    HpersonqrComponent,
    HcostComponent,
    PruebaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    SocialLoginModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DataTablesModule,
    MatMenuModule,
    ToastrModule.forRoot({
      timeOut: 2300,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    RouterModule.forRoot([
      { path: 'persons/list', component: UserListComponent },
      { path: 'meetings/create', component: MeetCreateComponent },
      { path: 'meetings/list', component: MeetListComponent },
      { path: 'meetings/edit/:id', component: MeetEditComponent },
      { path: 'hours/save', component: FormhourComponent },
      { path: 'hours/list', component: HourlistComponent },
      { path: 'example', component: CheckusersComponent },
      { path: 'login', component: LoginComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: MenuComponent, pathMatch: 'full' },

    ]),


  ],
  providers: [
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

