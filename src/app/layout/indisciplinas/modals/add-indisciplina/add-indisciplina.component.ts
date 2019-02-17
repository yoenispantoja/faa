import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndisciplinasService } from '../../../../shared/services/indisciplinas.service';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Router, NavigationEnd } from '@angular/router';
import { CategoriasService } from 'src/app/shared/services/categorias.service';


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
      medida: ['', [Validators.required]],
      searchDemandante: [''],
      searchImplicados: ['']
    });

    this.categorias = this.myServicioCategorias.getCategorias().subscribe(data => {
      this.categorias = data; //lleno los categorias desde el servicio
    });
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static' });
  }

  onSubmit() {
    const result: any = Object.assign({}, this.form.value);

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
