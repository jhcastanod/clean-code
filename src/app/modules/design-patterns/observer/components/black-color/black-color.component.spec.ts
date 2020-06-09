import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackColorComponent } from './black-color.component';

describe('BlackColorComponent', () => {
  let component: BlackColorComponent;
  let fixture: ComponentFixture<BlackColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
