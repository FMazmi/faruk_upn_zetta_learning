import { Component, OnInit, Input } from '@angular/core';
import { selectedObat } from '../obat/obat.component';

@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.component.html',
  styleUrls: ['./bayar.component.css']
})
export class BayarComponent implements OnInit {
  @Input() obat!: selectedObat[];

  constructor() { }

  ngOnInit(): void {
  }

}
