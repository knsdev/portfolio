import { Component } from '@angular/core';
import { ISkill, SkillLevel } from '../models/skill.model';
import { SKILLS } from '../data/skills.data';
import { getProjectById } from '../data/projects.data';
import { ProjectId } from '../models/project.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgClass],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: ISkill[] = SKILLS;

  SkillLevel = SkillLevel;

  getProjectById(id: ProjectId) {
    return getProjectById(id);
  }
}
