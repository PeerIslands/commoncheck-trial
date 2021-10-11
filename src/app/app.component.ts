import { Component, OnInit } from '@angular/core';
import { ISurvey } from './models/survey.model';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const widget = document.querySelector('common-check-widget');
    const url = 'http://localhost:3000/api/commoncheck/verify';
    
    if (widget) {
      widget.setAttribute('data-backend-endpoint', url);
      widget.setAttribute('data-first-name', 'Jon');
      widget.setAttribute('data-last-name', 'Tan');
      widget.setAttribute('data-dob', '1990-01-01');
      widget.setAttribute('data-passport', 'Q345678');
      widget.setAttribute('data-nationality', 'SGP');
      widget.setAttribute('data-flight-number', 'SQ105');
      widget.setAttribute('data-flight-date', '2021-10-10');
    }
  }
}
