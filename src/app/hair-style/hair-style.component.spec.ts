import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairStyleComponent } from './hair-style.component';

describe('HairStyleComponent', () => {
  let component: HairStyleComponent;
  let fixture: ComponentFixture<HairStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
