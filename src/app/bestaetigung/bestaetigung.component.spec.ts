import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestaetigungComponent } from './bestaetigung.component';

describe('BestaetigungComponent', () => {
  let component: BestaetigungComponent;
  let fixture: ComponentFixture<BestaetigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestaetigungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestaetigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
