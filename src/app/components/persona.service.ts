import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from './Page';
import { Persona } from './Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl = 'http://localhost:3000/personas';

  constructor(private http: HttpClient) { }

  findById(id: number) {
    return this.http.get<Persona>(`${this.baseUrl}/${id}`);
  }

  findAll(page: number, size: number) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.http.get<Page<Persona>>(`${this.baseUrl}/paginated`, { params });
  }

  register(persona: Persona) {
    return this.http.post<Persona>(this.baseUrl, persona);
  }

  edit(id: number, persona: Persona) {
    return this.http.put<Persona>(`${this.baseUrl}/${id}`, persona);
  }

  deleteById(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
