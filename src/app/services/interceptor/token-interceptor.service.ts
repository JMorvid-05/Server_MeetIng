import { Injectable } from '@angular/core';
import { SocialloginService } from '../social/sociallogin.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authservice:SocialloginService) { }
   intercept(req,next){
    let tokenizeReq=  req.clone({
      setHeaders:{
        Authorization:`${this.authservice.getToken()}`//null?
      }
    });
    return next.handle(tokenizeReq);
  }
  
}
