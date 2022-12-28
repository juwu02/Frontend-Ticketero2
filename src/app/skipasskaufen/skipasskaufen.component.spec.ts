import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipasskaufenComponent } from './skipasskaufen.component';

describe('SkipasskaufenComponent', () => {
  let component: SkipasskaufenComponent;
  let fixture: ComponentFixture<SkipasskaufenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipasskaufenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipasskaufenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
