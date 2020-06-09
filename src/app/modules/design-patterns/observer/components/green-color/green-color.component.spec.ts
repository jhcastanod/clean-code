import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenColorComponent } from './green-color.component';

describe('GreenColorComponent', () => {
  let component: GreenColorComponent;
  let fixture: ComponentFixture<GreenColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
