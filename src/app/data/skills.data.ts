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
    infoList: ['Learned through an online tutorial series'],
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
    infoList: ['2 years of professional experience', 'Studied at Games Academy'],
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
    infoList: ['Used during a school internship'],
    projectIds: [],
  },
  {
    name: 'SQL (MySQL)',
    level: SkillLevel.Intermediate,
    infoList: ['Learned in school'],
    projectIds: [],
  },
  {
    name: 'PHP (Symfony)',
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
    infoList: ["I learned Java in school as my first object-oriented programming language, but I haven't used it since."],
    projectIds: [],
  },
  {
    name: 'Ruby',
    level: SkillLevel.Beginner,
    infoList: ['Used for 3 months at KAIKO to develop small internal tools.'],
    projectIds: [],
  },
  {
    name: 'Git',
    level: SkillLevel.Advanced,
    infoList: ['Regularly used for version control in nearly all projects'],
    projectIds: [],
  },
];
