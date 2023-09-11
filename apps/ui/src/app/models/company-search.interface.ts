export interface SearchCompaniesResponse {
  page_number:   number;
  kind:          string;
  total_results: number;
  items:         Item[];
}

export interface Item {
  company_status:         string;
  address_snippet:        string;
  date_of_creation:       Date;
  matches:                Matches;
  description:            string;
  links:                  Links;
  company_number:         string;
  title:                  string;
  company_type:           string;
  address:                Address;
  kind:                   string;
  description_identifier: string[];
}

export interface Address {
  premises:       string;
  postal_code:    string;
  country:        string;
  locality:       string;
  address_line_1: string;
}

export interface Links {
  self: string;
}

export interface Matches {
  title: number[];
}
