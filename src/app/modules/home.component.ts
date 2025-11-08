import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  dataEducation = [
    { name: 'High School', local: 'Centro Educacional La Salle', year: '2018', image: 'icon-high-school' },
    { name: 'Computer Science', local: 'Universidade Paulista', year: '2024', image: 'icon-university' },
  ];

  dataExperience = [
    { name: 'Trainee Software Development Analyst', local: 'FIT - Institute Of Technology', yearStart: '2023', yearEnd: 'Present', image: 'icon-fit' },
    { name: 'Software Development Analyst Intern', local: 'FIT - Institute Of Technology', yearStart: '2022', yearEnd: '2023', image: 'icon-fit' },
    { name: 'Machine Operator', local: 'Transire LTDA', yearStart: '2020', yearEnd: '2022', image: 'icon-transire' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
