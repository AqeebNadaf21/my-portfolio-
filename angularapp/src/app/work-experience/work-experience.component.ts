import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Site Engineer',
      company: 'Avenue TurnKey Solution Pvt Ltd',
      duration: 'Oct 2019-Apr 2020',
      description: [
        'Worked as site engineer ',
        'Coordinated with the project team to ensure timely completion of the project',
        'Ensured that all the project activities were carried out in accordance with the project plan',
      ],
    },
    {
      role: 'Quality Line Inspector',
      company: 'Filtrum Autocomp Pvt Ltd',
      duration: 'Jan 2021-Dec 2021',
      description: [
        'Worked as Line Inspector',
        'Ensured that all the products manufactured were of high quality',
        'Conducted regular quality audits to ensure that the products met the required standards',
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
