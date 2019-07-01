import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './company';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(
    private http: HttpClient,
  ) { }

  private companiesUrl = '//localhost:3000/companies'; //URL to Rails API

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.companiesUrl}/${id}`);
  }
}
