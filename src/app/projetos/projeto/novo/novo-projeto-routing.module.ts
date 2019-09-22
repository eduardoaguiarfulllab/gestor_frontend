import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoProjetoComponent } from './novo-projeto.component';
import { ProjetoNovoDetalhesComponent } from './projeto-novo-detalhes/projeto-novo-detalhes.component';
import { ProjetoNovoDescricaoComponent } from './projeto-novo-descricao/projeto-novo-descricao.component';
import { ProjetoNovoAtoresComponent } from './projeto-novo-atores/projeto-novo-atores.component';

const routes: Routes = [
  {
    path: '', component: NovoProjetoComponent, children: [
      {
        path: 'detalhes', component: ProjetoNovoDetalhesComponent
      },
      {
        path: 'descricao', component: ProjetoNovoDescricaoComponent
      },
      {
        path: 'atores', component: ProjetoNovoAtoresComponent
      },
      {
        path: '', redirectTo: 'detalhes', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovoProjetoRoutingModule { }
