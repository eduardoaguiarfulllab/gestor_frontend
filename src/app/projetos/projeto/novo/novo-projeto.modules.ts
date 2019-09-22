import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoProjetoRoutingModule } from './novo-projeto-routing.module';
import { ProjetoNovoRequsitosComponent } from './projeto-novo-requsitos/projeto-novo-requsitos.component';
import { ProjetoNovoMapaDeNavegacaoComponent } from './projeto-novo-mapa-de-navegacao/projeto-novo-mapa-de-navegacao.component';
import { ProjetoNovoInterfaceGraficaComponent } from './projeto-novo-interface-grafica/projeto-novo-interface-grafica.component';
import { ProjetoNovoDiagramasComponent } from './projeto-novo-diagramas/projeto-novo-diagramas.component';
import { ProjetoNovoDetalhesComponent } from './projeto-novo-detalhes/projeto-novo-detalhes.component';
import { ProjetoNovoDescricaoComponent } from './projeto-novo-descricao/projeto-novo-descricao.component';
import { ProjetoNovoCasosDeUsoComponent } from './projeto-novo-casos-de-uso/projeto-novo-casos-de-uso.component';
import { ProjetoNovoAtoresComponent } from './projeto-novo-atores/projeto-novo-atores.component';
import { ProjetoNovoArquiteturaComponent } from './projeto-novo-arquitetura/projeto-novo-arquitetura.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NovoProjetoComponent } from './novo-projeto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NovoProjetoComponent,
    ProjetoNovoRequsitosComponent,
    ProjetoNovoMapaDeNavegacaoComponent,
    ProjetoNovoInterfaceGraficaComponent,
    ProjetoNovoDiagramasComponent,
    ProjetoNovoDetalhesComponent,
    ProjetoNovoDescricaoComponent,
    ProjetoNovoCasosDeUsoComponent,
    ProjetoNovoAtoresComponent,
    ProjetoNovoArquiteturaComponent
  ],
  imports: [
    CommonModule,
    NovoProjetoRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class NovoProjetoModule { }
