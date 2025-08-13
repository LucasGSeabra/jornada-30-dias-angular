import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personagem } from './personagem';

describe('Personagem', () => {
  let component: Personagem;
  let fixture: ComponentFixture<Personagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
