import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SancionadosComponent } from './sancionados.component';

describe('SancionadosComponent', () => {
  let component: SancionadosComponent;
  let fixture: ComponentFixture<SancionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SancionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SancionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
