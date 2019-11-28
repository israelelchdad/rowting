import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlucheepComponent } from './blucheep.component';

describe('BlucheepComponent', () => {
  let component: BlucheepComponent;
  let fixture: ComponentFixture<BlucheepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlucheepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlucheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
