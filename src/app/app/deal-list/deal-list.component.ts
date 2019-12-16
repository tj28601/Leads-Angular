import { Component, OnInit } from '@angular/core';
import { DealService } from './deal.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Deal } from './deal'

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as dealActions from "../../store/actions/deal.actions";
import * as fromDeal from "../../store/reducers/deal.reducer";
// import { dealReducer } from "../../store/reducers/deal.reducer";

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {

  constructor(
   private dealService: DealService,
   private fb: FormBuilder,
   private store: Store<fromDeal.AppState>
  ) { }

  deals$: Observable<Deal[]>;
  newDealForm: FormGroup;

  ngOnInit() {
    // this.allDeals();
    this.store.dispatch(new dealActions.LoadDeals());
    this.deals$ = this.store.pipe(select(fromDeal.getDeals));
    console.log(this.deals$)

    this.setNewForm();
  }
  setNewForm() {
    this.newDealForm = this.fb.group({
      description: [''],
      company_id: []
    })
  }

  // allDeals(): void {
  //   this.dealService.getDeals()
  //     .subscribe(deals => this.deals = deals);
  // }
  //
  // add(): void {
  //   this.dealService.addDeal(this.newDealForm.value)
  //     .subscribe(res => {
  //       this.deals.push(res);
  //       this.newDealForm.reset();
  //     });
  // }
  //
  // delete(deal: Deal): void {
  //   this.deals = this.deals.filter(d => d !== deal);
  //   this.dealService.deleteDeal(deal).subscribe();
  // }

}
