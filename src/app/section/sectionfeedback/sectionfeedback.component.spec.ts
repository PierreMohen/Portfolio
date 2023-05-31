import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionfeedbackComponent } from './sectionfeedback.component';

describe('HiremeComponent', () => {
  let component: SectionfeedbackComponent;
  let fixture: ComponentFixture<SectionfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
