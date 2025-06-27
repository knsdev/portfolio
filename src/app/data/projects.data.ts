import { IProject } from '../models/project.model';

export const PROJECTS: IProject[] = [
  {
    name: 'iolite',
    imageFilename: 'terrain_02.png',
    gitHubLink: 'https://github.com/knsdev/iolite',
    description:
      'iolite is a simple and lightweight 3D game engine written in C++ with OpenGL. It includes a basic terrain editor, allowing you to create and modify 3D landscapes.',
    features: [
      '3D rendering with OpenGL',
      'Terrain editor',
      'Flying Camera',
      'Loading model files (obj), textures (png, jpg), shaders (glsl)',
      'Modular and extendable design',
    ],
    languages: ['C++', 'GLSL'],
  },
  {
    name: 'Food blog',
    imageFilename: 'food-blog-about.jpg',
    gitHubLink: 'https://github.com/knsdev/food-blog',
    description: 'First Exam at CodeFactory',
    features: ['Responsive design'],
    languages: ['HTML', 'CSS'],
  },
  {
    name: 'Weekly Planner',
    imageFilename: 'weekly-planner.jpg',
    gitHubLink: 'https://github.com/knsdev/weekly-planner',
    description: 'Second Exam at CodeFactory',
    features: ['Responsive design'],
    languages: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'Online Store Frontend',
    imageFilename: 'online-store-frontend.jpg',
    gitHubLink: 'https://github.com/knsdev/weekly-planner',
    description: 'Third Exam at CodeFactory',
    features: [
      'Angular app with routing between pages',
      'Add items to a shopping cart',
      'Checkout form for completing purchases',
      'Responsive design',
    ],
    languages: ['HTML', 'CSS', 'TS'],
  },
  {
    name: 'This Portfolio Website',
    imageFilename: 'portfolio-website.jpg',
    gitHubLink: 'https://github.com/knsdev/portfolio',
    description: '',
    features: ['Angular app', 'Responsive design'],
    languages: ['HTML', 'CSS', 'TS'],
  },
];
