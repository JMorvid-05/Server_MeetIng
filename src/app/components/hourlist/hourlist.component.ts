import { Component,OnDestroy, OnInit,Renderer2, Output, EventEmitter} from '@angular/core';
import { HourService } from "../../services/hour/hour.service";
import {Social } from '../../models/Social'
import { Subject } from 'rxjs';
import { AuthService,SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-hourlist',
  templateUrl: './hourlist.component.html',
  styleUrls: ['./hourlist.component.css']
})
export class HourlistComponent implements OnDestroy, OnInit {

  constructor(private renderer: Renderer2,private hourservice: HourService,private authService: AuthService) { }
  social:Social;
  dtOptions: any = {};
  hours: [] = [];
  dtTrigger = new Subject();
  user:Social ={
    email:'',
    fname:'',
    lname:''
  };

  ngOnInit(): void {
    this.authService.authState.subscribe((social)=>{
      this.user.email=social.email;
      this.user.fname=social.firstName;
      this.user.lname=social.lastName;

      console.log(social);
      
     console.log("here:"+this.user['email']);
     
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      buttons: [
        'colvis',
        'copy',
        'excel',
      ],
      dom: 'Bfrtip',
      responsive: true
    },
    this.gethours();
  }

 
 async gethours() {
   await this.hourservice.gethour().subscribe(
      res => {
    this.hours = JSON.parse(JSON.stringify(res));

        
        this.dtTrigger.next();
      },
      err => console.log(err)
    );
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  filter(email:string){
    const result= this.hours.filter(ar=>ar==email)
    console.log(result);
    
  }

}
