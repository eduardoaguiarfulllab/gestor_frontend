import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoMapaDeNavegacaoComponent } from './projeto-novo-mapa-de-navegacao.component';

describe('ProjetoNovoMapaDeNavegacaoComponent', () => {
  let component: ProjetoNovoMapaDeNavegacaoComponent;
  let fixture: ComponentFixture<ProjetoNovoMapaDeNavegacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoMapaDeNavegacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoMapaDeNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
