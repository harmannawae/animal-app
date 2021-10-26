import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllAnimalPage } from './all-animal.page';

const routes: Routes = [
  {
    path: '',
    component: AllAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllAnimalPageRoutingModule {}
