import { Component, OnInit } from '@angular/core';
import { DealService } from './deal.service';
import { Deal } from './deal'

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {

  constructor(
   // private companyService: CompanyService
   private dealService: DealService
  ) { }

  deals: Deal[] = [];

  ngOnInit() {
    this.allDeals();
  }

  allDeals(): void {
    this.dealService.getDeals()
      .subscribe(deals => this.deals = deals);
  }

}
