import { ProjectId } from '../data/projects.data';

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
