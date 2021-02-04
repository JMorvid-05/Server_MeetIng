import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hdatexe',
  templateUrl: './hdatexe.component.html',
  styleUrls: ['./hdatexe.component.css']
})


export class HdatexeComponent implements OnInit {
  @Output() messdate = new EventEmitter();
  opc: string = '4';
  model: NgbDateStruct;
  date: { year: number, month: number };
  da:Date=new Date();
  ngOnInit(){
    this.model = this.calendar.getToday();
   }
  constructor(private calendar: NgbCalendar, private toastr: ToastrService) { }
  datexec: string;
  sendexec() {
    this.datexec = this.model['day'] + '/' + this.model['month'] + '/' + this.model['year'];
    this.messdate.emit([this.opc, this.datexec]);
    console.log('Sending four');

  }
}



