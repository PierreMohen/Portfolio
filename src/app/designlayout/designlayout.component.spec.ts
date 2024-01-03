import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignlayoutComponent } from './designlayout.component';

describe('DesignlayoutComponent', () => {
  let component: DesignlayoutComponent;
  let fixture: ComponentFixture<DesignlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
