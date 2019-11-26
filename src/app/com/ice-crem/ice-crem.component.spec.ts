import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCremComponent } from './ice-crem.component';

describe('IceCremComponent', () => {
  let component: IceCremComponent;
  let fixture: ComponentFixture<IceCremComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCremComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
