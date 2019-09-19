import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';


const routes: Routes = [
  {
    path: '',
    component: ProjetosComponent
    // children: [
    //   {
    //     path: 'projeto',
    //     loadChildren: () => import('src/app/projetos/projetos.module').then(m => m.ProjetosModule)
    //   }
    // ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
