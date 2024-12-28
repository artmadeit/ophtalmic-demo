import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ContactLenses } from '../ContactLenses';

@Component({
  selector: 'app-interview',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.scss',
})
export class InterviewComponent {
  dataSource = new MatTableDataSource<ContactLenses>([
    {
      fieldName: 'Poder',
      cLensesOD: '',
      cLensesOI: '',
    },
    {
      fieldName: 'Curva Base',
      cLensesOD: '',
      cLensesOI: '',
    },
    {
      fieldName: 'Diámetro',
      cLensesOD: '',
      cLensesOI: '',
    },
  ]);
  displayedColumns = ['fieldName', 'cLensesOD', 'cLensesOI'];
}
