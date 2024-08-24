import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponentComponent } from './number-input-component.component';

describe('NumberInputComponentComponent', () => {
  let component: NumberInputComponentComponent;
  let fixture: ComponentFixture<NumberInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberInputComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
