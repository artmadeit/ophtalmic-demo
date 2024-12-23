import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-interview',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.scss',
})
export class InterviewComponent {}
