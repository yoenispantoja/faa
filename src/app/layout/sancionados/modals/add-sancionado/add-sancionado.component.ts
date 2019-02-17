import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SancionadosService } from '../../../../shared/services/sancionados.service';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2'; //para los sweetAlerts
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-add-sancionado',
  templateUrl: './add-sancionado.component.html',
  styleUrls: ['./add-sancionado.component.scss']
})
export class AddSancionadoComponent implements OnInit {
  @ViewChild('confirmSwal') private confirmSwal: SwalComponent;
  @Input() src;
  closeResult: string;
  public form: FormGroup;
  constructor(private modalService: NgbModal, 
    private formBuilder: FormBuilder, 
    private myServicio: SancionadosService, 
    private ruta: Router) {}

  ngOnInit() {
    //Elementos del formulario
    this.form = this.formBuilder.group({
      nombre_completo: [this.src, [Validators.required]],
      solapin: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      obra: ['', [Validators.required]]
    });
  }

  open(content) {   
    this.modalService.open(content); 
  }

  onSubmit() {
    const result: any = Object.assign({}, this.form.value);

    this.myServicio.addSancionado(result).subscribe(
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
