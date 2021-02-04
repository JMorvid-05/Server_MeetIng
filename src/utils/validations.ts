import { AuthService,SocialUser } from "angularx-social-login";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Rol {
    user:SocialUser;
    show:boolean
    email:string;
    result:any;
    persons=['csanchez@activeit.cl','prueba@activeit.cl'];
    constructor(private authService: AuthService) { }
    verify(){
   this.authService.authState.subscribe(
      res=>{
        this.user=res;
        this.user.lastName
        this.email=this.user.email;
      const result =this.persons.filter(person=>person==this.email);
      this.result=result;
         if (result.length!=0) {
            this.show=true;
         }
         else{
         this.show= false;
         }
         console.log("=DSDSDSDS");
         console.log(this.show);
      });


}

}
