import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {pagesPerguntaComponent} from './components/pagesPergunta/pagesPergunta.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, pagesPerguntaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lucas';
}
