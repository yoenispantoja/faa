import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SancionadosService } from 'src/app/shared/services/sancionados.service';
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
  foto:string;

  constructor(private route: ActivatedRoute,
    private router: Router, private sancionadoService: SancionadosService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.sancionadoService.getSancionadoById(id).subscribe(data => {
      this.sancionado = data; //lleno los sancionados desde el servicio
      this.foto=urlSolapin+this.sancionado.solapin; 
      console.log(this.sancionado);
    });
    
    
  }

}
