import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from './Page';
import { Person } from './Person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseUrl = 'http://localhost:3000/personas';

  constructor(private http: HttpClient) {}

  findById(id: number) {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  findAll(page: number, size: number) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Page<Person>>(`${this.baseUrl}/paginated`, { params });
  }

  register(persona: Person) {
    return this.http.post<Person>(this.baseUrl, persona);
  }

  edit(id: number, persona: Person) {
    return this.http.put<Person>(`${this.baseUrl}/${id}`, persona);
  }

  deleteById(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
