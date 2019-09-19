import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NovoProjetoComponent } from './projeto/novo/novo-projeto.component';
import { EditarProjetoComponent } from './projeto/editar/editar-projeto.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoNovoDetalhesComponent } from './projeto/novo/projeto-novo-detalhes/projeto-novo-detalhes.component';
import { ProjetoNovoDescricaoComponent } from './projeto/novo/projeto-novo-descricao/projeto-novo-descricao.component';
import { ProjetoNovoRequsitosComponent } from './projeto/novo/projeto-novo-requsitos/projeto-novo-requsitos.component';
import { ProjetoNovoAtoresComponent } from './projeto/novo/projeto-novo-atores/projeto-novo-atores.component';
import { ProjetoNovoDiagramasComponent } from './projeto/novo/projeto-novo-diagramas/projeto-novo-diagramas.component';
import { ProjetoNovoCasosDeUsoComponent } from './projeto/novo/projeto-novo-casos-de-uso/projeto-novo-casos-de-uso.component';
import { ProjetoNovoArquiteturaComponent } from './projeto/novo/projeto-novo-arquitetura/projeto-novo-arquitetura.component';
import { ProjetoNovoInterfaceGraficaComponent } from './projeto/novo/projeto-novo-interface-grafica/projeto-novo-interface-grafica.component';
import { ProjetoNovoMapaDeNavegacaoComponent } from './projeto/novo/projeto-novo-mapa-de-navegacao/projeto-novo-mapa-de-navegacao.component';

@NgModule({
  declarations: [ProjetosComponent, NovoProjetoComponent, EditarProjetoComponent, ProjetoNovoDetalhesComponent, ProjetoNovoDescricaoComponent, ProjetoNovoRequsitosComponent, ProjetoNovoAtoresComponent, ProjetoNovoDiagramasComponent, ProjetoNovoCasosDeUsoComponent, ProjetoNovoArquiteturaComponent, ProjetoNovoInterfaceGraficaComponent, ProjetoNovoMapaDeNavegacaoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [ProjetosComponent, NovoProjetoComponent, EditarProjetoComponent]
})
export class ProjetosModule {}
