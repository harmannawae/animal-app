import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPetsPage } from './all-pets.page';

const routes: Routes = [
  {
    path: '',
    component: AllPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPetsPageRoutingModule {}
