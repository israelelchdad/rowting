import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocoladComponent } from './chocolad.component';

describe('ChocoladComponent', () => {
  let component: ChocoladComponent;
  let fixture: ComponentFixture<ChocoladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocoladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocoladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
