import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoCasosDeUsoComponent } from './projeto-novo-casos-de-uso.component';

describe('ProjetoNovoCasosDeUsoComponent', () => {
  let component: ProjetoNovoCasosDeUsoComponent;
  let fixture: ComponentFixture<ProjetoNovoCasosDeUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoCasosDeUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoCasosDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
