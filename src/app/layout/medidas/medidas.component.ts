import { routerTransition } from '../../router.animations';
import { Component, OnInit, Renderer, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
      
import { IndisciplinasService } from '../../shared/services/indisciplinas.service';
import { TableFactoryService } from '../../shared/services/table-factory.service';
import { DataTableDirective } from 'angular-datatables';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.scss'],
  animations: [routerTransition()]
})
export class MedidasComponent implements AfterViewInit, OnDestroy, OnInit {
  //atributos
  @ViewChild('questionSwal') private questionSwal: SwalComponent;
  @ViewChild('successSwal') private successSwal: SwalComponent;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  medidas: {};

  dtOptions: {}; //opciones para el dataTable
  dtTrigger: any = new Subject();

  row: any; //para la fila seleccionada

  //**** Parámetros del dataTable */
  columnas = [
    {
      //columnas del dataTable
      data: 'id',
      className: 'text-center'
    },
    {
      data: function(row, type, set) {
        return '<span style="white-space:normal">' + row.medida + '</span>';
      }
      //className:'text-center'
    },
    {
      data: function(row, type, set) {
        return (
          '<strong class="text-primary">Categoría: </strong>' +
          row.categoria.nombre +
          '.<strong class="text-danger"> Total de implicados: </strong>' +
          row.sancionados.length +
          '. <hr><strong class="text-success">Descripción: </strong>' +
          row.descripcion
        );
      }
    },
    {
      defaultContent:
        "<button type='button' id='btnVerIndisciplina' class='btn btn-sm btn-info btn-detail' title='Ver indisciplina'><i class='fa fa-search-plus vermas'></i></button> <button type='button' id='btnEditar' class='btn btn-sm btn-warning btn-detail' title='Editar medida'><i class='fa fa-edit vermas'></i></button>"
    }
  ];

  url = environment.apiUrl + '/medidas'; //url del servicio del API
  titulo = 'Listado de medidas'; //titulo del documento que se exportará
  orientacion = 'Portrait'; //orientación de la página del documento que se exportará
  closeResult: string;

  //métodos
  constructor(private myServicio: IndisciplinasService, private myTabla: TableFactoryService, private ruta: Router) {}

  ngOnInit() {
    this.medidas = this.myServicio.getIndisciplinasConMedida().subscribe(data => {
      this.medidas = data['data']; //lleno los demandantes desde el servicio
      console.log(this.medidas);
    });
    this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);

    //Evento click del botón VerIndisciplina
    $(document).on('click', '#btnVerIndisciplina', $event => {
      let row = this.myTabla.getRowSelected();
      this.ruta.navigate(['indisciplina-detalles', { id: row.id }]);
    });

    //Evento click del botón Editar
    $(document).on('click', '#btnVerIndisciplina', $event => {
      let row = this.myTabla.getRowSelected();
      
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
