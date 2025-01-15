import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Gymkhana English Medium School',
      course: 'SSC',
      duration: '2016',
      score: '64%',
    },
    {
      institute: "B. T.Patil & Son's Polytechnic",
      course: 'Electronic And Communication Engineering',
      duration: '2016-2019',
      score: '54%',
    },
    {
      institute: 'College of Computer Science',
      course: 'BSc Computer Science',
      duration: '2022-2024',
      score: '8.72 GPA',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
