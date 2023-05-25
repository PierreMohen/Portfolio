import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiremeComponent } from './hireme.component';

describe('HiremeComponent', () => {
  let component: HiremeComponent;
  let fixture: ComponentFixture<HiremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiremeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
