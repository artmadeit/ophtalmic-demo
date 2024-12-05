import { Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
];
