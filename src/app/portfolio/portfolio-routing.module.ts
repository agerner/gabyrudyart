import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioSingleComponent } from './portfolio-single/portfolio-single.component';



const routes: Routes = [

  {
    path: '',
    component: PortfolioListComponent
  },
  {
    path: ':painting',
    component: PortfolioSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
