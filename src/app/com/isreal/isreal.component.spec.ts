import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsrealComponent } from './isreal.component';

describe('IsrealComponent', () => {
  let component: IsrealComponent;
  let fixture: ComponentFixture<IsrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
