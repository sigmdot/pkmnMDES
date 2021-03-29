import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitaComponent } from './visita.component';

const routes: Routes = [
  {
    path:"",
    component: VisitaComponent,
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }
