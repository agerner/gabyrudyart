import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portfolio;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
   this.portfolioService.getPortfolio()
    .subscribe((porfolio: any) => {
      console.log(porfolio);
      this.portfolio = porfolio.data;
    });

  }

}
