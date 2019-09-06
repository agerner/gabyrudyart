import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioSingleComponent } from './portfolio-single/portfolio-single.component';


@NgModule({
  declarations: [PortfolioListComponent, PortfolioSingleComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
