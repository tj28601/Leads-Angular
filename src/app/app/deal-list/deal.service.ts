import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deal } from './deal';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DealService {
  constructor(
    private http: HttpClient,
  ) { }

  private dealsUrl = '//localhost:3000/deals'; //URL to Rails API

  getDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>(this.dealsUrl);
  }

  getDeal(id: number): Observable<Deal> {
    return this.http.get<Deal>(`${this.dealsUrl}/${id}`);
  }

  updateDeal (deal: Deal): Observable<any> {
    return this.http.put(`${this.dealsUrl}/${deal.id}`, deal, httpOptions);
  }

  addDeal (deal: Deal): Observable<Deal> {
    debugger;
    return this.http.post<Deal>(this.dealsUrl, deal, httpOptions);
  // .pipe(
  //   tap((newHero: Deal) => this.log(`added deal w/ id=${newHero.id}`)),
  //   catchError(this.handleError<Deal>('addHero'))
  // );
  }

  deleteDeal (deal: Deal | number): Observable<Deal> {
    const id = typeof deal === 'number' ? deal : deal.id;
    const url =  `${this.dealsUrl}/${id}`;

    return this.http.delete<Deal>(url, httpOptions);
  }
}
