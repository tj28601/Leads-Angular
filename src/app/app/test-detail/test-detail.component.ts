import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal-list/deal.service';
import { ActivatedRoute } from '@angular/router';
import { Deal } from '../deal-list/deal';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dealService: DealService,
  ) { }
  model: Deal;

  ngOnInit() {
    this.getDeal();
  }

  getDeal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dealService.getDeal(id)
      .subscribe(res => {
        this.model = res;
      });
  }
}
