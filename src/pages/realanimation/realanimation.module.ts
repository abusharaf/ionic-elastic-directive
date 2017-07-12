import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Realanimation } from './realanimation';
import { ParallaxHeaderComponent } from "../../components/components.module";
// import { ParallaxHeader } from "../../components/parallax-header/parallax-header";

@NgModule({
  declarations: [
    Realanimation
  ],
  imports: [
    IonicPageModule.forChild(Realanimation)
  ],
  exports: [
    Realanimation
  ]
}) 
export class RealanimationModule {}
