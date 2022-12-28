import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountverwaltungComponent } from './accountverwaltung.component';

describe('AccountverwaltungComponent', () => {
  let component: AccountverwaltungComponent;
  let fixture: ComponentFixture<AccountverwaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountverwaltungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
