import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { UserService } from '../../services/person/user.service';
import { Person } from '../../models/Person'
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService,SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {
  user:SocialUser;
  loggedIn:boolean
   show:boolean
   email:string;
   result:any;
   person=['csanchez@activeit.cl','prueba@activeit.cl'];
  persons: any = [];
  @HostBinding('class') classes = 'row';
  country:String=this.persons.country;
  constructor(private authService: AuthService,private modalService: NgbModal,private toastr: ToastrService,private route: Router, private userservice: UserService) { }

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
      console.log("ssssss",this.show);
      
       
     });
    console.log(this.route.url);
    
    this.getpersons();
     
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
    this.route.navigate(['persons/list']);
  }
  close(m){
    this.modalService.dismissAll(m);
    
  }
 
  
  getpersons() {
    this.userservice.getpersons().subscribe(
      res => {
        this.persons = JSON.parse(JSON.stringify(res)) as Person[];
      },
      err => console.log(err)
    );
  }

  deleteperson(id: string) {
    this.userservice.deleteperson(id).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Persona eliminada', 'Acción Exitosa');
        this.getpersons();


      },
      err => {
        console.log(err)
        this.toastr.error('La persona no pudo ser eliminada', 'Acción Sin éxito');
      }
    )

  }


}
