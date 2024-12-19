import { Routes } from '@angular/router';
import { FormsComponent } from './People/forms/forms.component';
import { PersonListComponent } from './People/person-list/person-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/personas',
    pathMatch: 'full',
  },
  {
    path: 'personas/new',
    component: FormsComponent,
  },
  {
    path: 'personas',
    component: PersonListComponent,
  }
];
