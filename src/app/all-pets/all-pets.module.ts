import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPetsPageRoutingModule } from './all-pets-routing.module';

import { AllPetsPage } from './all-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPetsPageRoutingModule
  ],
  declarations: [AllPetsPage]
})
export class AllPetsPageModule {}
