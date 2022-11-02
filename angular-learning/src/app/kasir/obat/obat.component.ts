import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export interface Obat {id:string, nama:string, harga:number}
export interface selectedObat {id:string, nama:string, harga:number, jumlah:number}

@Component({
  selector: 'app-obat',
  templateUrl: './obat.component.html',
  styleUrls: ['./obat.component.css']
})
export class ObatComponent implements OnInit {
  @Output ('obatAdded') onAddObat : EventEmitter<Obat> = new EventEmitter<Obat>()

  judul: string = 'List Obat';

  public obat: Obat[]= [
    {
      id:'1',
      nama: 'Paracetamol',
      harga: 2300
    },
    {
      id:'2',
      nama: 'Amoxicillin',
      harga: 600
    },
    {
      id:'3',
      nama: 'Combantrin',
      harga: 7000
    },
    {
      id:'4',
      nama: 'Paramex',
      harga: 5000
    },
    {
      id:'5',
      nama: 'Oskadon',
      harga: 6000
    },
    {
      id:'6',
      nama: 'Antimo',
      harga: 6000
    },
    {
      id:'7',
      nama: 'Tolak Angin',
      harga: 2500
    },
    {
      id:'8',
      nama: 'Vitamin C',
      harga: 2500
    },
    {
      id:'9',
      nama: 'Stimuno',
      harga: 2500
    },
    {
      id:'10',
      nama: 'Alkohol 70%',
      harga: 80000
    },
  ];

  public SelectedObat : selectedObat[]=[]

  addObat(obat : Obat){
    this.onAddObat.emit(obat)
    const duplicated = this.SelectedObat.findIndex(({id})=> id === obat.id)

    if(duplicated >= 0){
      this.SelectedObat[duplicated].jumlah +=1
    }
    else{
      this.SelectedObat.push({...obat, jumlah: 1})
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
