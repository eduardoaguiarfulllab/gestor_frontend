import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProjetosComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ProjetosComponent]
})
export class ProjetosModule {}
