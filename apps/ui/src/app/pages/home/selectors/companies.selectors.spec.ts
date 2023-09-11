import * as fromCompanies from '../reducers/companies.index.reducer';
import { loadCompaniesFromState } from './companies.selectors';


describe('Companies Selectors', () => {
  it('should select the feature state', () => {
    const result = loadCompaniesFromState({
      [fromCompanies.companiesStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
