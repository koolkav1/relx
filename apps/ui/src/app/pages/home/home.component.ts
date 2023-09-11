import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  Observable,
  startWith,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { CompaniesSelectors } from './selectors/companies.selectors';
import { Item } from '../../models/company-search.interface';
import { CompaniesActions } from './actions/companies.actions';

@Component({
  selector: 'relx-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchCompanyControl = new FormControl('');
  filteredOptions: Observable<Item[]>;
  constructor(private store: Store) {
    this.filteredOptions = this.store.select(
      CompaniesSelectors.selectcompanies
    );
  }
  ngOnInit(): void {
    this.searchCompanyControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(async (val) => {
        if (val) {
          return this.store.dispatch(
            CompaniesActions.searchCompanies({ companyName: val })
          );
        }
      })
    );
  }
  handleSelection(item: Item): void {
    // Dispatch action to handle selection/ direct to companies detail page
  }
}
