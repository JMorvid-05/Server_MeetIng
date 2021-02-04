import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/person/user.service';
import { Meeting } from 'src/app/models/Meeting';
import { Router, ActivatedRoute } from '@angular/router';
import { MeetService } from 'src/app/services/meeting/meet.service';
import {  ToastrService  } from "ngx-toastr";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-meet-edit',
  templateUrl: './meet-edit.component.html',
  styleUrls: ['./meet-edit.component.css']
})

export class MeetEditComponent implements OnInit {
  users: any = [];
  rec: any;
  owo:any;
  meets: Meeting = {
    _id: '',
    cdate: '',
    rdate: '',
    name: '',
    person:this.rec,
    paragraph: ''
  }

 
  constructor(private fb:FormBuilder,private modalService: NgbModal,private toastr:ToastrService, private userservice: UserService, private meetservice: MeetService, private route: Router, private activedrouter: ActivatedRoute) {}
  inputsForm:FormGroup;
  paragraph:string; 
  ngOnInit(): void {
    this.inputsForm=this.fb.group({

      paragraph: [this.paragraph,[Validators.required,Validators.maxLength(300),Validators.minLength(4)]]
  
      });
    this.position();
    console.log("==============aa");
    console.log(this.owo);
    
    NgbModalRef.prototype["c"] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function (reason: string) {
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector(".modal").classList.remove("show");
      setTimeout(() => {
        this["c"](reason);
      }, 500);
    };
  
    this.getmeet();
    this.userservice.getpersons().subscribe(
      res => {
        this.users = res;

        
      },
      err => {console.log(err);
        this.toastr.error('Error en la conexión de la Base de Datos','Error');
      }
    );


  }
  open(m) {
    this.modalService.open(m);
    this.route.navigate(['menu']);
  }
  close(m) {
    this.modalService.dismissAll(m);
  }
  position() {
    console.log(this.route.url);
    this.owo = true;
    if (this.route.url != "/meetings/create") {
      this.owo = false;
    }


  }
 getMessage(message: any) {
   console.log('=i=');
   console.log(message);
   const obj=JSON.parse(JSON.stringify(message));
    this.rec = obj.person;
    console.log(this.rec);
    console.log('===2222=====');

  }
  updatemeet() {
    console.log(this.meets);
    if (this.meets.person==[]) {
      this.toastr.error('Debe seleccionar al menos 1 persona que haya estado en la reunión','Error');
    } else if (this.meets.paragraph=='') {
      this.toastr.error('Debe escribir un resumen de la reunión','Error');
    } else {
    this.meetservice.updatemeeting(this.meets._id, this.rec ,this.meets.paragraph).subscribe(

      res => {
        console.log(this.meets.person);
        console.log(res);
        this.toastr.success('Reunión Modificada','Acción Exitosa');
        this.route.navigate(['meetings/list']);

      },
      err =>{ console.log(err);
        this.toastr.error('Reunión no modificada','Error');
      
      }
    );
    }
    
  }

  getmeet() {
    const params = this.activedrouter.snapshot.params;
    console.log(params);
    if (params.id) {
      this.meetservice.getone(params.id).subscribe(
        res => {
          console.log(res);
          this.meets = res as Meeting;
        },
        err =>{ console.error(err)
          this.toastr.error('Error en Carga de datos','Error');
        }
      );

    }
  }

}
