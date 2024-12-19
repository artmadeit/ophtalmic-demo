import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../Person';

@Component({
  selector: 'app-persona-list',
  imports: [MatTableModule, MatIconModule, MatTooltipModule, MatButtonModule, RouterLink],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {
  dataSource = new MatTableDataSource<Person>([]);
  displayedColumns: string[] = ['documentType', 'documentNumber', 'firstName', 'lastName', 'actions'];

  constructor(private personService: PersonService) {
    this.personService.findAll(0, 10).subscribe(data => {
      this.dataSource.data = data.content;
    });
  }
}
