import { createFeature, createReducer, on } from '@ngrx/store';
import { CompaniesActions } from '../actions/companies.actions';
import {CompaniesState} from '../../../models/companies.state.interface'
import { SearchCompaniesResponse } from '../../../models/company-search.interface';

export const initialState: CompaniesState = {
  companies: {
    page_number: 0,
    kind: '',
    total_results: 0,
    items: []
  },
  loading: false,
  loaded: false,
  error: {
    message: '',
    name: ''
  }
};

function loadCompaniesHandler(state: CompaniesState): CompaniesState {
  return {
    ...state,
    loading: true,
    loaded: false
  }
}

function searchCompaniesHandler(state: CompaniesState, action: {companyName: string}): CompaniesState {
  return {
    ...state,
    companyName: action.companyName,
    loaded: false,
    loading: true
  }
}

function searchCompaniesHandlerSuccess(state: CompaniesState, action: {data: SearchCompaniesResponse}): CompaniesState {
  return {
    ...state,
    companies: action.data,
    loaded: true,
    loading: false,
  }
}

function searchCompaniesHandlerFail(state: CompaniesState, action: {error: Error}): CompaniesState {
  return {
    ...state,
    loaded: true,
    loading: false,
    error: action.error
  }
}

function loadCompaniesHandlerSuccess(state: CompaniesState, action: {data: SearchCompaniesResponse}): CompaniesState {
  return {
    ...state,
    companies: action.data,
    loaded: true,
    loading: false,
  }
}


function loadCompaniesHandlerFail(state: CompaniesState, action: {error: Error}): CompaniesState {
  return {
    ...state,
    loaded: true,
    loading: false,
    error: action.error
  }
}
export const reducer = createReducer(
  initialState,
  on(CompaniesActions.loadCompanies, loadCompaniesHandler),
  on(CompaniesActions.loadCompaniesSuccess, loadCompaniesHandlerSuccess),
  on(CompaniesActions.loadCompaniesFailure, loadCompaniesHandlerFail),
  on(CompaniesActions.searchCompanies, searchCompaniesHandler),
  on(CompaniesActions.searchCompaniesSuccess, searchCompaniesHandlerSuccess),
  on(CompaniesActions.searchCompaniesFailure, searchCompaniesHandlerFail),
);

