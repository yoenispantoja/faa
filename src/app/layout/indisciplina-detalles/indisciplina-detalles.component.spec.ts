import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisciplinaDetallesComponent } from './indisciplina-detalles.component';

describe('IndisciplinaDetallesComponent', () => {
  let component: IndisciplinaDetallesComponent;
  let fixture: ComponentFixture<IndisciplinaDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndisciplinaDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndisciplinaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
