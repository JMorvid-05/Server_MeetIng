import { Component, OnInit, Input } from '@angular/core';
import { HourService } from "../../services/hour/hour.service";
import { Hour } from "../../models/Hour";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService, SocialUser  } from "angularx-social-login";
@Component({
  selector: 'app-formhour',
  templateUrl: './formhour.component.html',
  styleUrls: ['./formhour.component.css']
})
export class FormhourComponent implements OnInit {
  constructor( private authService: AuthService,private route:Router,private hourservice: HourService, private toastr: ToastrService) { }
  user:SocialUser;
  cont: number = 6;
  countryg: String;
  areaC: boolean = false;
  countryC: boolean = true;
  clientC: boolean = false;
  costC: boolean = false;
  datexeC: boolean = false;

  personqrC: boolean = false;
  projectC: boolean = false;
  nus: number;
  bac: boolean = false;


  ngOnInit() {

  }
  outacr() {
    switch (this.countryg) {
      case 'Colombia':
        this.countryg = 'C';
        break;
      case 'Costa Rica':
        this.countryg = 'CR'
        break;
      case 'Chile':
        this.countryg = 'Cl'
        break;
      case 'República Dominicana':
        this.countryg = 'RD'
        break;
    }
  }
  social(){
    this.authService.authState.subscribe((user)=>{
      this.user=user;
      this.hour.email=this.user.email;
      console.log(this.hour.email);
      
      console.log(this.user.email);
      console.log(this.user.authToken);
    });
  }
  hour: Hour = {
    email:'',
    country: '',
    client: '',
    area: '',
    datexec: undefined,
    project: '',
    description: '',
    personqr: '',
    hoursg: 0,
    files: '',
    cont: 0
  }

  receive($event) {
    console.log("aquí=");
    console.log($event);
    this.nus = +$event[0];
    switch (this.nus) {
      case 1:
        this.social();
        this.hour.country = $event[1];
        console.log(this.hour.country);
        this.countryg = this.hour.country;
        this.outacr();
        this.toastr.info('País Seleccionado', 'Completado 1/7');
        this.bac = true;
        this.countryC = false;
        this.clientC = true;
        break;
      case 2:
        this.hour.client = $event[1];
        console.log(this.hour.client);
        this.toastr.info('Cliente Seleccionado', 'Completado 2/7');
        this.clientC = false;
        this.areaC = true;
        break;
      case 3:
        this.hour.area = $event[1];
        console.log(this.hour.area);
        this.toastr.info('Área Seleccionada', 'Completado 3/7');
        this.areaC = false;
        this.datexeC = true;
        break;
      case 4:
        this.hour.datexec = $event[1];
        console.log(this.hour.datexec);
        this.toastr.info('Fecha Seleccionada', 'Completado 4/7');
        this.datexeC = false;
        this.projectC = true;
        break;
      case 5:
        this.hour.project = $event[1];
        this.hour.description = $event[2];
        console.log(this.hour.project + ' ' + this.hour.description);
        this.toastr.info('Proyecto Seleccionado', 'Completado 5/7');
        this.projectC = false;
        this.personqrC = true;
        break;
      case 6:
        this.hour.personqr = $event[1];
        console.log(this.hour.personqr);
        this.toastr.info('Persona Seleccionada', 'Completado 6/7');
        this.personqrC = false;
        this.costC = true;
        break;
      case 7:
        this.hour.hoursg = $event[1];
        console.log(this.hour.hoursg);
        this.toastr.info('Horas Seleccionadas', 'Completado 7/7');
        this.costC = false;
        this.inc();
        this.saveHour();
        this.toastr.info('Completado', 'Completado');
        this.countryC = true;
        this.bac=false;
        this.route.navigate(['menu']);
        console.log("JMorvid");
        break;
      default:
        break;
    }
  }



  
  back() {

    this.nus = this.nus - 1;
    console.log('number: ' + this.nus);
    switch (this.nus) {
      case 0:
        this.countryC = true;
        this.clientC = false;
        this.bac=false;
        break;
      case 1:
        this.clientC = true;
        this.areaC = false;
        break;
      case 2:
        this.areaC = true;
        this.datexeC = false;
        break;
      case 3:
        this.datexeC = true;
        this.projectC = false;
        break;
      case 4:
        this.projectC = true;
        this.personqrC = false;
        break;
      case 5:
        this.personqrC = true;
        this.costC = false;
        break;
      case 6:
        this.costC = true;
        this.countryC = false;
        break;

        
        
      default:
        break;
    }
  }
  inc() {
    this.cont = this.cont + 1;
    this.hour.cont = this.cont;
  }

  // los @input y @output dentro del export


  saveHour() {
    console.log('Start');
    console.log(this.hour);
    this.hourservice.savehour(this.hour).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Horas Registradas', 'Éxito');
      },
      err => {
        console.log(err);

      }

    )

  }
}
