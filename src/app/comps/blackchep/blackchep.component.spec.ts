import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackchepComponent } from './blackchep.component';

describe('BlackchepComponent', () => {
  let component: BlackchepComponent;
  let fixture: ComponentFixture<BlackchepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackchepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackchepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
