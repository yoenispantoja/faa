import { Component, OnInit, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { TableFactoryService } from '../../services/table-factory.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { DatosColumna } from '../../models/datosColumna';

@Component({
  selector: 'scd-table',
  templateUrl: './scd-table.component.html',
  styleUrls: ['./scd-table.component.scss']
})
export class ScdTableComponent implements OnInit, AfterViewInit {
  /**
   * url del API
   * @type {string}
   * @memberof ScdTableComponent
   */
  @Input() urlApi: string;

  /**
   *Orientación de la página para imprimir
   *
   * @type {string}
   * @memberof ScdTableComponent
   */
  @Input() orientacionPage: string;

  /**
   *Titulo de la tabla para su impresión   *
   * @type {string}
   * @memberof ScdTableComponent
   */
  @Input() titulo: string;

  /**
   *Arreglo de nombres de las columnas
   *
   * @type {string[]}
   * @memberof ScdTableComponent
   */
  @Input() nombreColumnas: string[];

  /**
   *Booleano para que se incorpore una columna para las operaciones
   *
   * @type {boolean}
   * @memberof ScdTableComponent
   */
  @Input() tieneOperaciones: boolean;

  /**
   * Datos que se enlazan con las columnas luego de la consulta
   *
   * @type {DatosColumna[]}
   * @memberof ScdTableComponent
   */
  @Input() datosColumnas: DatosColumna[] = [];

  /**
   *Evento que se emite al darle al botón de Editar
   *
   * @memberof ScdTableComponent
   */
  @Output() editClick = new EventEmitter<any>();

  /**
   * Evento que se emite al darle al boton ver
   *
   * @memberof ScdTableComponent
   */
  @Output() verClick = new EventEmitter<any>();

  /**
   * Evento que se emite al darle al boton eliminar
   *
   * @memberof ScdTableComponent
   */
  @Output() eliminarClick = new EventEmitter<any>();

  dtOptions: {}; // opciones para el dataTable
  dtTrigger: any = new Subject();

  // **** Parámetros del dataTable */

  constructor(private myTabla: TableFactoryService) {}

  ngOnInit() {
    if (this.tieneOperaciones) {
      this.datosColumnas.push({
        data: null,
        defaultContent:
          "<button type='button' id='btnVerDetalles' class='btn btn-sm btn-info btn-detail' title='Ver detalles'><i class='fa fa-search-plus vermas'></i></button> <button type='button' id='btnEditarElemento' class='btn btn-sm btn-warning btn-detail' title='Editar elemento'><i class='fa fa-edit vermas'></i></button> <button type='button' id='btnEliminarElemento' class='btn btn-sm btn-danger btn-detail' title='Eliminar'><i class='fa fa-trash vermas'></i></button>"
      });
    }
    this.dtOptions = this.myTabla.getDataTable(this.urlApi, this.datosColumnas, this.titulo, this.orientacionPage);
    // Evento click del botón <detalles>
    $(document).on('click', '#btnVerDetalles', $event => {
      this.verClick.emit(this.myTabla.getRowSelected());
    });

    // Evento click del botón <editar>
    $(document).on('click', '#btnEditarElemento', $event => {
      this.editClick.emit(this.myTabla.getRowSelected());
    });

    // Evento click del botón <eliminar>
    $(document).on('click', '#btnEliminarElemento', $event => {
      this.eliminarClick.emit(this.myTabla.getRowSelected());
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
}
