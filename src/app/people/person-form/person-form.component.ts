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
import { Router, RouterLink } from '@angular/router';
import { PersonService } from '../person.service';

interface DocumentType {
  value: string;
  text: string;
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
    RouterLink,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss',
})
export class PersonFormComponent {
  personForm: FormGroup;
  dataSource = new MatTableDataSource<Interview>([]);
  displayedColumns = ['interviewNumber', 'interviewDate'];

  documentTypes: DocumentType[] = [
    { value: 'DNI', text: 'DNI' },
    { value: 'PASSPORT', text: 'PASAPORTE' },
    { value: 'FOREIGNER_CARD', text: 'CARNET DE EXTRANJERIA' },
  ];

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router
  ) {
    this.personForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      birthDate: '',
      job: [''],
      phoneNumber: [''],
      email: ['', [Validators.email]],
      address: [''],
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

  onSubmit() {
    this.personService.register(this.personForm.value).subscribe((person) => {
      alert('Persona registrada correctamente');
      this.router.navigate(['/personas']);
    });
  }
}
