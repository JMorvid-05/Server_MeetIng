import { Component, OnInit, Output, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hpersonqr',
  templateUrl: './hpersonqr.component.html',
  styleUrls: ['./hpersonqr.component.css']
})
export class HpersonqrComponent implements OnInit {
  @Output() messperson=new EventEmitter();
  @Input() country:String;
  opc:string='6';

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  sendperson(person:string){
    this.messperson.emit([this.opc,person]);
    console.log(person);
    
    console.log('Sending Six');
    
  }

}
