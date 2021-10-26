import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetDepositPagePage } from './pet-deposit-page.page';

const routes: Routes = [
  {
    path: '',
    component: PetDepositPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetDepositPagePageRoutingModule {}
