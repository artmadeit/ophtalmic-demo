import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Interview } from './Interview';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  private baseUrl = `${environment.apiUrl}/interviews`;

  constructor(private http: HttpClient) {}

  findById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  findAll(personId: number) {
    let params = new HttpParams().set('personId', personId);

    return this.http.get<Interview[]>(`${this.baseUrl}`, { params });
  }

  register(interview: any) {
    return this.http.post<any>(this.baseUrl, interview);
  }

  edit(id: number, interview: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, interview);
  }

  deleteById(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
