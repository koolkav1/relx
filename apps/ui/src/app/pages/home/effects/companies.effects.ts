import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, take } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { CompaniesService } from '../../../services/companies.service';
import { CompaniesActions } from '../actions/companies.actions';
import { SearchCompaniesResponse } from '../../../models/company-search.interface';


@Injectable()
export class CompaniesEffects {

  constructor(private companies: CompaniesService, private actions$: Actions) {}
  initalCompaniesLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.loadCompanies),
      switchMap(() =>
        this.companies.searchCompany().pipe(
          take(1),
          map((companiesResponse: SearchCompaniesResponse) =>
            CompaniesActions.loadCompaniesSuccess({
              data: companiesResponse,
            })
          ),
          catchError(async (error: Error) =>
            CompaniesActions.loadCompaniesFailure({
              error,
            })
          )
        )
      )
    );
  });
  searchCompanies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.searchCompanies),
      switchMap((action: { companyName: string }) =>
        this.companies.searchCompany(action.companyName).pipe(
          take(1),
          map((companiesResponse: SearchCompaniesResponse) =>
            CompaniesActions.searchCompaniesSuccess({
              data: companiesResponse,
            })
          ),
          catchError(async (error: Error) =>
            CompaniesActions.searchCompaniesFailure({
              error,
            })
          )
        )
      )
    );
  });

}
