import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { InterviewForm } from './InterviewForm';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  private baseUrl = `${environment.apiUrl}/interviews`;

  constructor(private http: HttpClient) {}

  findById(id: number) {
    return this.http.get<InterviewForm>(`${this.baseUrl}/${id}`)
  }

  findAll(personId: number) {
    let params = new HttpParams().set('personId', personId);

    return this.http.get<InterviewForm[]>(`${this.baseUrl}`, { params });
  }

  register(interview: InterviewForm) {
    return this.http.post<InterviewForm>(this.baseUrl, interview);
  }

  edit(id: number, interview: InterviewForm) {
    return this.http.put<InterviewForm>(`${this.baseUrl}/${id}`, interview);
  }

  deleteById(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
