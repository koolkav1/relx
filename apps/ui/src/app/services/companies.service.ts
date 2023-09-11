import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CompaniesService {
  url =
    'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1';
  constructor(private http: HttpClient) {}

  searchCompany(companyName?: string): Observable<any> {
    if (!companyName) {
      companyName = 'a';
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'c8r8TBgoHW6qCbPjdF08dpcCmzC0hob9OckVuF79',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json, text/plain, */*',
      Referer: 'http://localhost:4200/',
    });
    return this.http.get(`${this.url}/Search?Query=${companyName}`, {
      headers,
    });
  }

  getOfficers(companyNumber: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'c8r8TBgoHW6qCbPjdF08dpcCmzC0hob9OckVuF79',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.get(
      `${this.url}/Officers?CompanyNumber=${companyNumber}`,
      {
        headers,
      }
    );
  }
}
