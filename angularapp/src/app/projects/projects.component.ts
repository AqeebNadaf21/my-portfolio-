import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Google Cloud',
      technologies: 'Cloud Computing, Angular, Angular Material',
      description: [
        'Worked as team lead to develop apps that are powered by Cloud',
        'Developed multiple apps using Angular and Angular Material',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ],
    },
    {
      title: 'Google Toolbar',
      technologies: 'HTML, CSS, JS',
      description: [
        'Worked on Google Toolbar, to include the google search engine in Internet Explorer',
        'Developed the toolbar using HTML, CSS, and JavaScript',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ],
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
