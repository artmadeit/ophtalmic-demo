import { Routes } from '@angular/router';
import { PersonFormComponent } from './people/person-form/person-form.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import { InterviewComponent } from './people/interview/interview.component';

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
    path: 'personas/new/interview',
    component: InterviewComponent,
  },
  {
    path: 'personas',
    component: PersonListComponent,
  },
];
