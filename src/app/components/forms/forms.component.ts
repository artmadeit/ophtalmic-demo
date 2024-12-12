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
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  personForm: FormGroup;

  identifyDocuments: IdentifyDocument[] = [
    { value: 'id', viewValue: 'DNI' },
    { value: 'passport', viewValue: 'PASAPORTE' },
  ];

  constructor(private fb: FormBuilder) {
    this.personForm = fb.group({
      name: '',
      lastName: '',
      age: '',
      job: '',
      phone: [''],
      idCard: '',
      email: '',
      address: '',
    });
  }
}
