import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSancionadoComponent } from './edit-sancionado.component';

describe('AddSancionadoComponent', () => {
  let component: EditSancionadoComponent;
  let fixture: ComponentFixture<EditSancionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSancionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSancionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
