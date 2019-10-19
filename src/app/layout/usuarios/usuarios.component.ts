import { routerTransition } from '../../router.animations';
import { Component, OnInit, Renderer, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';

import { UsuariosService } from '../../shared/services/usuarios.service';
import { TableFactoryService } from '../../shared/services/table-factory.service';
import { DataTableDirective } from 'angular-datatables';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [routerTransition()]
})
export class UsuariosComponent implements AfterViewInit, OnDestroy, OnInit {
  //atributos
  @ViewChild('questionSwal') private questionSwal: SwalComponent;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;

  @ViewChild('modalUsuario') private modalUsuario: NgbModal;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  usuarios: {};

  dtOptions: {}; //opciones para el dataTable
  dtTrigger: any = new Subject();

  row: any; //para la fila seleccionada

  //**** Parámetros del dataTable */
  columnas = [
    {
      orderable: false,
      data: null,
      defaultContent: '<i class="fa fa-user"></i>',
      className: 'text-center'
    },
    {
      //columnas del dataTable
      data: 'usuario_uci',
      className: 'text-center'
    },
    {
      //columnas del dataTable
      data: 'cargo',
      className: 'text-center'
    },
    {
      //columnas del dataTable
      data: 'permiso',
      className: 'text-center'
    },
    {
      defaultContent:
        "<button type='button' id='btnEditarUsuario' class='btn btn-sm btn-warning btn-detail' title='Editar usuario'><i class='fa fa-edit vermas'></i></button> <button type='button' id='btnEliminarUsuario' class='btn btn-sm btn-danger btn-detail' title='Eliminar usuario'><i class='fa fa-trash vermas'></i></button>"
    }
  ];

  url = environment.apiUrl + '/usuarios'; //url del servicio del API
  titulo = 'Listado de usuarios'; //titulo del documento que se exportará
  orientacion = 'Portrait'; //orientación de la página del documento que se exportará
  closeResult: string;

  //Referente al formulario de edición
  public form: FormGroup;

  //métodos
  constructor(
    private myServicio: UsuariosService,
    private myTabla: TableFactoryService,
    private ruta: Router,
    private modalServiceUsuario: NgbModal,

    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.usuarios = this.myServicio.getUsuarios().subscribe(data => {
      this.usuarios = data['data']; //lleno los demandantes desde el servicio
    });
    this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);

    //Evento click del botón Editar
    $(document).on('click', '#btnEditarUsuario', $event => {
      let row = this.myTabla.getRowSelected();
      //Elementos del formulario
      this.form = this.formBuilder.group({
        id: [row.id],
        usuario_uci: [row.usuario_uci, [Validators.required]],
        cargo: [row.cargo, [Validators.required]],
        permiso: [row.permiso, [Validators.required]]
      });

      this.modalServiceUsuario.open(this.modalUsuario).result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
          this.modalServiceUsuario.dismissAll();
        },
        reason => {
          this.closeResult = `Dismissed `;
        }
      );
    });

    //Evento click del botón Eliminar
    $(document).on('click', '#btnEliminarUsuario', $event => {
      this.questionSwal.show();
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

  onSubmit() {
    const result: any = Object.assign({}, this.form.value);
    let id = this.form.controls.id.value;
    this.myServicio.editUsuario(id, result).subscribe(
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

  eliminarRegistro(): void {
    let row = this.myTabla.getRowSelected();
    this.myServicio.deleteUsuario(row.id).subscribe(
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

  cerrarVentana() {
    this.modalServiceUsuario.dismissAll();
    //Refrescar la vista
    this.ruta.navigate(['usuarios']);
  }
}
