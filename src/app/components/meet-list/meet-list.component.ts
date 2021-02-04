import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import {MeetService} from '../../services/meeting/meet.service'
import { Meeting } from 'src/app/models/Meeting';
import {  ToastrService  } from "ngx-toastr";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService,SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-meet-list',
  templateUrl: './meet-list.component.html',
  styleUrls: ['./meet-list.component.css']
})
export class MeetListComponent implements OnInit {
  meetings:any=[];

  @HostBinding('class') classes = 'row';

  constructor(private authService: AuthService,private route: Router,private modalService: NgbModal,private toastr:ToastrService,private meetservice: MeetService) { }
  animal: string;
  name: string;
  user:SocialUser;
  loggedIn:boolean
   show:boolean
   email:string;
   result:any;
   persons=['csanchez@activeit.cl','prueba@activeit.cl'];
  
  
  

  ngOnInit() {
    NgbModalRef.prototype["c"] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function (reason: string) {
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector(".modal").classList.remove("show");
      setTimeout(() => {
        this["c"](reason);
      }, 500);
    };
   
    this.meetservice.getmeetings().subscribe(
      res => {
       this.meetings=res;
      },
      err => console.log(err)
    );
    this.authService.authState.subscribe((user)=>{
      const email=user.email;
   const result =this.persons.filter(person=>person==email);
   this.result=result;
      if (result.length!=0) {
         this.show=true;
      }
      else{
      this.show= true;
      }
      console.log("ssssss",this.show);
      
       
     });
  }
    open(m) {
      this.modalService.open(m);
      this.route.navigate(['meetings/list']);
    }
  close(m){
    this.modalService.dismissAll(m);
    
  }
  deletemeet(id:string){
    this.meetservice.deletemeetings(id).subscribe(
      res=>{
        console.log(res);
        this.getmeetings();
        this.toastr.success('Reunión Eliminada', 'Acción Exitosa');
        
      },
      err=>console.log(err)
    )
    
  }
  getmeetings(){
    this.meetservice.getmeetings().subscribe(
      res => {
       this.meetings=JSON.parse(JSON.stringify(res)) as Meeting[];
      },
      err =>{ console.log(err)}
    );
  }
  

  }

    
