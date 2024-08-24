import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResultComponentComponent } from './game-result-component.component';

describe('GameResultComponentComponent', () => {
  let component: GameResultComponentComponent;
  let fixture: ComponentFixture<GameResultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameResultComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
