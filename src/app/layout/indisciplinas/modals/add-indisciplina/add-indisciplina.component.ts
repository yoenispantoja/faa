import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndisciplinasService } from '../../../../shared/services/indisciplinas.service';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Router, NavigationEnd } from '@angular/router';
import { CategoriasService } from 'src/app/shared/services/categorias.service';
import { DemandantesService } from 'src/app/shared/services/demandantes.service';

import {Implicado} from '../../implicado';
import { SancionadosService } from 'src/app/shared/services/sancionados.service';

@Component({
  selector: 'app-add-indisciplina',
  templateUrl: './add-indisciplina.component.html',
  styleUrls: ['./add-indisciplina.component.scss']
})
export class AddIndisciplinaComponent implements OnInit {
  //Atributos
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  @ViewChild('existeSancionadoSwal') private existeSancionadoSwal: SwalComponent;
  @Input() src;
  closeResult: string;
  categorias: {};
  public form: FormGroup;
  //Datos del implicado
  public nombre_completo: string;
  public solapin: string;
  public grupo: string;
  public implicados: Array<{ nombre_completo: string; solapin: string; grupo: string }> = [];
  
  demandantes: {};
  sancionados: {};

  currentDemandante: string = '';
  solapinDemandante: string = '';
  cargoDemandante: string = '';
  selectedDemandante: string;

  currentSancionado:string='';
  solapinSancionado: string = '';
  grupoSancionado: string = '';
  selectedSancionado: string;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private myServicio: IndisciplinasService,
    private myServicioCategorias: CategoriasService,
    private myServicioDemandantes: DemandantesService,
    private myServicioSancionados: SancionadosService,
    private ruta: Router
  ) {}

  ngOnInit() {
    //Elementos del formulario
    this.form = this.formBuilder.group({
      id_categoria: ['', [Validators.required]],
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

    //cargando los demandates que tenemos en la BD para ayudar con el completamiento
    this.demandantes = this.myServicioDemandantes.getDemandantes().subscribe(data => {
      this.demandantes = data; //lleno los demandantes desde el servicio
    });

    //cargando los demandates que tenemos en la BD para ayudar con el completamiento
    this.sancionados = this.myServicioSancionados.getSancionados().subscribe(data => {
      this.sancionados = data; //lleno los sancionados desde el servicio
    });
  }

  //en el cambio del datalist, cargo los demás campos del dato seleccionado
  onDemandanteChanged(demandanteName) {
    this.selectedDemandante = this.getSelectedDemandanteByName(demandanteName);
    if (this.selectedDemandante){
      this.solapinDemandante = this.selectedDemandante['solapin'];
      this.cargoDemandante = this.selectedDemandante['cargo'];
    }
  }

  getSelectedDemandanteByName(selectedName: string): string {
    return this.demandantes['data'].find(demandante => demandante.nombre_completo === selectedName);
  }

  //Lo mismo para los sancionados
  onSancionadoChanged(sancionadoName) {
    this.selectedSancionado = this.getSelectedSancionadoByName(sancionadoName);
    if (this.selectedSancionado){
      this.solapinSancionado = this.selectedSancionado['solapin'];
      this.grupoSancionado = this.selectedSancionado['grupo'];
    }
  }

  getSelectedSancionadoByName(selectedName: string): string {
    return this.sancionados['data'].find(sancionado => sancionado.nombre_completo === selectedName);
  }

  addImplicado() {
    const pnombre = this.form.controls.sancionado_nombre.value;
    const psolapin = this.form.controls.sancionado_solapin.value;
    const pgrupo = this.form.controls.sancionado_grupo.value;

    //verificando que ya no exista en la lista
    if (!this.implicados.find(implicado=>implicado.solapin===psolapin))
    {
      this.implicados.push({ nombre_completo: pnombre, solapin: psolapin, grupo: pgrupo });
    }
    else {
      this.existeSancionadoSwal.show();

    }

    //limpiando los componentes
    this.currentSancionado="";
    this.solapinSancionado="";
    this.grupoSancionado="";

  }

  EliminarImplicado(i) {
    this.implicados.splice(i, 1);
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static' });
  }

  onSubmit() {
    const implicados = {
      implicados: this.implicados
    };

    const result: any = Object.assign({}, this.form.value, implicados);
    //console.log(result);

    this.myServicio.addIndisciplina(result).subscribe(
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
    this.ruta.navigate(['indisciplinas']);
  }
}
