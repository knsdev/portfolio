import { Component } from '@angular/core';
import { EDUCATION_ENTRIES, WORK_POSITIONS } from '../data/career.data';
import { ICareerEntry } from '../models/career-entry.model';

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  workPositions: ICareerEntry[] = WORK_POSITIONS;
  educationEntries: ICareerEntry[] = EDUCATION_ENTRIES;
}
