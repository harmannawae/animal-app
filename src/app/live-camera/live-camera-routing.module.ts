import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveCameraPage } from './live-camera.page';

const routes: Routes = [
  {
    path: '',
    component: LiveCameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveCameraPageRoutingModule {}
