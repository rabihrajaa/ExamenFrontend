// services/remboursement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Remboursement} from '../../models/remboursement';

@Injectable({
  providedIn: 'root'
})
export class RemboursementService {
  private apiUrl = 'http://localhost:8086/api/remboursements';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(this.apiUrl);
  }

  getByCreditId(creditId: number): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(`${this.apiUrl}/credit/${creditId}`);
  }

  create(remb: Remboursement): Observable<Remboursement> {
    return this.http.post<Remboursement>(this.apiUrl, remb);
  }

  update(id: number, remb: Remboursement): Observable<Remboursement> {
    return this.http.put<Remboursement>(`${this.apiUrl}/${id}`, remb);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
