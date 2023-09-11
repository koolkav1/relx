import { ResolveFn } from '@angular/router';
import {CompaniesActions} from '../../home/actions/companies.actions';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, first, finalize } from 'rxjs';

export const companiesResolver: ResolveFn<boolean> = () => {
  const store =  inject(Store);
  let loading = false;
  return store.pipe(
    tap(() => {
      if(!loading) {
        loading = true;
        store.dispatch(
          CompaniesActions.loadCompanies()
        )
      }
    }),
    first(),
    finalize(() => loading = false)
  )
};
