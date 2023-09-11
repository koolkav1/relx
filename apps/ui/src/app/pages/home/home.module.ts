import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCompaniesState from './reducers/companies.index.reducer';
import { CompaniesEffects } from './effects/companies.effects';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import {companiesResolver} from './resolvers/companies.resolver'
import { CompaniesService } from '../../services/companies.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      companiesData: companiesResolver,
    },
  },
];


@NgModule({
  declarations: [HomeComponent],
  providers: [CompaniesService],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCompaniesState.companiesStateFeatureKey, fromCompaniesState.reducers),
    EffectsModule.forFeature([CompaniesEffects]),
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class HomeStateModule { }
