import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjetosModule } from './projetos/projetos.module';
import { NovoProjetoModule } from './projetos/projeto/novo/novo-projeto.modules';
import { NovoProjetoComponent } from './projetos/projeto/novo/novo-projeto.component';
import { NovoProjetoRoutingModule } from './projetos/projeto/novo/novo-projeto-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProjetosModule,
    NovoProjetoModule,
    NovoProjetoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
