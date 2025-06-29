import { ISkill, SkillLevel } from '../models/skill.model';
import { getProjectById, ProjectId } from './projects.data';

export const SKILLS: ISkill[] = [
  {
    name: 'TypeScript, Angular',
    level: SkillLevel.Intermediate,
    infoList: ['Learned at CodeFactory'],
    projects: [ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'JavaScript',
    level: SkillLevel.Intermediate,
    infoList: ['Learned at CodeFactory'],
    projects: [ProjectId.WeeklyPlanner],
  },
  {
    name: 'C/C++',
    level: SkillLevel.Advanced,
    infoList: ['Learned at Games Academy', '2 years of work experience'],
    projects: [ProjectId.Iolite],
  },
];
