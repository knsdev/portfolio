import { ICareerEntry } from '../models/career-entry.model';

export const WORK_POSITIONS: ICareerEntry[] = [
  {
    title: 'Game Programmer (Startup)',
    companyName: 'BARS STUDIOS GmbH',
    companyUrl: 'https://www.barsstudios.com/',
    productUrls: [
      'https://play.google.com/store/apps/details?id=com.barsstudios.craftheim&hl=en',
      'https://play.google.com/store/apps/details?id=com.barsstudios.swordplay&hl=en',
      'https://play.google.com/store/apps/details?hl=en&id=com.barsstudios.fallbreak&hl=en',
    ],
    location: 'Vienna, Austria',
    startDate: '10/2019',
    endDate: '08/2024',
    technologies: ['C#', 'Unity game engine'],
    descriptionList: [
      'Software development in C# using the Unity game engine',
      'Mobile games (Android, iOS), PC games (Windows)',
      'Self employment: Participation in a new company with the same partners (01/01/2024 –08/20/2024)',
    ],
  },
  {
    title: 'Junior Programmer',
    companyName: 'KAIKO GmbH',
    location: 'Frankfurt am Main, Germany',
    companyUrl: 'https://kaikogames.com/',
    productUrls: [
      'https://store.steampowered.com/app/667720/Red_Faction_Guerrilla_ReMarstered/',
      'https://kingdomsofamalur.thqnordic.com/',
    ],
    startDate: '07/2017',
    endDate: '09/2019',
    technologies: ['C++', 'Ruby', 'Console SDKs (Playstation, Xbox, Nintendo Switch)', 'Steam API (PC)'],
    descriptionList: [
      'Cross platform development in C++',
      'Refactoring and optimization of legacy game code for current consoles and PC',
      'Architecture and implementation of a cross-platform network interface for multiplayer functionality',
      'Tools for converting data in C++ and Ruby',
    ],
  },
];

export const EDUCATION_ENTRIES: ICareerEntry[] = [
  {
    title: '',
    companyName: '',
    location: '',
    companyUrl: '',
    productUrls: [],
    startDate: '',
    endDate: '',
    technologies: [],
    descriptionList: [],
  },
];
