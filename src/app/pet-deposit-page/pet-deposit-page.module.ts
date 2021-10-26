import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetDepositPagePageRoutingModule } from './pet-deposit-page-routing.module';

import { PetDepositPagePage } from './pet-deposit-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetDepositPagePageRoutingModule
  ],
  declarations: [PetDepositPagePage]
})
export class PetDepositPagePageModule {}
