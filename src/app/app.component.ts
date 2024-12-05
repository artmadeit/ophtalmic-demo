import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsComponent } from "./components/forms/forms.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ophtalmic-center';
}
