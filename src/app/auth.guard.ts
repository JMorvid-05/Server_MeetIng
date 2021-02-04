import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { SocialloginService } from "./services/social/sociallogin.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authservice: SocialloginService,private router:Router) {} 
  canActivate():boolean {
    if(this.authservice.loggedIn()){
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }


}
