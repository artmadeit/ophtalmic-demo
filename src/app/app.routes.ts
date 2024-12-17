import { Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';

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
    component: PersonaListComponent,
  }
];
