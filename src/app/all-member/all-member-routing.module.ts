import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMemberPage } from './all-member.page';

const routes: Routes = [
  {
    path: '',
    component: AllMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllMemberPageRoutingModule {}
