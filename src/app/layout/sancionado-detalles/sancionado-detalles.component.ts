import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SancionadosService } from 'src/app/shared/services/sancionados.service';
import { CategoriasService } from 'src/app/shared/services/categorias.service';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

var urlSolapin = "http://directorio.uci.cu/sites/all/modules/custom/directorio_de_personas/display_foto.php?id=";

@Component({
  selector: 'app-sancionado-detalles',
  templateUrl: './sancionado-detalles.component.html',
  styleUrls: ['./sancionado-detalles.component.scss'],
  animations: [routerTransition()]
})
export class SancionadoDetallesComponent implements OnInit {

  sancionado: any;
  categoría: any;
  foto:string;
  nombreSancionado:string;
  indisciplinas:{};

  constructor(private route: ActivatedRoute,
    private router: Router, private sancionadoService: SancionadosService, private categoriaService: CategoriasService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.sancionadoService.getSancionadoById(id).subscribe(data => {
      this.sancionado = data[0]; //lleno los sancionados desde el servicio
      this.foto=urlSolapin+this.sancionado.solapin;  
      this.nombreSancionado = this.sancionado.nombre_completo;
      this.indisciplinas= this.sancionado.indisciplinas;
    });
 
    
  }

  getCategoria (id: any): any{
    let nombreCategoria:string;
    this.categoriaService.getCategoriaById(id).subscribe(data=>{
      nombreCategoria= data['nombre'];
      console.log(data);
    });
    return nombreCategoria;
    
  }

}
