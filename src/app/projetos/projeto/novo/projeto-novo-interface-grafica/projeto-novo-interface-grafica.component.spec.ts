import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoInterfaceGraficaComponent } from './projeto-novo-interface-grafica.component';

describe('ProjetoNovoInterfaceGraficaComponent', () => {
  let component: ProjetoNovoInterfaceGraficaComponent;
  let fixture: ComponentFixture<ProjetoNovoInterfaceGraficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoInterfaceGraficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoInterfaceGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
