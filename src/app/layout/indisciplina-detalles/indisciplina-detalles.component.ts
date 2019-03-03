import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { IndisciplinasService } from 'src/app/shared/services/indisciplinas.service';
import { CategoriasService } from 'src/app/shared/services/categorias.service';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-indisciplina-detalles',
  templateUrl: './indisciplina-detalles.component.html',
  styleUrls: ['./indisciplina-detalles.component.scss'],
  animations: [routerTransition()]
})
export class IndisciplinaDetallesComponent implements OnInit {
  indisciplina: any;
  sancionados: {};
  urlSolapin = "http://directorio.uci.cu/sites/all/modules/custom/directorio_de_personas/display_foto.php?id=";

  urlPrint = environment.apiUrl + '/imprimir_ficha_indisciplina/'; //url del servicio del API

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private indisciplinaService: IndisciplinasService,
    private myServicioCategorias: CategoriasService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.indisciplinaService.getIndisciplinaById(id).subscribe(data => {
      this.indisciplina = data[0]; //lleno los indisciplinas desde el servicio
      this.sancionados = this.indisciplina.sancionados;
    });
  }


  VerSancionado(idSancionado: number): void {
    this.router.navigate(['/sancionado-detalles', { id: idSancionado }]);
  }

  ExportarFicha(id: number): void {
    var url = this.urlPrint + id;
    window.location.href = url;
  }
}
