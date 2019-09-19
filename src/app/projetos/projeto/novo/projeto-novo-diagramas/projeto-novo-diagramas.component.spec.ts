import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoDiagramasComponent } from './projeto-novo-diagramas.component';

describe('ProjetoNovoDiagramasComponent', () => {
  let component: ProjetoNovoDiagramasComponent;
  let fixture: ComponentFixture<ProjetoNovoDiagramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoDiagramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoDiagramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
