import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndisciplinaComponent } from './add-indisciplina.component';

describe('AddIndisciplinaComponent', () => {
  let component: AddIndisciplinaComponent;
  let fixture: ComponentFixture<AddIndisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIndisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
