import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { ZoneTestComponent } from './views/zone-test/zone-test.component';
import { MedidorComponent } from './components/medidor/medidor.component';
import { PersonalityItemComponent } from './components/personality-item/personality-item.component';
import { TestQuestComponent } from './components/test-quest/test-quest.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [TestComponent, ZoneTestComponent, MedidorComponent, PersonalityItemComponent, TestQuestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    MaterialModule,
  ]
})
export class TestModule { }
