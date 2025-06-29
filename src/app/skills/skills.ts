import { Component } from '@angular/core';
import { ISkill } from '../models/skill.model';
import { SKILLS } from '../data/skills.data';
import { getProjectById } from '../data/projects.data';
import { ProjectId } from '../models/project.model';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: ISkill[] = SKILLS;

  getProjectById(id: ProjectId) {
    return getProjectById(id);
  }
}
