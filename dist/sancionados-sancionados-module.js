(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sancionados-sancionados-module"],{

/***/ "./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"open(content)\"> <i class=\" fa fa-plus-circle\"></i>\n  Nuevo sancionado</button>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"modal-header bg-info text-white\">\n            <h5 class=\"modal-title\"><i class=\"fa fa-user\"></i> Adicionar sancionado</h5>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"\">Nombre completo</label>\n                <input type=\"text\" formControlName=\"nombre_completo\" class=\"form-control\" placeholder=\"Nombre completo\" aria-describedby=\"helpId\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">Solapin</label>\n                <input type=\"text\" formControlName=\"solapin\" class=\"form-control\" placeholder=\"Solapin\" aria-describedby=\"helpId\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">Grupo</label>\n                <input type=\"text\" formControlName=\"grupo\" class=\"form-control\" placeholder=\"Grupo\" aria-describedby=\"helpId\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\">Obra</label>\n                <input type=\"text\" formControlName=\"obra\" class=\"form-control\" placeholder=\"Obra\" aria-describedby=\"helpId\">\n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"c('Close click')\"><i class=\"fa fa-remove\"\n    aria-hidden=\"true\"></i>\n  Cancelar</button>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\"><i class=\"fa fa-save\"></i> Guardar</button>\n        </div>\n    </form>\n</ng-template>\n\n<swal #confirmSwal title=\"Información\" text=\"Registro almacenado\" type=\"success\" [showCancelButton]=\"false\" [focusCancel]=\"true\" (confirm)=\"cerrarVentana()\">\n</swal>"

/***/ }),

/***/ "./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9sYXlvdXQvc2FuY2lvbmFkb3MvbW9kYWxzL2FkZC1zYW5jaW9uYWRvL2FkZC1zYW5jaW9uYWRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddSancionadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSancionadoComponent", function() { return AddSancionadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_sancionados_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/sancionados.service */ "./src/app/shared/services/sancionados.service.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //para los sweetAlerts

var AddSancionadoComponent = /** @class */ (function () {
    function AddSancionadoComponent(modalService, formBuilder, myServicio, ruta) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.myServicio = myServicio;
        this.ruta = ruta;
    }
    AddSancionadoComponent.prototype.ngOnInit = function () {
        //Elementos del formulario
        this.form = this.formBuilder.group({
            nombre_completo: [this.src, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            solapin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grupo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            obra: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    AddSancionadoComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    AddSancionadoComponent.prototype.onSubmit = function () {
        var _this = this;
        var result = Object.assign({}, this.form.value);
        this.myServicio.addSancionado(result).subscribe(function (data) {
            //respuesta correcta
            _this.confirmSwal.show();
        }, function (error) {
            //respuesta de error
        });
        // alert(this.form.controls.nombre_completo.value);
        //this.form.reset();
    };
    AddSancionadoComponent.prototype.cerrarVentana = function () {
        this.modalService.dismissAll();
        //Refrescar la vista
        this.ruta.navigate(['sancionados']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SwalComponent"])
    ], AddSancionadoComponent.prototype, "confirmSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddSancionadoComponent.prototype, "src", void 0);
    AddSancionadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-sancionado',
            template: __webpack_require__(/*! ./add-sancionado.component.html */ "./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.html"),
            styles: [__webpack_require__(/*! ./add-sancionado.component.scss */ "./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_sancionados_service__WEBPACK_IMPORTED_MODULE_3__["SancionadosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddSancionadoComponent);
    return AddSancionadoComponent;
}());



/***/ }),

/***/ "./src/app/layout/sancionados/sancionados-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/sancionados/sancionados-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SancionadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionadosRoutingModule", function() { return SancionadosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sancionados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sancionados.component */ "./src/app/layout/sancionados/sancionados.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _sancionados_component__WEBPACK_IMPORTED_MODULE_2__["SancionadosComponent"]
    }
];
var SancionadosRoutingModule = /** @class */ (function () {
    function SancionadosRoutingModule() {
    }
    SancionadosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SancionadosRoutingModule);
    return SancionadosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/sancionados/sancionados.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/sancionados/sancionados.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Listado de sancionados'\" [icon]=\"'fa-users'\"></app-page-header>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"tbSancionados\" [ngClass]=\"'table table-bordered table-hover display nowrap'\" *ngIf=\"sancionados\" style=\"width:100%\">\n                    <thead>\n                        <tr>\n                            <th>Id</th>\n                            <th>Foto</th>\n                            <th>Nombre</th>\n                            <th>Solapin</th>\n                            <th>Grupo</th>\n                            <th>Creado</th>\n                            <th class=\"thOperations\" width=\"50px\"></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <swal #successSwal title=\"Información\" text=\"Registro eliminado\" type=\"success\" [showCancelButton]=\"false\" [focusCancel]=\"true\">\n    </swal>\n\n    <swal #questionSwal title=\"Información\" text=\"¿Está seguro de eliminar este registro?\" type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"eliminarRegistro()\">\n    </swal>\n\n    <!-- /.row -->\n</div>"

/***/ }),

/***/ "./src/app/layout/sancionados/sancionados.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/sancionados/sancionados.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9sYXlvdXQvc2FuY2lvbmFkb3Mvc2FuY2lvbmFkb3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/sancionados/sancionados.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/sancionados/sancionados.component.ts ***!
  \*************************************************************/
/*! exports provided: SancionadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionadosComponent", function() { return SancionadosComponent; });
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_sancionados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/sancionados.service */ "./src/app/shared/services/sancionados.service.ts");
/* harmony import */ var _shared_services_table_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/table-factory.service */ "./src/app/shared/services/table-factory.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //para los sweetAlerts


var urlSolapin = "http://directorio.uci.cu/sites/all/modules/custom/directorio_de_personas/display_foto.php?id=";
var SancionadosComponent = /** @class */ (function () {
    //métodos
    function SancionadosComponent(myServicio, myTabla) {
        this.myServicio = myServicio;
        this.myTabla = myTabla;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        //**** Parámetros del dataTable */
        this.columnas = [
            {
                //columnas del dataTable
                data: 'id'
            },
            {
                data: function (row, type, set) {
                    return '<img width="45px" src="' + urlSolapin + row.solapin + '">';
                }
            },
            {
                data: 'nombre_completo'
            },
            {
                data: 'solapin'
            },
            {
                data: 'grupo'
            },
            {
                data: 'created_at'
            },
            {
                defaultContent: "<button type='button' id='btnEditar' class='btn btn-sm btn-warning btn-detail' title='Editar'><i class='fa fa-edit vermas'></i></button> <button type='button' id='btnEliminar' class='btn btn-sm btn-danger btn-detail' title='Eliminar'><i class='fa fa-trash vermas'></i></button>"
            }
        ];
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/sancionados'; //url del servicio del API
        this.titulo = 'Listado de sancionados'; //titulo del documento que se exportará
        this.orientacion = 'Portrait'; //orientación de la página del documento que se exportará
        this.name = "Yoenis Celedonio";
    }
    SancionadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sancionados = this.myServicio.getSancionados().subscribe(function (data) {
            _this.sancionados = data; //lleno los sancionados desde el servicio
        });
        this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);
        //Evento click del botón Editar
        $(document).on('click', '#btnEditar', function ($event) {
            var row = _this.myTabla.getRowSelected();
            //console.log(row.id);
            //Abriendo la ventana modal para edición
            //this.openEditSancionado(row);
        });
        //Evento click del botón Eliminar
        $(document).on('click', '#btnEliminar', function ($event) {
            var row = _this.myTabla.getRowSelected();
            _this.questionSwal.show();
        });
    };
    SancionadosComponent.prototype.eliminarRegistro = function () {
        var _this = this;
        var row = this.myTabla.getRowSelected();
        this.myServicio.deleteSancionado(row.id).subscribe(function (data) {
            if (data) {
                _this.successSwal.show();
                _this.rerender();
            }
        }, function (error) {
            console.log(error);
        });
    };
    SancionadosComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    SancionadosComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    SancionadosComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('questionSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], SancionadosComponent.prototype, "questionSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], SancionadosComponent.prototype, "successSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], SancionadosComponent.prototype, "dtElement", void 0);
    SancionadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sancionados',
            template: __webpack_require__(/*! ./sancionados.component.html */ "./src/app/layout/sancionados/sancionados.component.html"),
            styles: [__webpack_require__(/*! ./sancionados.component.scss */ "./src/app/layout/sancionados/sancionados.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_0__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_sancionados_service__WEBPACK_IMPORTED_MODULE_2__["SancionadosService"],
            _shared_services_table_factory_service__WEBPACK_IMPORTED_MODULE_3__["TableFactoryService"]])
    ], SancionadosComponent);
    return SancionadosComponent;
}());



