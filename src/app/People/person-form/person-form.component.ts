import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Interview } from '../Interview';

interface IdentifyDocument {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-forms',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss',
})
export class PersonFormComponent {
  personForm: FormGroup;
  dataSource = new MatTableDataSource<Interview>([]);
  displayedColumns = ['interviewNumber', 'interviewDate'];

  identifyDocuments: IdentifyDocument[] = [
    { value: 'id', viewValue: 'DNI' },
    { value: 'passport', viewValue: 'PASAPORTE' },
    { value: 'foreigner card', viewValue: 'CARNET DE EXTRANJERIA' },
  ];

  constructor(private fb: FormBuilder) {
    this.personForm = fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: '',
      job: ['', Validators.required],
      phone: ['', Validators.required],
      idCard: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      address: ['', Validators.required],
    });
  }

  get age(): number | null {
    const birthdate = this.personForm.get('birthdate')?.value;
    if (!birthdate) {
      return null;
    }

    const ageInMill = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageInMill);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
