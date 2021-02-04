import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { UserService } from '../../services/person/user.service';
import { ToastrService } from "ngx-toastr";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
//import { validations } from '../../../utils/validations';
import { AuthService,SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  angForm: FormGroup;
  @HostBinding('class') classes = 'row';
  ctry: String = '';
  inputsForm:FormGroup;
  fname:string; 
  lname:string;
  email:string;
  cc:string;
  letter;
  person: Person = {
    _id: '',
    email: '',
    fname: '',
    lname: '',
    cc: '',
    country: '',
  };
  edit: boolean = false;
  owo: any;
  
  constructor(private authService: AuthService,private fb: FormBuilder,  private modalService: NgbModal, private userservice: UserService, private route: Router, private toastr: ToastrService, private activedrouter: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit(): void {
  /*  this.inputsForm=this.fb.group({

      fname: [this.fname,[Validators.required,Validators.maxLength(20),Validators.minLength(5)]],
      lname:[this.lname,[Validators.required,Validators.maxLength(35),Validators.minLength(3)]],
      email:[this.email,[Validators.required,Validators.maxLength(40),Validators.minLength(12),Validators.pattern(/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(activeit)\.cl$/)]],  
      cc:[this.cc,[Validators.required,Validators.maxLength(35),Validators.minLength(5),Validators.pattern(/^\d+$/)]]
  
      });*/
    this.position();
    console.log(this.edit);

    NgbModalRef.prototype["c"] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function (reason: string) {
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector(".modal").classList.remove("show");
      setTimeout(() => {
        this["c"](reason);
      }, 500);
    };

    const params = this.activedrouter.snapshot.params;
    console.log(params);
    if (params.id) {
      this.userservice.getone(params.id,).subscribe(
        res => {
          console.log(res);
          this.edit = true;
          this.person = res as Person;
        },
        err => {
          console.error(err);
          this.toastr.error('Error en la Base de Datos', 'Error');
        }
      );

    }

  }
  createForm() {
    this.angForm = this.fb.group({
       fname: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }
  position() {
    console.log(this.route.url);
    this.owo = false;
    if (this.route.url == "/persons/create" || this.route.url == "/menu") {
      this.owo = true;
    }


  }
  country(c: any) {
    console.log(c);
    this.person.country = c;
    this.ctry = c;
    console.log(this.person.country);
    console.log('===========');
    console.log(this.ctry);



  }
  val() {
    switch (this.ctry) {
      case 'CR':
        this.ctry = 'Costa Rica'
        break;
      case 'CH':
        this.ctry = 'Chile'
        break;
      case 'CO':
        this.ctry = 'Colombia'
        break;
      case 'RD':
        this.ctry = 'República Dominicana'
        break;
    }
    if (this.ctry == '') {
      return false;
    } else {
      return true;
    }

  }
  open(m) {
    this.modalService.open(m);
    this.route.navigate(['menu']);
  }
  close(m) {
    this.modalService.dismissAll(m);
  }


  saveuser() {
    console.log('Aquii');

    console.log(this.person);
    //delete this.user.username (?)

    if (this.person.cc=='') {
      this.toastr.error('El campo de número de identificación no debe quedar vacío', 'Error');
     
    } else if (this.person.fname=='') {
      this.toastr.error('El campo para digitar los apellidos no debe quedar vacío', 'Error');
    } 
    else if (this.person.lname=='') {
      this.toastr.error('El campo para digitar los nombres no debe quedar vacío', 'Error');
    } 
    else if(this.person.email==''){
      this.toastr.error('El campo para digitar el correo electrónico no debe quedar vacío', 'Error');
    }
    else if(this.person.email!='' && this.red(this.person.email.toString())==false ){
      this.toastr.error('El Correo ingresado no es válido, inténtelo nuevamente', 'Error');

    }
    else if(this.person.cc!=''){
      if (+this.person.cc>1==false)   {
        this.toastr.error('Sólo se permiten números en el campo de número de identificación', 'Error');
      }
      else if ((+this.person.fname>0==true) || (+this.person.lname>0==true)){
        this.toastr.error('No se permite números en el campo de digitar nombre y apellido', 'Error');
      }

      else{
     
          this.userservice.saveperson(this.person).subscribe(
            res => {
              console.log(res);
              this.toastr.success('Persona Creada', 'Acción Exitosa');
              this.route.navigate(['persons/list']);
      
      
            },
            err => {
              console.error(err)
              this.toastr.error('Error inesperado en el guardado', 'Error');
            });
        
      }
    }

    
   
  }
  updateduser() {
    this.userservice.updateperson(this.person._id, this.person).subscribe(
      res => {
        console.log(this.person);

        console.log(res);
        this.toastr.success('Persona Modificada', 'Acción Exitosa');
        this.route.navigate(['persons/list']);

      },
      err => {
        console.log(err)
        this.toastr.error('Error inesperado', 'Error');
      }
    );
  }
  red(email:string):Boolean{
    let owo:RegExp= /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(activeit)\.cl$/;
    const opci=owo.test(email.toLowerCase());
     console.log('resultado es: '+opci);
     return opci;
   }



}