/***/ }),

/***/ "./src/app/layout/sancionados/sancionados.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/sancionados/sancionados.module.ts ***!
  \**********************************************************/
/*! exports provided: SancionadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionadosModule", function() { return SancionadosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _sancionados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sancionados-routing.module */ "./src/app/layout/sancionados/sancionados-routing.module.ts");
/* harmony import */ var _sancionados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sancionados.component */ "./src/app/layout/sancionados/sancionados.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _modals_add_sancionado_add_sancionado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/add-sancionado/add-sancionado.component */ "./src/app/layout/sancionados/modals/add-sancionado/add-sancionado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //para los datatables
 //para los formularios
 //para los sweetAlerts




var SancionadosModule = /** @class */ (function () {
    function SancionadosModule() {
    }
    SancionadosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sancionados_routing_module__WEBPACK_IMPORTED_MODULE_5__["SancionadosRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ],
            declarations: [_sancionados_component__WEBPACK_IMPORTED_MODULE_6__["SancionadosComponent"], _modals_add_sancionado_add_sancionado_component__WEBPACK_IMPORTED_MODULE_8__["AddSancionadoComponent"]]
        })
    ], SancionadosModule);
    return SancionadosModule;
}());



/***/ }),

/***/ "./src/app/shared/services/sancionados.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/sancionados.service.ts ***!
  \********************************************************/
/*! exports provided: SancionadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionadosService", function() { return SancionadosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'contentType': 'false',
        'processData': 'false',
    })
};
var SancionadosService = /** @class */ (function () {
    function SancionadosService(myHttp) {
        this.myHttp = myHttp;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/sancionados'; //url del servicio del API
    }
    //Devuelve la lista de los sancionados
    SancionadosService.prototype.getSancionados = function () {
        return this.myHttp.get(this.url);
    };
    //Aficiona un sancionado
    SancionadosService.prototype.addSancionado = function (sancionado) {
        return this.myHttp.post(this.url, sancionado, httpOptions);
    };
    //Actualiza un sancionado
    SancionadosService.prototype.editSancionado = function (id, sancionado) {
        return this.myHttp.put(this.url + '/' + id, sancionado, httpOptions);
    };
    //Elimina un sancionado
    SancionadosService.prototype.deleteSancionado = function (id) {
        return this.myHttp.delete(this.url + '/' + id, httpOptions);
    };
    SancionadosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SancionadosService);
    return SancionadosService;
}());



/***/ })

}]);
//# sourceMappingURL=sancionados-sancionados-module.js.map