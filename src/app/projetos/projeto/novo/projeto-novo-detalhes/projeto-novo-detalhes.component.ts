import { Component, OnInit, Input } from '@angular/core';
import { IProjetoDetalhes } from './model/projeto-novo-detalhes.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projeto-novo-detalhes',
  templateUrl: './projeto-novo-detalhes.component.html',
  styleUrls: ['./projeto-novo-detalhes.component.scss']
})
export class ProjetoNovoDetalhesComponent implements OnInit {

  @Input() detalhes: IProjetoDetalhes;

  constructor() { }

  ngOnInit() {
  }

}
