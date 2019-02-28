import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandanteDetalleComponent } from './demandante-detalle.component';

describe('DemandanteDetalleComponent', () => {
  let component: DemandanteDetalleComponent;
  let fixture: ComponentFixture<DemandanteDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandanteDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandanteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
