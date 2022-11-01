import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { PasienComponent } from './pasien/pasien.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    PaymentComponent,
    PasienComponent,
    ReportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KasirModule { }
