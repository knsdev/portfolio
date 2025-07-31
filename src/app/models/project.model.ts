export enum ProjectId {
  None = -1,

  BigLibrary,
  Portfolio,
  OnlineStoreFrontend,
  WeeklyPlanner,
  FoodBlog,
  Iolite,

  Count,
}

export interface IProject {
  id: ProjectId;
  name: string;
  imageFilename: string;
  gitHubLink: string;
  appLink: string;
  description: string;
  features: string[];
  languages: string[];
}
