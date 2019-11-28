import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitechepComponent } from './whitechep.component';

describe('WhitechepComponent', () => {
  let component: WhitechepComponent;
  let fixture: ComponentFixture<WhitechepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitechepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitechepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
