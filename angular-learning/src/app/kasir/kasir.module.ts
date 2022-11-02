import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { ObatComponent } from './obat/obat.component';
import { BayarComponent } from './bayar/bayar.component';


@NgModule({
  declarations: [
    ObatComponent,
    BayarComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }
