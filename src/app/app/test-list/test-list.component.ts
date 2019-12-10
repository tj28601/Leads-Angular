import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal-list/deal.service';
import { Deal } from '../deal-list/deal';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  constructor(private dealService: DealService,) { }
deals: Deal[] = [];
  ngOnInit() {
    this.allDeals();
  }
  allDeals(): void {
    this.dealService.getDeals()
      .subscribe(deals => this.deals = deals);
  }
}
