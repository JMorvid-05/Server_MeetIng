import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { UserService } from '../../services/person/user.service';
import { Person } from '../../models/Person'
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-checkusers',
  templateUrl: './checkusers.component.html',
  styleUrls: ['./checkusers.component.css']
})



export class CheckusersComponent implements OnInit {
  myForm: FormGroup;
  person: any = [];
  send:any;
   a:any;
  @Output() mesemmit = new EventEmitter();


  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.getpersons();
   this.myForm = this.fb.group({
       person:this.fb.array([])
    });

  }
  SendMeet(message: string) {
    console.log("=i=");
    console.log(message);
     this.mesemmit.emit(message);
     console.log("=f=");
     
     
   }

  onChange(person1: string, isChecked: boolean) {
    const namesFormArray = <FormArray>this.myForm.controls.person;

    if (isChecked) {
      namesFormArray.push(new FormControl(person1));
    } else {
      let index = namesFormArray.controls.findIndex(x => x.value == person1)
      namesFormArray.removeAt(index);
    }
    console.log("======================");

    console.log(this.myForm.value);
    this.send = this.myForm.value;
    console.log(this.a);
    

  }



  getpersons() {
    this.userservice.getpersons().subscribe(
      res => {
        this.person = JSON.parse(JSON.stringify(res)) as Person[];
      },
      err => console.log(err)
    );
  }

}
