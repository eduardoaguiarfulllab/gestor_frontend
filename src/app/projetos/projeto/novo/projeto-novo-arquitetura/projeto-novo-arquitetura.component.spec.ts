import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoArquiteturaComponent } from './projeto-novo-arquitetura.component';

describe('ProjetoNovoArquiteturaComponent', () => {
  let component: ProjetoNovoArquiteturaComponent;
  let fixture: ComponentFixture<ProjetoNovoArquiteturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoArquiteturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoArquiteturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
