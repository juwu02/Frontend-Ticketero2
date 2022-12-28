import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevorstehendeEventsComponent } from './bevorstehende-events.component';

describe('BevorstehendeEventsComponent', () => {
  let component: BevorstehendeEventsComponent;
  let fixture: ComponentFixture<BevorstehendeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevorstehendeEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BevorstehendeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
