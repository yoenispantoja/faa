import { routerTransition } from '../../router.animations';
import { Component, OnInit, Renderer, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';

import { SancionadosService } from '../../shared/services/sancionados.service';
import { TableFactoryService } from '../../shared/services/table-factory.service';
import { DataTableDirective } from 'angular-datatables';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

var urlSolapin = 'http://directorio.uci.cu/sites/all/modules/custom/directorio_de_personas/display_foto.php?id=';

@Component({
  selector: 'app-sancionados',
  templateUrl: './sancionados.component.html',
  styleUrls: ['./sancionados.component.scss'],
  animations: [routerTransition()]
})
export class SancionadosComponent implements AfterViewInit, OnDestroy, OnInit {
  //atributos
  @ViewChild('questionSwal') private questionSwal: SwalComponent;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;

  @ViewChild('modalSancionado') private modalSancionado: NgbModal;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  sancionados: {};

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
        return (
          '<img class="person-photo" width="45px" src="' +
          urlSolapin +
          row.solapin +
          '"><div id="hidden_' +
          row.id +
          '" class="person-original-photo-link photo-estudiante photo-hidden"><img width="200" height="200" src="' +
          urlSolapin +
          row.solapin +
          '"/></div>'
        );
      }
    },
    {
      data: 'nombre_completo'
    },
    {
      data: 'solapin',
      className: 'text-center'
    },
    {
      data: 'grupo',
      className: 'text-center'
    },
    {
      data: function(row, type, set) {
        return row.indisciplinas.length;
      },
      className: 'text-center'
    },

    {
      defaultContent:
        "<button type='button' id='btnDetalles' class='btn btn-sm btn-info btn-detail' title='Ver detalles'><i class='fa fa-search-plus vermas'></i></button> <button type='button' id='btnEditarSancionado' (click)='open(content)' class='btn btn-sm btn-warning btn-detail' title='Editar'><i class='fa fa-edit vermas'></i></button> <button type='button' id='btnEliminar' class='btn btn-sm btn-danger btn-detail' title='Eliminar'><i class='fa fa-trash vermas'></i></button>"
    }
  ];

  url = environment.apiUrl + '/sancionados'; //url del servicio del API
  titulo = 'Listado de sancionados'; //titulo del documento que se exportará
  orientacion = 'Portrait'; //orientación de la página del documento que se exportará
  closeResult: string;

  name: string = 'Yoenis Celedonio';

  //Referente al formulario de edición
  public form: FormGroup;

  //métodos
  constructor(
    private myServicio: SancionadosService,
    private myTabla: TableFactoryService,
    private ruta: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.sancionados = this.myServicio.getSancionados().subscribe(data => {
      this.sancionados = data; //lleno los sancionados desde el servicio
    });

    this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);

    //Evento click del botón <detalles>
    $(document).on('click', '#btnDetalles', $event => {
      let row = this.myTabla.getRowSelected();
      //Redirigir a otra ruta pasándole el id
      this.ruta.navigate(['/sancionado-detalles', { id: row.id }]);
    });

    //Evento click del botón Editar
    $(document).on('click', '#btnEditarSancionado', $event => {
      let row = this.myTabla.getRowSelected();
      //console.log(row.id);

      //Elementos del formulario
      this.form = this.formBuilder.group({
        id: [row.id],
        nombre_completo: [row.nombre_completo, [Validators.required]],
        solapin: [row.solapin, [Validators.required]],
        grupo: [row.grupo, [Validators.required]]
      });

      this.modalService.open(this.modalSancionado).result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
          this.modalService.dismissAll();
        },
        reason => {
          this.closeResult = `Dismissed `;
        }
      );
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
        divs[i].setAttribute('style', "display = 'none'");
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
    this.myServicio.deleteSancionado(row.id).subscribe(
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

  onSubmit() {
    const result: any = Object.assign({}, this.form.value);
    let id = this.form.controls.id.value;
    this.myServicio.editSancionado(id, result).subscribe(
      data => {
        //respuesta correcta
        this.confirmSwal.show();
      },
      error => {
        //respuesta de error
      }
    );
    // alert(this.form.controls.nombre_completo.value);
    //this.form.reset();
  }

  cerrarVentana() {
    this.modalService.dismissAll();
    //Refrescar la vista
    this.ruta.navigate(['sancionados']);
  }
}
