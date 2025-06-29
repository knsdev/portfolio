import { ProjectId } from '../models/project.model';
import { ISkill, SkillLevel } from '../models/skill.model';

export const SKILLS: ISkill[] = [
  {
    name: 'HTML, CSS',
    level: SkillLevel.Advanced,
    infoList: ['Learned at CodeFactory'],
    projectIds: [ProjectId.FoodBlog, ProjectId.WeeklyPlanner, ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'JavaScript',
    level: SkillLevel.Intermediate,
    infoList: ['Learned at CodeFactory'],
    projectIds: [ProjectId.WeeklyPlanner],
  },
  {
    name: 'TypeScript',
    level: SkillLevel.Intermediate,
    infoList: ['Learned at CodeFactory'],
    projectIds: [ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'Angular',
    level: SkillLevel.Intermediate,
    infoList: ['Learned at CodeFactory'],
    projectIds: [ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'C/C++',
    level: SkillLevel.Advanced,
    infoList: ['Learned at Games Academy', '2 years of work experience'],
    projectIds: [ProjectId.Iolite],
  },
];
