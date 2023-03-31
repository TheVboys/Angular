import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-standalone-component',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.scss']
})
export class StandaloneComponentComponent {

  items : any[] = ["value1", "value2"]
}
