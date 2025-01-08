import { Component, inject, model, OnInit } from '@angular/core';
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
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';

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
    MatRadioModule,
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
export class PersonFormComponent implements OnInit {
  personForm: FormGroup;
  dataSource = new MatTableDataSource<Interview>([]);
  displayedColumns = ['interviewNumber', 'interviewDate'];
  isEditing = false;
  personId: number | null = null;
  snackBar = inject(MatSnackBar);

  documentTypes: DocumentType[] = [
    { value: 'DNI', text: 'DNI' },
    { value: 'PASSPORT', text: 'PASAPORTE' },
    { value: 'FOREIGNER_CARD', text: 'CARNET DE EXTRANJERIA' },
  ];

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEditing = true;
      this.personId = parseInt(id);
      this.loadPerson();
    }
  }

  private loadPerson() {
    if (this.personId) {
      this.personService.findById(this.personId).subscribe((person) => {
        this.personForm.patchValue(person);
      });
    }
  }

  readonly labelPosition = model<'no' | 'yes'>('yes');

  get age(): number | null {
    const birthdate = this.personForm.get('birthDate')?.value;
    if (!birthdate) {
      return null;
    }

    const ageInMill = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageInMill);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  onSubmit() {
    if (this.isEditing && this.personId) {
      this.personService
        .edit(this.personId, this.personForm.value)
        .subscribe(() => {
          this.snackBar.open('Persona actualizada correctamente');
        });
    } else {
      this.personService.register(this.personForm.value).subscribe((person) => {
        this.snackBar.open('Persona registrada correctamente');
        this.router.navigate(['/personas', person.id]);
      });
    }
  }
}
