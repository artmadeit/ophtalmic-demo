import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { ConfirmDialogComponent } from '../../common/components/confirm-dialog/confirm-dialog.component';
import { MatSpanishPaginator } from '../../common/MatSpanishPaginator';
import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterLink,
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: MatSpanishPaginator }
  ]
})
export class PersonListComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Person>;
  displayedColumns: string[] = ['documentType', 'documentNumber', 'firstName', 'lastName', 'actions'];
  totalElements = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  readonly dialog = inject(MatDialog);

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

  remove(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: '¿Estás seguro de que deseas eliminar esta persona?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personService.deleteById(id).subscribe(() => {
          this.loadPersons();
        });
      }
    });
  }
}
