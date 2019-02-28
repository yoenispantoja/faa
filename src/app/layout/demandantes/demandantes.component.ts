import { routerTransition } from '../../router.animations';
import { Component, OnInit, Renderer, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
      
import { DemandantesService } from '../../shared/services/demandantes.service';
import { TableFactoryService } from '../../shared/services/table-factory.service';
import { DataTableDirective } from 'angular-datatables';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';


var urlSolapin = "http://directorio.uci.cu/sites/all/modules/custom/directorio_de_personas/display_foto.php?id=";

@Component({
  selector: 'app-demandantes',
  templateUrl: './demandantes.component.html',
  styleUrls: ['./demandantes.component.scss'],
  animations: [routerTransition()]
})
export class DemandantesComponent implements AfterViewInit, OnDestroy, OnInit {
  //atributos
  @ViewChild('questionSwal') private questionSwal: SwalComponent;
  @ViewChild('successSwal') private successSwal: SwalComponent;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  demandantes: {};

  dtOptions: {}; //opciones para el dataTable
  dtTrigger: any = new Subject();

  row: any; //para la fila seleccionada

  //**** Parámetros del dataTable */
  columnas = [
    {
      //columnas del dataTable
      data: 'id'
    },
    {
      data: function(row, type, set) {
        return '<img class="person-photo" width="45px" src="' +
          urlSolapin +
          row.solapin +
          '"><div id="hidden_' + row.id + '" class="person-original-photo-link photo-estudiante photo-hidden"><img width="200" height="200" src="' +
          urlSolapin +
          row.solapin +
          '"/></div>';
      }
    },
    {
      data: 'nombre_completo'
    },
    {
      data: 'solapin'
    },
    {
      data: 'cargo'
    },    

    {
      defaultContent:
        "<button type='button' id='btnEditar' class='btn btn-sm btn-warning btn-detail' title='Editar'><i class='fa fa-edit vermas'></i></button> <button type='button' id='btnEliminar' class='btn btn-sm btn-danger btn-detail' title='Eliminar'><i class='fa fa-trash vermas'></i></button>"
    }
  ];

  url = environment.apiUrl + '/demandantes'; //url del servicio del API
  titulo = 'Listado de demandantes'; //titulo del documento que se exportará
  orientacion = 'Portrait'; //orientación de la página del documento que se exportará
  closeResult: string;

  name:string= "Yoenis Celedonio";

  //métodos
  constructor(
    private myServicio: DemandantesService,
    private myTabla: TableFactoryService

  ) {}

  ngOnInit() {
    this.demandantes = this.myServicio.getDemandantes().subscribe(data => {
      this.demandantes = data; //lleno los demandantes desde el servicio
    });

    this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);

    //Evento click del botón Editar
    $(document).on('click', '#btnEditar', $event => {
      let row = this.myTabla.getRowSelected();
      //console.log(row.id);
      //Abriendo la ventana modal para edición
      //this.openEditDemandante(row);
    });

    //Evento click del botón Eliminar
    $(document).on('click', '#btnEliminar', $event => {
      let row = this.myTabla.getRowSelected();
      this.questionSwal.show();
    });

    //Evento click de la foto pequeña    
    $(document).on('click', '.person-photo', $event => {
      let row = this.myTabla.getRowSelected();
      //cerrando todas las abiertas
      let divs = document.getElementsByClassName('photo-hidden');
      for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute("style", "display = 'none'");
      }
      document.getElementById('hidden_' + row.id).style.display = 'block';
    });

    //Evento click de la foto grande    
    $(document).on('click', '.photo-hidden', $event => {
      let row = this.myTabla.getRowSelected();
      document.getElementById('hidden_' + row.id).style.display = 'none';
    });
  }

  eliminarRegistro(): void {
    let row = this.myTabla.getRowSelected();
    this.myServicio.deleteDemandante(row.id).subscribe(
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
