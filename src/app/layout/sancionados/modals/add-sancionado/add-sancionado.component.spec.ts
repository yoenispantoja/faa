import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSancionadoComponent } from './add-sancionado.component';

describe('AddSancionadoComponent', () => {
  let component: AddSancionadoComponent;
  let fixture: ComponentFixture<AddSancionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSancionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSancionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
