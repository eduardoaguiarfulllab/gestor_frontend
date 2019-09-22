import { Component, OnInit } from '@angular/core';
import { faCoffee, faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-projects',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  projetos: any;
  faCoffee = faCoffee;
  faPencilAlt = faPencilAlt;
  faEye = faEye;

  constructor(private router: Router) {
    this.projetos = [
      { id: '1e05679e-6146-4939-a817-4c94f89bf674', codigo: 1, nome: 'Tevec', dataInicio: '05/01/2019', autor: 'Eduardo Aguiar' },
      { id: 'c935feec-16d1-45b8-a50b-269aaca134c2', codigo: 2, nome: 'Danone', dataInicio: '05/01/2019', autor: 'Eduardo Aguiar' }
    ];
   }

  ngOnInit() {
  }

  public gotoNew(url) {
    this.router.navigate([url], {}).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}
