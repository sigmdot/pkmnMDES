import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:" ",
    loadChildren: () => import('./module/visita/visita.module').then(m => m.VisitaModule)
  },
  {
    path:"zonetest",
    loadChildren: () => import('./module/test/test.module').then(m=>m.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
