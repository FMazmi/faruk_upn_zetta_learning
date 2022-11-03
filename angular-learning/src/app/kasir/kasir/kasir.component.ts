import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export interface Item {title:string, id:string, harga:number}  
export interface selectedItem {title:string, id:string, harga:number, jumlah:number}  

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})

export class KasirComponent implements OnInit {
  @Output ('itemAdded') onAddItem : EventEmitter<Item> = new EventEmitter<Item>()

  judul: string = 'List Item';

  public items: Item[] = [
    {
      id:'1',
      title: 'Masker Duckbill',
      harga:15000
    },
    {
      id:'2',
      title: 'Paracetamol',
      harga:12000
    },
    {
      id:'3',
      title: 'Amoxicilin',
      harga:16000
    },
    {
      id:'4',
      title: 'Vitamin C',
      harga:2500
    },
    {
      id:'5',
      title: 'Betadine',
      harga:50000
    },
    {
      id:'6',
      title: 'Alcohol 70%',
      harga:80000
    },
  ];

  public selectedItems : selectedItem[]=[]

  
  constructor() { }

  ngOnInit(): void { }

  addItem(item :Item){
    const duplicated =this.selectedItems.findIndex(({id})=>id===item.id)
    let jumlah : 0;
    if(duplicated>=0){
      this.selectedItems[duplicated].jumlah+=1
    }
    else{
      this.selectedItems.push({...item, jumlah: 1})
    }
  }

}


