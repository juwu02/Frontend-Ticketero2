import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldemaskeComponent } from './anmeldemaske.component';

describe('AnmeldemaskeComponent', () => {
  let component: AnmeldemaskeComponent;
  let fixture: ComponentFixture<AnmeldemaskeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnmeldemaskeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnmeldemaskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
