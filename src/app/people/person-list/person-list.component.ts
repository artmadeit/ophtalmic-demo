import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../Person';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterLink
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Person>;
  displayedColumns: string[] = ['documentType', 'documentNumber', 'firstName', 'lastName', 'actions'];
  totalElements = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private personService: PersonService) {
    this.dataSource = new MatTableDataSource<Person>([]);
  }

  ngAfterViewInit() {
    this.loadPersons();
    this.paginator.page.subscribe(() => {
      this.loadPersons();
    });
  }

  private loadPersons() {
    const pageIndex = this.paginator?.pageIndex ?? 0;
    const pageSize = this.paginator?.pageSize ?? 10;
    
    this.personService.findAll(pageIndex, pageSize).subscribe(data => {
      this.dataSource.data = data.content;
      this.totalElements = data.totalElements;
    });
  }
}
