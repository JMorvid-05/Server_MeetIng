import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hcost',
  templateUrl: './hcost.component.html',
  styleUrls: ['./hcost.component.css']
})
export class HcostComponent  {
  @Output() messcost=new EventEmitter();
    hor={
    cant:0
  }
  opc:string='7';
  constructor() { }
  sendhours(){
    this.messcost.emit([this.opc,this.hor.cant]);



  }

}
