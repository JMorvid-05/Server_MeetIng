import { Component, OnInit } from '@angular/core';
import { Person } from "../../models/Person";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import {  GoogleLoginProvider,AuthService } from "angularx-social-login";
import {SocialloginService} from '../../services/social/sociallogin.service';
import { Social } from "../../models/Social";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Social={
    email:'',
    fname:'',
    lname:'',
    token:''
  }
  constructor( private toastr: ToastrService, private socialservice:SocialloginService, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  loginGoogle():void{
    this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID).then((owo)=>{
     console.log(owo);
     if (owo!=null){
       this.user.email=owo.email;
       this.user.fname=owo.firstName;
       this.user.lname=owo.lastName;
       this.user.token=owo.authToken;
       
      this.red(this.user.email.toString());
      
      if (this.red(this.user.email.toString())==false) {
        this.toastr.error('El correo no es válido','Acceso Denegado');
      }else{this.socialservice.sendlog(this.user).subscribe(
        res=>{
          console.log(res);
          console.log('oowowwoow');
          
          //invalid algorithm se debe a que la cantidad de carácteres del token de google y del jwt 
          //tienen diferente longitud (?)
          localStorage.setItem('token',res['token']); 
            this.toastr.info('Acceso al sistema','Bienvenido');
            this.router.navigate(['/menu']); 

          
        },
        err=>{
          console.error(err);
          this.toastr.error('El correo electrónico no existe en el sistema','Acceso Denegado');

        }
      )}
      
     }
     
   });

    
  }
  red(email:string):Boolean{
   let owo:RegExp= /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(activeit)\.cl$/;
   const opci=owo.test(email.toLowerCase());
    console.log('resultado es: '+opci);
    return opci;
  }
  salir():void{
    this.authservice.signOut();
    
  }
  
  /* login(){
     this.authservice.login(this.user).subscribe(
       res=>{
         console.log(res);
         localStorage.setItem('token',res['token']);
         console.log(localStorage.getItem('token'));
         this.toastr.info('Acceso al sistema','Bienvenido');
         this.router.navigate(['/menu']); 
       },
       err=>{
         console.log(err);
         this.toastr.error('Usuario y/o contraseña incorrectos','Acceso al sistema Denegado');
         
       }
     )
     
   }*/

}
