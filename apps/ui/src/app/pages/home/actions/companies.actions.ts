import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SearchCompaniesResponse } from '../../../models/company-search.interface';

export const CompaniesActions = createActionGroup({
  source: 'Companies',
  events: {
    'Load Companies': emptyProps(),
    'Search Companies': props<{ companyName: string}>(),
    'Search Companies Success': props<{ data: SearchCompaniesResponse }>(),
    'Search Companies Failure': props<{ error: Error }>(),
    'Load Companies Success': props<{ data: SearchCompaniesResponse }>(),
    'Load Companies Failure': props<{ error: Error }>(),
  }
});
