import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoDescricaoComponent } from './projeto-novo-descricao.component';

describe('ProjetoNovoDescricaoComponent', () => {
  let component: ProjetoNovoDescricaoComponent;
  let fixture: ComponentFixture<ProjetoNovoDescricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoDescricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
