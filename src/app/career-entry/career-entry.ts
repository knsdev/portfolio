import { Component, Input } from '@angular/core';
import { ICareerEntry } from '../models/career-entry.model';

@Component({
  selector: 'app-career-entry',
  imports: [],
  templateUrl: './career-entry.html',
  styleUrl: './career-entry.css',
})
export class CareerEntry {
  @Input() entry!: ICareerEntry;
}
