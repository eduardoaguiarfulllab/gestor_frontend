import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { NovoProjetoComponent } from './projetos/projeto/novo/novo-projeto.component';
import { EditarProjetoComponent } from './projetos/projeto/editar/editar-projeto.component';
import { ProjetoNovoDetalhesComponent } from './projetos/projeto/novo/projeto-novo-detalhes/projeto-novo-detalhes.component';
import { ProjetoNovoDescricaoComponent } from './projetos/projeto/novo/projeto-novo-descricao/projeto-novo-descricao.component';


const routes: Routes = [
  { path: '', redirectTo: 'projetos', pathMatch: 'full' },
  {
    path: 'projetos', component: ProjetosComponent
  },
  {
    path: 'projeto-novo', loadChildren: () =>
    import('./projetos/projeto/novo/novo-projeto.modules').then(m => m.NovoProjetoModule)
  }
  // {
  //   path: 'projeto-novo-detalhes', component: ProjetoNovoDetalhesComponent
  // },
  // {
  //   path: 'projeto-novo-descricao', component: ProjetoNovoDescricaoComponent
  // }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
