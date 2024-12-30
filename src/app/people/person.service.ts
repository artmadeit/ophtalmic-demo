import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from './Page';
import { Person } from './Person';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseUrl = 'http://localhost:8080/people';

  constructor(private http: HttpClient) { }

  findById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      map((person: any) => {
        if (person.birthDate) {
          person.birthDate = this.parseISO(person.birthDate);
        }
        return person as Person;
      })
    );
  }

  parseISO(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  findAll(page: number, size: number, searchText: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('searchText', searchText);

    return this.http.get<Page<Person>>(`${this.baseUrl}`, { params });
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
