import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-harea',
  templateUrl: './harea.component.html',
  styleUrls: ['./harea.component.css']
})
export class HareaComponent implements OnInit {
@Output() messarea= new EventEmitter();
  constructor(private toastr:ToastrService) { }
  opc:string='3'
  ngOnInit(): void {
  }
  public savearea(area:string){
    this.messarea.emit([this.opc,area]);
    console.log('Send<=>');
    
  }

}
