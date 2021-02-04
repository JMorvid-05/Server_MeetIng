import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser } from "angularx-social-login";
//import { Rol } from "../../../utils/validations";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private authService: AuthService) { }
 user:SocialUser;
 loggedIn:boolean
  show:boolean
  email:string;
  result:any;
  persons=['csanchez@activeit.cl','prueba@activeit.cl'];
 

  ngOnInit(): void {
  this.authService.authState.subscribe((user)=>{
     const email=user.email;
  const result =this.persons.filter(person=>person==email);
  this.result=result;
     if (result.length!=0) {
        this.show=true;
     }
     else{
     this.show=true;
     }

      
    });

    
  }
  



}
