import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationListRoutingModule } from './information-list-routing.module';
import { InformationListComponent } from './information-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [InformationListComponent],
  imports: [
    CommonModule,
    InformationListRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class InformationListModule { }
