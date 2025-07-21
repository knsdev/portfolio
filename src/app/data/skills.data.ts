import { ProjectId } from '../models/project.model';
import { ISkill, SkillLevel } from '../models/skill.model';

export const SKILLS: ISkill[] = [
  {
    name: 'HTML, CSS',
    level: SkillLevel.Advanced,
    infoList: ['Studied at CodeFactory'],
    projectIds: [ProjectId.FoodBlog, ProjectId.WeeklyPlanner, ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'JavaScript',
    level: SkillLevel.Intermediate,
    infoList: ['Studied at CodeFactory'],
    projectIds: [ProjectId.WeeklyPlanner],
  },
  {
    name: 'TypeScript',
    level: SkillLevel.Intermediate,
    infoList: ['Studied at CodeFactory'],
    projectIds: [ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'Angular',
    level: SkillLevel.Intermediate,
    infoList: ['Studied at CodeFactory'],
    projectIds: [ProjectId.OnlineStoreFrontend, ProjectId.Portfolio],
  },
  {
    name: 'React',
    level: SkillLevel.Beginner,
    infoList: ['Self-taught through online tutorial series'],
    projectIds: [],
  },
  {
    name: 'Bootstrap',
    level: SkillLevel.Intermediate,
    infoList: ['Studied at CodeFactory'],
    projectIds: [ProjectId.OnlineStoreFrontend],
  },
  {
    name: 'C/C++',
    level: SkillLevel.Advanced,
    infoList: ['2 years of professional experience in C/C++', 'Studied at Games Academy'],
    projectIds: [ProjectId.Iolite],
  },
  {
    name: 'C#/.NET',
    level: SkillLevel.Advanced,
    infoList: ['5 years of professional experience using C#/.NET with the Unity game engine', 'Studied at Games Academy'],
    projectIds: [],
  },
  {
    name: 'ASP.NET',
    level: SkillLevel.Beginner,
    infoList: ['Used during a school internship', 'No recent experience'],
    projectIds: [],
  },
  {
    name: 'SQL (MySQL)',
    level: SkillLevel.Intermediate,
    infoList: ['Studied at CodeFactory', 'First learned in school'],
    projectIds: [],
  },
  {
    name: 'PHP',
    level: SkillLevel.Intermediate,
    infoList: ['Studied at CodeFactory'],
    projectIds: [],
  },
  {
    name: 'Symfony',
    level: SkillLevel.Intermediate,
    infoList: ['Studied at CodeFactory'],
    projectIds: [],
  },
  {
    name: 'AJAX',
    level: SkillLevel.Intermediate,
    infoList: ['Studied at CodeFactory'],
    projectIds: [],
  },
  {
    name: 'Java',
    level: SkillLevel.Beginner,
    infoList: ['Learned as first object-oriented programming language in school', 'No recent experience'],
    projectIds: [],
  },
  {
    name: 'Ruby',
    level: SkillLevel.Beginner,
    infoList: ['Used for 3 months at KAIKO to develop internal tools'],
    projectIds: [],
  },
  {
    name: 'Git',
    level: SkillLevel.Advanced,
    infoList: ['Used for version control in most projects'],
    projectIds: [],
  },
];
