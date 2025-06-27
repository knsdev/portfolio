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
    languages: ['C++', 'glsl'],
  },
];
