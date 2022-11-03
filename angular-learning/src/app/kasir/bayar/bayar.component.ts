import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { Item } from '../kasir/kasir.component';
import { selectedItem } from '../kasir/kasir.component';
@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.component.html',
  styleUrls: ['./bayar.component.scss']
})
export class BayarComponent implements OnInit, AfterContentChecked {
  @Output ('itemAdded') onAddItem : EventEmitter<Item> = new EventEmitter<Item>()
  @Input() items!: selectedItem[];

  public total:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    console.log("tes")
    this.total = this.items.reduce((total, item) => total += item.jumlah * item.harga , 0)
  }

}
