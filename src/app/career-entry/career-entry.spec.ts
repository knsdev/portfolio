import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerEntry } from './career-entry';

describe('CareerEntry', () => {
  let component: CareerEntry;
  let fixture: ComponentFixture<CareerEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
