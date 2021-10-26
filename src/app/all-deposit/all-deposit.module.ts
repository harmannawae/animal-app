import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllDepositPageRoutingModule } from './all-deposit-routing.module';

import { AllDepositPage } from './all-deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllDepositPageRoutingModule
  ],
  declarations: [AllDepositPage]
})
export class AllDepositPageModule {}
