
import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { DealService } from "../../app/deal-list/deal.service";
import * as dealActions from "../actions/deal.actions";
import { Deal } from "../../app/deal-list/deal";

@Injectable()
export class DealEffect {
  constructor(
    private actions$: Actions,
    private dealService: DealService
  ) {}

  @Effect()
  loadDeals$: Observable<Action> = this.actions$.pipe(
    ofType<dealActions.LoadDeals>(
      dealActions.DealActionTypes.LOAD_DEALS
    ),
    mergeMap((action: dealActions.LoadDeals) =>
      this.dealService.getDeals().pipe(
        map(
          (deals: Deal[]) =>
            new dealActions.LoadDealsSuccess(deals)
        ),
        catchError(err => of(new dealActions.LoadDealsFail(err)))
      )
    )
  );

// @Effect()
//   loadDeals$ = createEffect(() => this.actions$.pipe(
//   ofType('[Deal] Load Deals'),
//   mergeMap(() => this.dealService.getAll()
//     .pipe(
//       map(deals => ({ type: '[Deal] Load Deals Success', payload: deals })),
//       catchError(() => EMPTY)
//     ))
//   )
// );


}
