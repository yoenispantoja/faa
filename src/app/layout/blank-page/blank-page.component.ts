import { Demandante } from './../../shared/models/demandantes';
import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { ArchwizardModule } from 'ng2-archwizard';
import { DatosColumna } from 'src/app/shared/models/datosColumna';
import { environment } from 'src/environments/environment';
import { ScdTableComponent } from 'src/app/shared/components/scd-table/scd-table.component';
import { DemandantesService } from 'src/app/shared/services/demandantes.service';


@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
  tituloTabla: string;
  urlTablaBlank: string;
  portrait: string;
  tieneOperaciones: boolean;
  nombreColumnas: string[] = [];
  datosColumna: DatosColumna[] = [];

  // Prueba con el servicio
  demandantes: Demandante[];

  @ViewChild('tablaBlank') private tablaBlank: ScdTableComponent;

  constructor(private demandanteService: DemandantesService) {}

  ngOnInit() {
    this.tituloTabla = 'Tabla de Yoenis';
    this.urlTablaBlank = environment.apiUrl + '/demandantes';
    this.portrait = 'Portrait'; // para la orientación de la página
    this.tieneOperaciones = true;
    this.nombreColumnas = ['Solapin', 'Nombre', 'Cargo'];
    this.datosColumna = [
      {
        data: 'solapin',
        className: 'text-center'
      },
      {
        data: 'nombre_completo',
        className: 'text-center'
      },
      {
        data: 'cargo'
      }
    ];

    // Prueba con el servicio
    this.demandanteService.getDemandantes()
    .subscribe(
      result => {
        this.demandantes = result['data'],
        error => {
          console.log('Ha ocurrido un error: ' + error);
        };
      }
    );
  }

  verClick(evento: any) {
    console.log('Mostrado datos del elemento: ' + evento.id);
  }
  editClick(evento: any) {
    console.log('Editando el elemento: ' + evento.id);
  }

  eliminarClick(evento: any) {
    this.demandanteService.deleteDemandante(evento.id).subscribe(
      result=>{
        console.log('Eliminando el elemento: ' + evento.id);
      }

    );
  }

  finishFunction() {
    console.log('Say hello');
  }
}
