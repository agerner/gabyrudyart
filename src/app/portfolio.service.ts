import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { find } from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  

  constructor(private http: HttpClient) { }

  getPortfolio() {
    return this.http.get('assets/data/portfolio.json');
  }
}
