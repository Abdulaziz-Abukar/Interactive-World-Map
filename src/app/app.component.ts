import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'D280 Project';
}
