import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemmeldenComponent } from './problemmelden.component';

describe('ProblemmeldenComponent', () => {
  let component: ProblemmeldenComponent;
  let fixture: ComponentFixture<ProblemmeldenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemmeldenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemmeldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
