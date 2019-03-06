import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedidasComponent } from './add-medidas.component';

describe('AddMedidasComponent', () => {
  let component: AddMedidasComponent;
  let fixture: ComponentFixture<AddMedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
