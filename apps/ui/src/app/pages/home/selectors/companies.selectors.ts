import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCompanies from '../../reducers/companies/companies.reducer';

export const selectCompaniesState = createFeatureSelector<fromCompanies.State>(
  fromCompanies.companiesFeatureKey
);
