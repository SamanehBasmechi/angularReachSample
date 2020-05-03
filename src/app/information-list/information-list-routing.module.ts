import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationListComponent } from './information-list.component';


const routes: Routes = [
  {path:'' , component:InformationListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationListRoutingModule { }
