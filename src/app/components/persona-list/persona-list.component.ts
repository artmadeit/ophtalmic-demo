import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Persona } from '../Persona';

@Component({
  selector: 'app-persona-list',
  imports: [MatTableModule, MatIconModule, MatTooltipModule, MatButtonModule, RouterLink],
  templateUrl: './persona-list.component.html',
  styleUrl: './persona-list.component.scss'
})
export class PersonaListComponent {
  dataSource = new MatTableDataSource<Persona>([]);
  displayedColumns: string[] = ['documentType', 'documentNumber', 'firstName', 'lastName', 'actions'];

  constructor(private personaService: PersonaService) {
    this.personaService.findAll(0, 10).subscribe(data => {
      this.dataSource.data = data.content;
    });
  }
}
