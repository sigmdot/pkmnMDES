import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  exports: [MatStepperModule],
  imports: [CommonModule,MatStepperModule],
})
export class MaterialModule {}
