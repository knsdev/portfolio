import { IProject, ProjectId } from '../models/project.model';

export function getProjectById(id: ProjectId): IProject | undefined {
  return PROJECTS.find((x) => x.id == id);
}

export const PROJECTS: IProject[] = [
  {
    id: ProjectId.AnimalAdoption,
    name: 'Animal Adoption',
    imageFilename: 'animal_adoption.png',
    gitHubLink: 'https://github.com/knsdev/animal_adoption',
    appLink: 'https://kim.codefactory.live/animal_adoption',
    description:
      'A web app built with PHP, MySQL and Bootstrap where logged-in users can adopt animals. An administrator can create, update, delete animals.',
    features: ['Create, Read, Update, and Delete (CRUD) operations', 'Login System', 'Admin Dashboard'],
    technologies: ['PHP', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    id: ProjectId.BigLibrary,
    name: 'Big Library',
    imageFilename: 'big_library.jpg',
    gitHubLink: 'https://github.com/knsdev/big_library',
    appLink: 'https://kim.codefactory.live/big_library',
    description: 'A web app built with PHP and MySQL that lets users manage media (Books, DVDs, CDs).',
    features: [
      'List of media with cover images and details',
      'Add, edit, delete, and view details of media',
      'Search and filter through the library',
      'Simple, clean interface using Bootstrap',
      'Delete confirm modal',
    ],
    technologies: ['PHP', 'HTML', 'CSS', 'JS', 'Bootstrap'],
  },
  {
    id: ProjectId.Portfolio,
    name: 'This Portfolio Website',
    imageFilename: 'portfolio-website.png',
    gitHubLink: 'https://github.com/knsdev/portfolio',
    appLink: '',
    description: '',
    features: [],
    technologies: ['HTML', 'CSS', 'TS', 'Angular'],
  },
  {
    id: ProjectId.OnlineStoreFrontend,
    name: 'Online Store Frontend',
    imageFilename: 'online-store-frontend.jpg',
    gitHubLink: 'https://github.com/knsdev/online-store-frontend',
    appLink: 'https://kim.codefactory.live/online-store-frontend',
    description: 'This project showcases the frontend design only, with no backend functionality.',
    features: ['Angular app with routing between pages', 'Add items to a shopping cart', 'Checkout form', 'Responsive design'],
    technologies: ['HTML', 'CSS', 'TS', 'Angular'],
  },
  {
    id: ProjectId.WeeklyPlanner,
    name: 'Weekly Planner',
    imageFilename: 'weekly-planner.jpg',
    gitHubLink: 'https://github.com/knsdev/weekly-planner',
    appLink: '',
    description:
      'A simple to-do list application built with vanilla JavaScript, focusing on core functionality and DOM manipulation.',
    features: ['Responsive design'],
    technologies: ['HTML', 'CSS', 'JS'],
  },
  {
    id: ProjectId.FoodBlog,
    name: 'Food blog',
    imageFilename: 'food-blog-about.jpg',
    gitHubLink: 'https://github.com/knsdev/food-blog',
    appLink: 'https://kim.codefactory.live/food-blog',
    description:
      'My first exam project at CodeFactory, built using only HTML and CSS. It’s a responsive multi-page food blog showcasing core web layout and styling skills.',
    features: [
      'Responsive design with media queries (mobile, tablet)',
      'Custom fonts',
      'Navigation bar with site and category links',
      'Recipe of the Month and About pages',
      'Grid-based layout for food items',
      'Footer that stays at the bottom of the page',
    ],
    technologies: ['HTML', 'CSS'],
  },
  {
    id: ProjectId.Iolite,
    name: 'iolite',
    imageFilename: 'terrain_02.png',
    gitHubLink: 'https://github.com/knsdev/iolite',
    appLink: 'https://github.com/knsdev/iolite/releases/tag/v0.1.0',
    description:
      'A simple and lightweight 3D game engine written in C++ with OpenGL. It includes a basic terrain editor, allowing you to create and modify 3D landscapes.',
    features: [
      '3D rendering with OpenGL',
      'Terrain editor',
      'Flying Camera',
      'Loading model files (obj), textures (png, jpg), shaders (glsl)',
      'Modular and extendable design',
    ],
    technologies: ['C++', 'GLSL'],
  },
];
