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
}
