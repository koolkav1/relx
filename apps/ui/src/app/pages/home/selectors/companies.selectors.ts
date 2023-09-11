import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers/companies.index.reducer";
import { CompaniesState} from "../../../models/companies.state.interface";
import {Item} from '../../../models/company-search.interface';
export const loadCompaniesFromState = createSelector(fromFeature.getcompaniesFeatureState,
  (state: fromFeature.CompanyFeatureState) => state.companies);

const getcompanies = (state: CompaniesState): Item[] => state.companies.items;
const getcompaniesLoading = (state: CompaniesState): boolean => state.loading;
const getcompaniesLoaded = (state: CompaniesState): boolean => state.loaded;

const selectcompanies = createSelector(loadCompaniesFromState, getcompanies);
const selectcompaniesLoading = createSelector(loadCompaniesFromState, getcompaniesLoading);
const selectcompaniesLoaded = createSelector (loadCompaniesFromState, getcompaniesLoaded);

export const CompaniesSelectors = {
  selectcompanies,
  selectcompaniesLoaded,
  selectcompaniesLoading
}
