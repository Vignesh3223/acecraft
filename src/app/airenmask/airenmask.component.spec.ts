import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirenmaskComponent } from './airenmask.component';

describe('AirenmaskComponent', () => {
  let component: AirenmaskComponent;
  let fixture: ComponentFixture<AirenmaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirenmaskComponent]
    });
    fixture = TestBed.createComponent(AirenmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
