import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { ZoneTestComponent } from './views/zone-test/zone-test.component';

const routes: Routes = [
  {
    path:"",
    component:TestComponent,
    children:[
      {
        path:"",
        component: ZoneTestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
