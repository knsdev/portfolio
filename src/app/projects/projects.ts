import { Component } from '@angular/core';
import { IProject } from '../models/project.model';
import { PROJECTS } from '../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projectList: IProject[] = PROJECTS;
}
