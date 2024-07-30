import { Component } from '@angular/core';
import { ApiService } from '../worldmapAPI.service';

@Component({
  selector: 'app-worldbank',
  standalone: true,
  imports: [],
  templateUrl: './worldbank.component.html',
  styleUrl: './worldbank.component.css'
})
export class WorldbankComponent {

  info: any = {};

  constructor(private api: ApiService) { }

  setCountryData(event: any) {
    this.api.setCountryData(event.target.id).subscribe(
      (data: any) => {
        console.log(data);
        this.info = { ...data };
      }
    );
  }
}