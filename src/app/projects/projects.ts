import { Component } from '@angular/core';
import { IProject } from '../models/project.model';
import { ProjectId, PROJECTS } from '../data/projects.data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgClass],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projectList: IProject[] = PROJECTS;
  mouseHoverProjectId: ProjectId = ProjectId.None;

  onMouseEnter(i: ProjectId) {
    this.mouseHoverProjectId = i;
  }

  onMouseLeave() {
    this.mouseHoverProjectId = ProjectId.None;
  }
}
