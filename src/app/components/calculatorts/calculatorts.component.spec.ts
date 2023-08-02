import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatortsComponent } from './calculatorts.component';

describe('CalculatortsComponent', () => {
  let component: CalculatortsComponent;
  let fixture: ComponentFixture<CalculatortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
