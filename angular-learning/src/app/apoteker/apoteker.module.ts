import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier/supplier.component';
import { ObatComponent } from './obat/obat.component';
import { KaryawanComponent } from './karyawan/karyawan.component';



@NgModule({
  declarations: [
    SupplierComponent,
    ObatComponent,
    KaryawanComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ApotekerModule { }
