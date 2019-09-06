import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  portfolio;
  constructor(private portfolioService: PortfolioService ) { 
  }

  ngOnInit() {
    this.portfolio = this.portfolioService.getPortfolio()

  }

}
