import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoProjetoComponent } from './projeto/novo/novo-projeto.component';
import { ProjetosComponent } from './projetos.component';

const routes: Routes = [
  {
    path: '', component: ProjetosComponent //, children: [
      // {
      //   path: 'projeto-novo', loadChildren: () => import('./projeto/novo/novo-projeto.modules').then(m => m.NovoProjetoModule)
      // },
      // {
      //   path: 'projeto-editar', loadChildren: () => import('./projeto/novo/novo-projeto.modules').then(m => m.NovoProjetoModule)
      //}
    //]
  }, {
    path: 'projeto-novo', component: NovoProjetoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
