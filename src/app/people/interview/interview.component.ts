import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EyesDynamicFields } from '../ContactLenses';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Person } from '../Person';
import { PersonService } from '../person.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-interview',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.scss',
})
export class InterviewComponent implements OnInit {
  interviewForm: FormGroup;

  specialistList: Person[] = [];

  constructor(private fb: FormBuilder, private personService: PersonService) {
    this.interviewForm = fb.group({
      anamnesis: [''],
      date:'',
      treatment: fb.group({
        lensometria: fb.group({
          od: '',
          oi: '',
          add: '',
        }),
        refraccion: fb.group({
          lejos: this.eyes(fb),
          av: this.eyes(fb),
          add: '',
          dip: '',
        }),
        lentesContacto: fb.group({
          poder: this.eyes(fb),
          curvaBase: this.eyes(fb),
          diametro: this.eyes(fb),
        }),
      }),

      exam: fb.group({
        agudezaVisual: fb.group({
          sc: this.eyes(fb),
          cc: this.eyes(fb),
          precisionOcular: this.eyes(fb),
        }),
        poloAnterior: fb.group({
          parpados: this.eyes(fb),
          conjuntiva: this.eyes(fb),
          cornea: this.eyes(fb),
          iris: this.eyes(fb),
          pupila: this.eyes(fb),
          camaraAnterior: this.eyes(fb),
          cristalino: this.eyes(fb),
        }),
        poloPosterior: fb.group({
          vitreo: this.eyes(fb),
          nervioOptico: this.eyes(fb),
          macula: this.eyes(fb),
          retinaPeriferica: this.eyes(fb),
        }),
        motilidadOcular: fb.group({
          kappa: this.eyes(fb),
          hirschberg: this.eyes(fb),
          coverTest: this.eyes(fb),
          ppc: this.eyes(fb),
        }),
        queratrometria: fb.group({
          k1: this.eyes(fb),
          k2: this.eyes(fb),
        }),
      }),
      diagnostic: '',
      specialist: [''], 
    });
  }

  getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
  }

  ngOnInit(): void {
    this.interviewForm
      .get('specialist')
      ?.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((value) => {
          const searchText =
            typeof value === 'string' ? value : this.getFullName(value);
          return this.personService.findAll(searchText, { isSpecialist: true });
        })
      )
      .subscribe((data) => {
        this.specialistList = data.content;
      });
  }

  displayFn(specialist: Person) {
    return specialist ? this.getFullName(specialist) : '';
  }

  dataSource = new MatTableDataSource<EyesDynamicFields>([
    {
      label: 'Poder',
      fieldName: 'poder',
      od: '',
      oi: '',
    },
    {
      label: 'Curva Base',
      fieldName: 'curvaBase',
      od: '',
      oi: '',
    },
    {
      label: 'Diámetro',
      fieldName: 'diametro',
      od: '',
      oi: '',
    },
  ]);
  displayedColumns = ['label', 'od', 'oi'];

  dataSourceVAcuity = new MatTableDataSource<any>([
    { fieldName: 'od', label: 'OD' },
    { fieldName: 'oi', label: 'OI' },
  ]);
  displayedColumnsVAcuity = ['eye', 'sc', 'cc', 'precisionOcular'];

  dataSourceAPole = new MatTableDataSource<EyesDynamicFields>([
    {
      label: 'Parpados',
      fieldName: 'parpados',
      od: '',
      oi: '',
    },
    {
      label: 'Conjuntiva',
      fieldName: 'conjuntiva',
      od: '',
      oi: '',
    },
    {
      label: 'Cornea',
      fieldName: 'cornea',
      od: '',
      oi: '',
    },
    {
      label: 'Iris',
      fieldName: 'iris',
      od: '',
      oi: '',
    },
    {
      label: 'Pupila',
      fieldName: 'pupila',
      od: '',
      oi: '',
    },
    {
      label: 'Cámara anterior',
      fieldName: 'camaraAnterior',
      od: '',
      oi: '',
    },
    {
      label: 'Cristalino',
      fieldName: 'cristalino',
      od: '',
      oi: '',
    },
  ]);

  dataSourcePPole = new MatTableDataSource<EyesDynamicFields>([
    {
      label: 'Vítreo',
      fieldName: 'vitreo',
      od: '',
      oi: '',
    },
    {
      label: 'Nervio óptico',
      fieldName: 'nervioOptico',
      od: '',
      oi: '',
    },
    {
      label: 'Mácula',
      fieldName: 'macula',
      od: '',
      oi: '',
    },
    {
      label: 'Retina periférica',
      fieldName: 'retinaPeriferica',
      od: '',
      oi: '',
    },
  ]);

  dataSourceOM = new MatTableDataSource<EyesDynamicFields>([
    {
      label: 'Kappa',
      fieldName: 'kappa',
      od: '',
      oi: '',
    },
    {
      label: 'Hirschberg',
      fieldName: 'hirschberg',
      od: '',
      oi: '',
    },
    {
      label: 'Cover test',
      fieldName: 'coverTest',
      od: '',
      oi: '',
    },
    {
      label: 'PPC',
      fieldName: 'ppc',
      od: '',
      oi: '',
    },
  ]);

  dataSourceK = new MatTableDataSource<EyesDynamicFields>([
    {
      label: 'K1',
      fieldName: 'k1',
      od: '',
      oi: '',
    },
    {
      label: 'K2',
      fieldName: 'k2',
      od: '',
      oi: '',
    },
  ]);

  private eyes(fb: FormBuilder) {
    return fb.group({
      od: [''],
      oi: [''],
    });
  }

  onSubmit() {
    console.log(this.interviewForm.value);
  }
}
