import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-hproject',
  templateUrl: './hproject.component.html',
  styleUrls: ['./hproject.component.css']
})
export class HprojectComponent implements OnInit {
  @Output() messproj= new EventEmitter();
  proj={
    name:'',
    description:''
  }
  opc:String='5'
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  sendproj(){
    console.log(this.proj.name,this.proj.description);
    
    this.messproj.emit([this.opc,this.proj.name,this.proj.description]);
    console.log('Sending Five');
    
  }

}
