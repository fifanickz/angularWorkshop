import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcoriesComponent } from './calcories.component';

describe('CalcoriesComponent', () => {
  let component: CalcoriesComponent;
  let fixture: ComponentFixture<CalcoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
