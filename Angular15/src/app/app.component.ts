import { Component } from '@angular/core';
import { StandaloneComponentComponent } from './standalone-component/standalone-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[StandaloneComponentComponent],
})
export class AppComponent {
  title = 'Angular15';
}
