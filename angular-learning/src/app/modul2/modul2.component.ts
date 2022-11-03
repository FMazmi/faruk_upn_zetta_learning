import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modul2',
  templateUrl: './modul2.component.html',
  styleUrls: ['./modul2.component.scss']
})
export class Modul2Component implements OnInit {

  profil = ['Dokter 1','Dokter 2','Suster 1', 'Suster 2'];
  currentStatus1 = 'Tidak Ada';
  currentStatus2 = 'Tidak Ada';
  currentStatus3 = 'Tidak Ada';
  currentStatus4 = 'Tidak Ada'; 
  status = true;

  changeStatus1(){
    this.currentStatus1 = "Ada";
  }
  changeStatus2(){
    this.currentStatus2 = "Ada";
  }
  changeStatus3(){
    this.currentStatus3 = "Ada";
  }
  changeStatus4(){
    this.currentStatus4 = "Ada";
  }


  changeStatus5(){
    this.currentStatus1 = "Tidak Ada";
  }
  changeStatus6(){
    this.currentStatus2 = "Tidak Ada";
  }
  changeStatus7(){
    this.currentStatus3 = "Tidak Ada";
  }
  changeStatus8(){
    this.currentStatus4 = "Tidak Ada";
  }


  constructor() { }

  ngOnInit(): void {
  }

}

