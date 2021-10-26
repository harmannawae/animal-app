import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllDepositPage } from './all-deposit.page';

const routes: Routes = [
  {
    path: '',
    component: AllDepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllDepositPageRoutingModule {}
