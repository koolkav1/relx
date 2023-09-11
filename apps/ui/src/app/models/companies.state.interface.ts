import { DefaultState } from "./default.state.interface";
import {SearchCompaniesResponse} from './company-search.interface';

export interface CompaniesState extends DefaultState {
  companies: SearchCompaniesResponse,
  companyName?: string
}
