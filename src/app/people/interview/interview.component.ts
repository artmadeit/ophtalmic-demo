import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EyesDynamicFields } from '../ContactLenses';
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

@Component({
  selector: 'app-interview',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.scss',
})
export class InterviewComponent {
  interviewForm: FormGroup;

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

      // queratometria
      k1: this.eyes(fb),
      k2: this.eyes(fb),

      // agudeza visual
      sc: this.eyes(fb),
      cc: this.eyes(fb),
      presicionOcular: this.eyes(fb)
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
    { fieldName: 'od', label: "OD"}, 
    { fieldName: 'oi', label: "OI"} 
  ]);
  displayedColumnsVAcuity = [
    'eye',
    'sc',
    'cc',
    'presicionOcular',
  ];

  dataSourceAPole = new MatTableDataSource<AnteriorPole>([
    {
      fieldItemPole: 'Parpados',
      aPoleOD: '',
      aPoleOI: '',
    },
    {
      fieldItemPole: 'Conjuntiva',
      aPoleOD: '',
      aPoleOI: '',
    },
    {
      fieldItemPole: 'Cornea',
      aPoleOD: '',
      aPoleOI: '',
    },
    {
      fieldItemPole: 'Iris',
      aPoleOD: '',
      aPoleOI: '',
    },
    {
      fieldItemPole: 'Pupila',
      aPoleOD: '',
      aPoleOI: '',
    },
    {
      fieldItemPole: 'Cámara anterior',
      aPoleOD: '',
      aPoleOI: '',
    },
    {
      fieldItemPole: 'Cristalino',
      aPoleOD: '',
      aPoleOI: '',
    },
  ]);
  displayedColumnsAPole = ['fieldItemPole', 'aPoleOD', 'aPoleOI'];

  dataSourcePPole = new MatTableDataSource<PosteriorPole>([
    {
      fieldItemPPole: 'Vítreo',
      pPoleOD: '',
      pPoleOI: '',
    },
    {
      fieldItemPPole: 'Nervio óptico',
      pPoleOD: '',
      pPoleOI: '',
    },
    {
      fieldItemPPole: 'Mácula',
      pPoleOD: '',
      pPoleOI: '',
    },
    {
      fieldItemPPole: 'Retina periférica',
      pPoleOD: '',
      pPoleOI: '',
    },
  ]);
  displayedColumnsPPole = ['fieldItemPPole', 'pPoleOD', 'pPoleOI'];

  dataSourceOM = new MatTableDataSource<OcularMotility>([
    {
      fieldItemOM: 'Kappa',
      OcularMotilityOD: '',
      OcularMotilityOI: '',
    },
    {
      fieldItemOM: 'Hirschberg',
      OcularMotilityOD: '',
      OcularMotilityOI: '',
    },
    {
      fieldItemOM: 'CoverTest',
      OcularMotilityOD: '',
      OcularMotilityOI: '',
    },
    {
      fieldItemOM: 'PPC',
      OcularMotilityOD: '',
      OcularMotilityOI: '',
    },
  ]);
  displayedColumnsOMotility = [
    'fieldItemOM',
    'OcularMotilityOD',
    'OcularMotilityOI',
  ];

  dataSourceK = new MatTableDataSource<EyesDynamicFields>([
    {
      label: "K1",
      fieldName: 'k1',
      od: '',
      oi: '',
    },
    {
      label: "K2",
      fieldName: 'k2',
      od: '',
      oi: '',
    },
  ]);


  private eyes(fb: FormBuilder) {
    return fb.group({
      od: [''],
      oi: ['']
    });
  }

  onSubmit() {
    console.log(this.interviewForm.value)
  }
}
