import { Injectable } from '@angular/core';
import { Action, createAction, props, union } from '@ngrx/store';
import { Deal } from '../../app/deal-list/deal';


export enum DealActionTypes {
  LOAD_DEALS ="[Deal] Load Deals",
  LOAD_DEALS_SUCCESS ="[Deal] Load Deals Success",
  LOAD_DEALS_FAIL ="[Deal] Load Deals Fail",
}

export class LoadDeals implements Action {
  readonly type = DealActionTypes.LOAD_DEALS;

}

// export const LoadDeals = createAction(DealActionTypes.LOAD_DEALS, props<{deals: Deal[]}>())


export class LoadDealsSuccess implements Action {
  readonly type = DealActionTypes.LOAD_DEALS_SUCCESS;

  constructor(public payload: Deal[]) {}
}

// export const loadDealsSuccess = createAction(DealActionTypes.LOAD_DEALS_SUCCESS, props<{ deals: Deal[]>()});


export class LoadDealsFail implements Action {
  readonly type = DealActionTypes.LOAD_DEALS_FAIL;

  constructor(public payload: string) {}
}

export type Action =
| LoadDeals
| LoadDealsSuccess
| LoadDealsFail

// const actions
// = union({
//   loadDeals,
//   loadDealsSuccess
// });

// export type DealActionsUnion = typeof actions;
