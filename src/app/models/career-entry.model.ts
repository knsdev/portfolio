export interface ICareerEntry {
  title: string;
  companyName: string;
  location: string;
  companyUrl: string;
  products: {
    name: string;
    url: string;
  }[];
  startDate: string;
  endDate: string;
  technologies: string[];
  descriptionList: string[];
}
