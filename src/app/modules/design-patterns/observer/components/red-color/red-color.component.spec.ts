import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedColorComponent } from './red-color.component';

describe('RedColorComponent', () => {
  let component: RedColorComponent;
  let fixture: ComponentFixture<RedColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
