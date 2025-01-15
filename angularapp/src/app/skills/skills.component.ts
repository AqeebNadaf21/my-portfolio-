import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Beginner',
      rating: 40,
    },
    {
      name: 'Node.js, Bootstrap, MongoDB',
      level: 'Beginner',
      rating: 60,
    },
    {
      name: 'JavaScript, Git/Git Hub',
      level: 'Beginner',
      rating: 70,
    },
    {
      name: 'Html, Css, Javascript',
      level: 'Intermediate',
      rating: 75,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
