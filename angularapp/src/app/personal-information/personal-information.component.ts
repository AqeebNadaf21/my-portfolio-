import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Aqeeb Nadaf'],
    ['DOB', '21/06/2000'],
    ['Work Exp', 'Fresher'],
    ['Education', 'BSc Computer Science'],

  ];

  aboutMe: string[] = [
    'I am a fresher in the field of Front-End Web Development.',
    'I have a strong passion for learning and growing as a developer.',
    'I am excited to be a part of this team and contribute my skills and knowledge to the company.',

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
