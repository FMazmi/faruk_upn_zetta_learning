import { Component, OnInit } from '@angular/core';
export interface item {id: number, name: string, price: number};
export interface selecteditem {id: number, name: string, price: number,amount: number};

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public items: item[] = [
    {id: 1, name: 'Paracetamol', price: 12000},
    {id: 2, name: 'Bodrex', price: 5000},
    {id: 3, name: 'Masker Duckbill', price: 15000},
    {id: 4, name: 'Amoxicillin', price: 16000},
    {id: 5, name: 'Dexanta', price: 15000},
    {id: 6, name: 'Vitamin C', price: 2500},
    {id: 7, name: 'Alcohol 70%', price: 80000},
    {id: 8, name: 'FreshCare', price: 18500},
    {id: 9, name: 'Minyak Telon', price: 17000},
    {id: 9, name: 'Popok Bayi', price: 24000},
  ]

  public selectedItems: selecteditem[]=[];

  addItem(item:item){
    const duplicate = this.selectedItems.findIndex(({id}) => id === item.id);
    if(duplicate >= 0){this.selectedItems[duplicate].amount += 1}
    else{this.selectedItems.push({...item, amount: 1})}
  }
}