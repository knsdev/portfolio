import { ProjectId } from '../models/project.model';
import { ISkill, SkillLevel } from '../models/skill.model';

export const SKILLS: ISkill[] = [
  {
    name: 'Angular',
    level: SkillLevel.Intermediate,
    infoList: ['Learned at CodeFactory'],
    projectIds: [ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'TypeScript',
    level: SkillLevel.Intermediate,
    infoList: ['Learned at CodeFactory'],
    projectIds: [ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'JavaScript',
    level: SkillLevel.Intermediate,
    infoList: ['Learned at CodeFactory'],
    projectIds: [ProjectId.WeeklyPlanner],
  },
  {
    name: 'C/C++',
    level: SkillLevel.Advanced,
    infoList: ['Learned at Games Academy', '2 years of work experience'],
    projectIds: [ProjectId.Iolite],
  },
];
