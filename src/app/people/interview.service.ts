import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { InterviewForm } from './InterviewForm';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  private baseUrl = `${environment.apiUrl}/interviews`;

  constructor(private http: HttpClient) {}

  register(interview: InterviewForm) {
    return this.http.post<InterviewForm>(this.baseUrl, interview);
  }
}
