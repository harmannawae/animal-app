import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllMemberPageRoutingModule } from './all-member-routing.module';

import { AllMemberPage } from './all-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllMemberPageRoutingModule
  ],
  declarations: [AllMemberPage]
})
export class AllMemberPageModule {}
