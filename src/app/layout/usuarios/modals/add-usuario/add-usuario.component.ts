import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../../../shared/services/usuarios.service';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {
  //Atributos
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;

  @Input() src;
  closeResult: string;

  public form: FormGroup;

  demandantes: {};
  sancionados: {};

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private myServicio: UsuariosService,
    private ruta: Router
  ) {}

  ngOnInit() {
    //Elementos del formulario
    this.form = this.formBuilder.group({
      usuario_uci: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      permiso: ['', [Validators.required]]
    });
  }

  open(modalUsuarioAdd) {
    this.modalService.open(modalUsuarioAdd, { size: 'lg', backdrop: 'static' });
  }

  onSubmit() {
    const result: any = Object.assign({}, this.form.value);
    //console.log(result);

    this.myServicio.addUsuario(result).subscribe(
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
    this.ruta.navigate(['usuarios']);
  }
}
