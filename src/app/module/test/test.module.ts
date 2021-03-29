import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { ZoneTestComponent } from './views/zone-test/zone-test.component';
import { MedidorComponent } from './components/medidor/medidor.component';
import { PersonalityItemComponent } from './components/personality-item/personality-item.component';
import { TestQuestComponent } from './components/test-quest/test-quest.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LastQuestionComponent } from './components/last-question/last-question.component';


@NgModule({
  declarations: [TestComponent, ZoneTestComponent, MedidorComponent, PersonalityItemComponent, TestQuestComponent, LastQuestionComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class TestModule { }
