import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoDetalhesComponent } from './projeto-novo-detalhes.component';

describe('ProjetoNovoDetalhesComponent', () => {
  let component: ProjetoNovoDetalhesComponent;
  let fixture: ComponentFixture<ProjetoNovoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
