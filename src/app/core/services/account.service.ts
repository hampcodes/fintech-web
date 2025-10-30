import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AccountRequest, AccountResponse } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.baseUrl}/accounts`;

  getAll(): Observable<AccountResponse[]> {
    return this.http.get<AccountResponse[]>(this.apiUrl);
  }

  create(data: AccountRequest): Observable<AccountResponse> {
    return this.http.post<AccountResponse>(this.apiUrl, data);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/id`);
  }



  update(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/id`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/id`);
  }
}
