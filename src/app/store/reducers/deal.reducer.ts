
import * as dealActions from "../actions/deal.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Deal } from "../../app/deal-list/deal";
import * as fromRoot from "../state/deal.state";

export interface DealState extends EntityState<Deal> {
  // company_id: number,
  // size: any,
  // close_date: any
  error: string

  // id?: number;
  // company_id?: number;
  // size?: any;
  // description?: any;
  // stage?: any;
  // close_date?: any;
}

export interface AppState extends fromRoot.AppState {
  deals: DealState;
}

export const dealAdapter: EntityAdapter<Deal> = createEntityAdapter<
  Deal
>();


export const defaultDeal: DealState = {
  // ids?: [],
  // entities?: {},
  // deals: [],
  ids: [],
  entities: {},
  error: ""
};

export const initialState = dealAdapter.getInitialState(defaultDeal);

export function dealReducer(
  state = initialState,
  action: dealActions.Action
): DealState {
  switch (action.type) {
    case dealActions.DealActionTypes.LOAD_DEALS_SUCCESS: {
      return dealAdapter.addAll(action.payload, {
        ...state
      });
    }
    case dealActions.DealActionTypes.LOAD_DEALS_FAIL: {
      return {
        ...state,
        entities: {},
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

  const getDealFeatureState = createFeatureSelector<DealState>(
    "deals"
  );

  export const getDeals = createSelector(
  getDealFeatureState,
  dealAdapter.getSelectors().selectAll
);
