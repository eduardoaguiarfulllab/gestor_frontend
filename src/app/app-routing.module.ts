import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { NovoProjetoComponent } from './projetos/projeto/novo/novo-projeto.component';
import { EditarProjetoComponent } from './projetos/projeto/editar/editar-projeto.component';


const routes: Routes = [
  { path: '', redirectTo: 'projetos', pathMatch: 'full' },
  {
    path: 'projetos',
    component: ProjetosComponent
    // children: [
    //   {
    //     path: 'novo',
    //     loadChildren: () => import('src/app/projetos/projetos.module').then(m => m.ProjetosModule)
    //   },
    //   {
    //     path: 'editar',
    //     loadChildren: () => import('src/app/projetos/projetos.module').then(m => m.ProjetosModule)
    //   }
    // ]
  },
  {
    path: 'projeto-novo', loadChildren: () => import('./projetos/projeto/novo/novo-projeto.modules').then(m => m.NovoProjetoModule) },
  {
    path: 'projeto-editar',
    component: EditarProjetoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
