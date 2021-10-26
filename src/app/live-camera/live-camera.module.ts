import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveCameraPageRoutingModule } from './live-camera-routing.module';

import { LiveCameraPage } from './live-camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveCameraPageRoutingModule
  ],
  declarations: [LiveCameraPage]
})
export class LiveCameraPageModule {}
