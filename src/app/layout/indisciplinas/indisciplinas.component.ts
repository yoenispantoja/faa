import { routerTransition } from '../../router.animations';
import { Component, OnInit, Renderer, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
      
import { IndisciplinasService } from '../../shared/services/indisciplinas.service';
import { TableFactoryService } from '../../shared/services/table-factory.service';
import { DataTableDirective } from 'angular-datatables';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';


var urlSolapin = "http://directorio.uci.cu/sites/all/modules/custom/directorio_de_personas/display_foto.php?id=";

@Component({
  selector: 'app-indisciplinas',
  templateUrl: './indisciplinas.component.html',
  styleUrls: ['./indisciplinas.component.scss'],
  animations: [routerTransition()]
})
export class IndisciplinasComponent implements AfterViewInit, OnDestroy, OnInit {
  //atributos
  @ViewChild('questionSwal') private questionSwal: SwalComponent;
  @ViewChild('successSwal') private successSwal: SwalComponent;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  indisciplinas: {};

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
      data: 'categoria.nombre'
    },
    {
      data: function(row, type, set) {
        return row.sancionados.length;
      },
      className: 'text-center'
    },
    {
      data: 'fecha',
      render: function(data) {
        var date = new Date(data);
        var month = date.getMonth() + 1;
        return date.getDate() + '/' + month + '/' + date.getFullYear();
      }
    },

    {
      data: 'clasificacion',
      className: 'text-center'
    },
    {
      data: 'demandante.nombre_completo'
    },
    {
      defaultContent:
        "<button type='button' id='btnVerDetalles' class='btn btn-sm btn-info btn-detail' title='Ver detalles'><i class='fa fa-search-plus vermas'></i></button> <button type='button' id='btnEditar' class='btn btn-sm btn-warning btn-detail' title='Editar'><i class='fa fa-edit vermas'></i></button><button type='button' id='btnEliminar' class='btn btn-sm btn-danger btn-detail' title='Eliminar'><i class='fa fa-trash vermas'></i></button>"
    }
  ];

  url = environment.apiUrl + '/indisciplinas'; //url del servicio del API
  titulo = 'Listado de indisciplinas'; //titulo del documento que se exportará
  orientacion = 'Portrait'; //orientación de la página del documento que se exportará
  closeResult: string;

  name: string = 'Yoenis Celedonio';

  //métodos
  constructor(
    private myServicio: IndisciplinasService,
    private myTabla: TableFactoryService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.indisciplinas = this.myServicio.getIndisciplinas().subscribe(data => {
      this.indisciplinas = data; //lleno los indisciplinas desde el servicio
    });

    this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);

    //Evento click del botón Ver Detalles
    $(document).on('click', '#btnVerDetalles', $event => {
      let row = this.myTabla.getRowSelected();
      //Redirigir a otra ruta pasándole el id
      this.ruta.navigate(['indisciplina-detalles', { id: row.id }]);
    });

    //Evento click del botón Editar
    $(document).on('click', '#btnEditar', $event => {
      let row = this.myTabla.getRowSelected();
      //console.log(row.id);
      //Abriendo la ventana modal para edición
      //this.openEditIndisciplina(row);
    });

    //Evento click del botón Eliminar
    $(document).on('click', '#btnEliminar', $event => {
      let row = this.myTabla.getRowSelected();
      this.questionSwal.show();
    });
  }

  eliminarRegistro(): void {
    let row = this.myTabla.getRowSelected();
    this.myServicio.deleteIndisciplina(row.id).subscribe(
      data => {
        if (data) {
          this.successSwal.show();
          this.rerender();
        }
      },
      error => {
        console.log(error);
      }
    );
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
