import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisciplinasComponent } from './indisciplinas.component';

describe('IndisciplinasComponent', () => {
  let component: IndisciplinasComponent;
  let fixture: ComponentFixture<IndisciplinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndisciplinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
