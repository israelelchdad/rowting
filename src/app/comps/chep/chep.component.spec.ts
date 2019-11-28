import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChepComponent } from './chep.component';

describe('ChepComponent', () => {
  let component: ChepComponent;
  let fixture: ComponentFixture<ChepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
