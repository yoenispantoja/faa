import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndisciplinasService } from '../../../../shared/services/indisciplinas.service';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Router, NavigationEnd } from '@angular/router';
import { CategoriasService } from 'src/app/shared/services/categorias.service';
import {Implicado} from '../../implicado';


@Component({
  selector: 'app-add-indisciplina',
  templateUrl: './add-indisciplina.component.html',
  styleUrls: ['./add-indisciplina.component.scss']
})
export class AddIndisciplinaComponent implements OnInit {
  //Atributos
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  @Input() src;
  closeResult: string;
  categorias: {};
  public form: FormGroup;
  //Datos del implicado
  public nombre_completo: string;
  public solapin: string;
  public grupo: string;
  public implicados: Array<{ nombre_completo: string; solapin: string; grupo: string }> = [];

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private myServicio: IndisciplinasService,
    private myServicioCategorias: CategoriasService,
    private ruta: Router
  ) {}

  ngOnInit() {
    //Elementos del formulario
    this.form = this.formBuilder.group({
      categoria: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      clasificacion: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      medida: [''],
      demandante_nombre: ['', [Validators.required]],
      demandante_solapin: ['', [Validators.required]],
      demandante_cargo: ['', [Validators.required]],
      sancionado_nombre: [''],
      sancionado_solapin: [''],
      sancionado_grupo: ['']
    });

    this.categorias = this.myServicioCategorias.getCategorias().subscribe(data => {
      this.categorias = data; //lleno los categorias desde el servicio
    });
  }

  addImplicado() {
    const pnombre = this.form.controls.sancionado_nombre.value;
    const psolapin = this.form.controls.sancionado_solapin.value;
    const pgrupo = this.form.controls.sancionado_grupo.value;

    this.implicados.push({ nombre_completo: pnombre, solapin: psolapin, grupo: pgrupo });
  }

  EliminarImplicado(i) {
    this.implicados.splice(i, 1);    
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static' });
  }

  onSubmit() {
    const result: any = Object.assign({}, this.form.value);

    /*this.myServicio.addIndisciplina(result).subscribe(
      data => {
        //respuesta correcta
        this.confirmSwal.show();
      },
      error => {
        //respuesta de error
      }
    );*/
    // alert(this.form.controls.nombre_completo.value);
    //this.form.reset();
  }

  cerrarVentana() {
    this.modalService.dismissAll();
    //Refrescar la vista
    this.ruta.navigate(['indisciplinas']);
  }
}
