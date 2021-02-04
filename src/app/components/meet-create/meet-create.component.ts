import { Component, OnInit, HostBinding } from '@angular/core';
import { Meeting } from '../../models/Meeting';
import { Router, ActivatedRoute } from '@angular/router';
import { MeetService } from '../../services/meeting/meet.service';
import { ToastrService } from "ngx-toastr";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-meet-create',
  templateUrl: './meet-create.component.html',
  styleUrls: ['./meet-create.component.css']
})
export class MeetCreateComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';
  constructor(private fb:FormBuilder ,private modalService: NgbModal,private toastr: ToastrService, private meetservice: MeetService, private route: Router, private activedrouter: ActivatedRoute) { 
  }
  inputsForm:FormGroup;
  name:string; 
  rdate:string;
  hour:string
  button:boolean=true;

  
  meet: Meeting = {
    cdate: '',
    rdate: '',
    name: '',
    person: [],
    hour: '',
    paragraph: ''
  };
  owo:any;
  ngOnInit(): void {



    this.inputsForm=this.fb.group({

      name: [this.name,[Validators.required,Validators.maxLength(20),Validators.minLength(5)]],
  
      rdate:[this.rdate,[Validators.required]],
  
      hour:[this.hour,[Validators.required]]
  
      });
  /*while ( this.inputsForm.status=='INVALID') {
        this.button=false;
      }*/
  
          
    this.position();
    console.log("========================");
    
    console.log(this.owo);
    
    NgbModalRef.prototype["c"] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function (reason: string) {
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector(".modal").classList.remove("show");
      setTimeout(() => {
        this["c"](reason);
      }, 500);
    };
  }
  open(m) {
    this.modalService.open(m);
    this.route.navigate(['menu']);
  }
  close(m) {
    this.modalService.dismissAll(m);
  }

  savemeet() {
    console.log(this.meet);
    //delete this.user.username (?)
  if (this.meet.hour==''){
    this.toastr.error('Debe seleccionar una hora para la reunión', 'Error');
  } else if (this.meet.name==''){
    this.toastr.error('La reunión debe tener un título', 'Error');

  }
  else if (this.meet.rdate==''){
    this.toastr.error('La reunión debe tener una fecha  para realizarse', 'Error');

  }
 else{
  this.meetservice.savemeeting(this.meet).subscribe(
    res => {
      console.log(res)
      this.toastr.success('Reunión Creada', 'Acción Exitosa');
      this.route.navigate(['meetings/list']);
    },
    err =>{
    
      this.toastr.error('La fecha seleccionada es anterior a la fecha de hoy, debe ser la fecha a un día posterior a este', 'Error');
   
    }
  );
 }

  }


  position() {
    console.log(this.route.url);
    this.owo = false;
    if (this.route.url == "/meetings/create" || this.route.url == "/menu") {
      this.owo = true;
    }


  }
}
