import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoNovoRequsitosComponent } from './projeto-novo-requsitos.component';

describe('ProjetoNovoRequsitosComponent', () => {
  let component: ProjetoNovoRequsitosComponent;
  let fixture: ComponentFixture<ProjetoNovoRequsitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoNovoRequsitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoNovoRequsitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
