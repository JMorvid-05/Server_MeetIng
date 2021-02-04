import { Component, OnInit } from '@angular/core';

import {NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],

})
export class PruebaComponent  {

  constructor(private modalService: NgbModal) {
    NgbModalRef.prototype["c"] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function(reason: string) {
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector(".modal").classList.remove("show");
      setTimeout(() => {
        this["c"](reason);
      }, 500);
    };
    NgbModalRef.prototype["d"] = NgbModalRef.prototype.dismiss;
    NgbModalRef.prototype.dismiss = function(reason: string) {
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector(".modal").classList.remove("show");
      setTimeout(() => {
        this["d"](reason);
      }, 500);
    };
  }
  open(basic) {
    this.modalService.open(basic);
  }

  /*
  constructor(private modalService: NgbModal) { }
  closeResult = '';
  ngOnInit(): void { 

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }*/

}

