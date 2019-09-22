import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditarProjetoComponent } from './projeto/editar/editar-projeto.component';
import { RouterModule } from '@angular/router';
import { ProjetosRoutingModule } from './projetos-routing.modules';
import { NovoProjetoModule } from './projeto/novo/novo-projeto.modules';
import { NovoProjetoComponent } from './projeto/novo/novo-projeto.component';
import { NovoProjetoRoutingModule } from './projeto/novo/novo-projeto-routing.module';

@NgModule({
  declarations: [
    ProjetosComponent,
    EditarProjetoComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ProjetosRoutingModule,
    NovoProjetoRoutingModule,
    NovoProjetoModule
  ]
})
export class ProjetosModule {}
