import { Routes } from '@angular/router';
import { PersonFormComponent } from './People/person-form/person-form.component';
import { PersonListComponent } from './People/person-list/person-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/personas',
    pathMatch: 'full',
  },
  {
    path: 'personas/new',
    component: PersonFormComponent,
  },
  {
    path: 'personas',
    component: PersonListComponent,
  },
];
