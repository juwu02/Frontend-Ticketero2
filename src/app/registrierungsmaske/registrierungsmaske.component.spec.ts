import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrierungsmaskeComponent } from './registrierungsmaske.component';

describe('RegistrierungsmaskeComponent', () => {
  let component: RegistrierungsmaskeComponent;
  let fixture: ComponentFixture<RegistrierungsmaskeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrierungsmaskeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrierungsmaskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
