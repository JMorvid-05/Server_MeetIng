import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import {SocialloginService} from '../../services/social/sociallogin.service'
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  user:SocialUser;
  loggedIn:boolean
   show:boolean
   email:string;
   result:any;
   persons=['csanchez@activeit.cl','prueba@activeit.cl'];
  menu:boolean;
  constructor(public authService:AuthService, public socialService:SocialloginService) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      const email=user.email;
   const result =this.persons.filter(person=>person==email);
   this.result=result;
      if (result.length!=0) {
         this.show=true;
      }
      else{
      this.show= false;
      }
 
       
     });

  
    
    if (localStorage.getItem('token')==null) {
      this.authService.signOut();
      localStorage.clear();
      localStorage.removeItem('token');
      this.menu=false;
    }
    else{
      this.menu=true;
    }
   
  }
  logout(){
    this.authService.signOut();
    localStorage.clear();
    localStorage.removeItem('token');
    this.menu=false;
  }

}
