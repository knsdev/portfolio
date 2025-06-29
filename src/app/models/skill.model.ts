import { ProjectId } from './project.model';

export enum SkillLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export interface ISkill {
  name: string;
  level: SkillLevel;
  infoList: string[];
  projects: ProjectId[];
}
