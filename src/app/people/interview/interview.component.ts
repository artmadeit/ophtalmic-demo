import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EyesDynamicFields } from '../ContactLenses';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { VisualAcuity } from '../VisualAcuity';
import { AnteriorPole } from '../AnteriorPole';
import { PosteriorPole } from '../PosteriorPole';
import { OcularMotility } from '../OcularMotility';
import { Keratrometry } from '../Keratrometry';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface UserType {
  value: string;
  text: string;
}

@Component({
  selector: 'app-interview',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.scss',
})
export class InterviewComponent {
  interviewForm: FormGroup;

  userTypes: UserType[] = [
    { value: 'especialista', text: 'ESPECIALISTA' },
    { value: 'paciente', text: 'PACIENTE' },
  ];

  constructor(private fb: FormBuilder) {
    this.interviewForm = fb.group({
      anamnesis: ['', Validators.required],
      lensometryOD: ['', Validators.required],
      lensometryOI: ['', Validators.required],
      lensometryAdd: ['', Validators.required],
      refractionLOD: ['', Validators.required],
      refractionLOI: ['', Validators.required],
      refractionAOD: ['', Validators.required],
      refractionAOI: ['', Validators.required],
      refractionCAdd: ['', Validators.required],
      refractionCDip: ['', Validators.required],

      // lentes de contacto
      poder: this.eyes(fb),
      curvaBase: this.eyes(fb),
      diametro: this.eyes(fb),

      // agudeza visual
      sc: this.eyes(fb),
      cc: this.eyes(fb),
      presicionOcular: this.eyes(fb),

      // queratometria
      k1: this.eyes(fb),
      k2: this.eyes(fb),

      //Polo anterior
      parpados: this.eyes(fb),
      conjuntiva: this.eyes(fb),
      cornea: this.eyes(fb),
      iris: this.eyes(fb),
      pupila: this.eyes(fb),
      camaraAnterior: this.eyes(fb),
      cristalino: this.eyes(fb),

      //Polo posterior
      vitreo: this.eyes(fb),
      nervioOptico: this.eyes(fb),
      macula: this.eyes(fb),
      retinaPeriferica: this.eyes(fb),

      //Motilidad ocular
      kappa: this.eyes(fb),
      hirschberg: this.eyes(fb),
      coverTest: this.eyes(fb),
      ppc: this.eyes(fb),

      userType: ['', Validators.required],
    });
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
  displayedColumnsVAcuity = ['eye', 'sc', 'cc', 'presicionOcular'];

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
  displayedColumnsAPole = ['label', 'od', 'oi'];

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
  displayedColumnsPPole = ['label', 'od', 'oi'];

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
  displayedColumnsOMotility = ['label', 'od', 'oi'];

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
