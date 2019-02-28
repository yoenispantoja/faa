import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SancionadoDetallesComponent } from './sancionado-detalles.component';

describe('SancionadoDetallesComponent', () => {
  let component: SancionadoDetallesComponent;
  let fixture: ComponentFixture<SancionadoDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SancionadoDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SancionadoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
