import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoAtoresComponent } from './projeto-novo-atores.component';

describe('ProjetoNovoAtoresComponent', () => {
  let component: ProjetoNovoAtoresComponent;
  let fixture: ComponentFixture<ProjetoNovoAtoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoAtoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoAtoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
