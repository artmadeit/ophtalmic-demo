import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ContactLenses } from '../ContactLenses';
import { VisualAcuity } from '../VisualAcuity';
import { AnteriorPole } from '../AnteriorPole';
import { PosteriorPole } from '../PosteriorPole';

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

  dataSourceVAcuity = new MatTableDataSource<VisualAcuity>([
    {
      fieldItem: 'OD',
      vAcuitySC: '',
      vAcuityCC: '',
      vAcuityOP: '',
    },
    {
      fieldItem: 'OI',
      vAcuitySC: '',
      vAcuityCC: '',
      vAcuityOP: '',
    },
  ]);
  displayedColumnsVAcuity = [
    'fieldItem',
    'vAcuitySC',
    'vAcuityCC',
    'vAcuityOP',
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
      fieldItemPPole: 'Macula',
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
}
