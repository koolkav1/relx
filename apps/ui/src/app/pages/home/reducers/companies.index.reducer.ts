import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { CompaniesState } from '../../../models/companies.state.interface';
import * as fromCompaniesReducer from './companies.reducer';


export const companiesStateFeatureKey = 'companiesState';

export interface CompanyFeatureState {
  companies: CompaniesState,
}

export const reducers: ActionReducerMap<CompanyFeatureState> = {
  companies: fromCompaniesReducer.reducer
}

export const getcompaniesFeatureState =
  createFeatureSelector<CompanyFeatureState>(companiesStateFeatureKey);
