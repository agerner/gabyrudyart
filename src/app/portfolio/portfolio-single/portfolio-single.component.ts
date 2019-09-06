import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../portfolio.service';
import { find } from 'lodash';


@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.css']
})
export class PortfolioSingleComponent implements OnInit {
  portfolio;
  painting;
  items = [];
  pageOfItems: Array<any>;
  

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
    ) { }

  ngOnInit() {
    this.portfolioService.getPortfolio()
    .subscribe((portfolio: any) => {
      console.log(portfolio);
      this.portfolio = portfolio.data;
      this.route.params.subscribe(params => {
        console.log("params", params);
        console.log("portDATA", portfolio.data);
        // get the username out of the route params
        // this.painting = params;
        console.log({
          params: params,
          portfolioData: this.portfolio,
          painting: find(this.portfolio, { name: params.painting })
        })
        this.painting = find(this.portfolio, { id: params.painting });
        console.log("this.paint", this.painting);
        this.items = portfolio.data.fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
        console.log(this.items, "items");

    });    
  });
  
}

onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

}
