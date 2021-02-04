import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hcountry',
  templateUrl: './hcountry.component.html',
  styleUrls: ['./hcountry.component.css']
})
export class HcountryComponent {
  @Output() messend= new EventEmitter();
  opc:string='1';

  constructor() { }

  public savecountry(country: any) {
    this.messend.emit([this.opc,country]);
    console.log('=======^^^');
    
  }

}
