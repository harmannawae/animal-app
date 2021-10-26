import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllAnimalPageRoutingModule } from './all-animal-routing.module';

import { AllAnimalPage } from './all-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllAnimalPageRoutingModule
  ],
  declarations: [AllAnimalPage]
})
export class AllAnimalPageModule {}
