import { Component, Output, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hclient',
  templateUrl: './hclient.component.html',
  styleUrls: ['./hclient.component.css']
})
export class HclientComponent  {
@Output() messcli=new EventEmitter();
@Input() country:String;
 opc:string='2';
  constructor(private toastr:ToastrService) { }

  public saveclient(client: string) {
    console.log(client);
    
    this.messcli.emit([this.opc,client]);
    console.log('=======^^^');
  }

}
