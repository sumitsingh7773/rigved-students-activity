import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDemoComponent } from './employee-demo.component';

describe('EmployeeDemoComponent', () => {
  let component: EmployeeDemoComponent;
  let fixture: ComponentFixture<EmployeeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
