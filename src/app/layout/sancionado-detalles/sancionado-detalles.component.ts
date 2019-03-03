import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SancionadosService } from 'src/app/shared/services/sancionados.service';
import { CategoriasService } from 'src/app/shared/services/categorias.service';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { environment } from '../../../environments/environment';


var urlSolapin = "http://directorio.uci.cu/sites/all/modules/custom/directorio_de_personas/display_foto.php?id=";

@Component({
  selector: 'app-sancionado-detalles',
  templateUrl: './sancionado-detalles.component.html',
  styleUrls: ['./sancionado-detalles.component.scss'],
  animations: [routerTransition()]
})
export class SancionadoDetallesComponent implements OnInit {
  sancionado: any;
  categorias: {};
  foto: string;
  nombreSancionado: string;
  indisciplinas: {};
  urlPrint = environment.apiUrl + '/imprimir_ficha_sancionado/'; //url del servicio del API

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sancionadoService: SancionadosService,
    private myServicioCategorias: CategoriasService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.sancionadoService.getSancionadoById(id).subscribe(data => {
      this.sancionado = data[0]; //lleno los sancionados desde el servicio
      this.foto = urlSolapin + this.sancionado.solapin;
      this.nombreSancionado = this.sancionado.nombre_completo;
      this.indisciplinas = this.sancionado.indisciplinas;
    });

    this.myServicioCategorias.getCategorias().subscribe(data => {
      this.categorias = data; //lleno los categorias desde el servicio
    });
  }

  getCategoria(id: number): string {
    return this.categorias[id - 1]['nombre'];
  }

  VerIndisciplina(idIndisciplina: number): void {
    this.router.navigate(['/indisciplina-detalles', { id: idIndisciplina }]);
  }

  ExportarFicha(id:number):void{
    var url = this.urlPrint + id;
    window.location.href = url;
  }
}
