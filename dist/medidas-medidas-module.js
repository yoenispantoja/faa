(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medidas-medidas-module"],{

/***/ "./src/app/layout/medidas/medidas-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/medidas/medidas-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: MedidasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidasRoutingModule", function() { return MedidasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _medidas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medidas.component */ "./src/app/layout/medidas/medidas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _medidas_component__WEBPACK_IMPORTED_MODULE_2__["MedidasComponent"]
    }
];
var MedidasRoutingModule = /** @class */ (function () {
    function MedidasRoutingModule() {
    }
    MedidasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MedidasRoutingModule);
    return MedidasRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/medidas/medidas.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/medidas/medidas.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Listado de medidas'\" [icon]=\"'fa-gavel'\"></app-page-header>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"tbMedidas\" [ngClass]=\"'table table-bordered table-hover display nowrap'\" *ngIf=\"medidas\" style=\"width:100%\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-center\" width=\"50px\">Ref.Indisciplina</th>\n                            <th class=\"text-center\" style=\"text-overflow: ellipsis; width: 200px; white-space: nowrap; overflow: hidden;\"> Medida aplicada\n                            </th>\n                            <th>Detalles de la indisciplina</th>\n                            <th class=\"thOperations\" width=\"50px\"></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <swal #successSwal title=\"Información\" text=\"Registro eliminado\" type=\"success\" [showCancelButton]=\"false\" [focusCancel]=\"true\">\n    </swal>\n\n    <swal #questionSwal title=\"Información\" text=\"¿Está seguro de eliminar este registro?\" type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"eliminarRegistro()\">\n    </swal>\n\n    <!-- Ventana modal-->\n    <ng-template #modalMedida let-c=\"close\" let-d=\"dismiss\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"modal-header bg-info text-white\">\n                <h5 class=\"modal-title\"><i class=\"fa fa-gavel\"></i> Editar medida</h5>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label for=\"\">Medida</label>\n                    <input type=\"hidden\" formControlName=\"id\">\n                    <input type=\"text\" formControlName=\"medida\" class=\"form-control\" placeholder=\"Medida\" aria-describedby=\"helpId\">\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"c('Close click')\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\n        Cancelar</button>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\"><i class=\"fa fa-save\"></i> Guardar</button>\n            </div>\n        </form>\n    </ng-template>\n\n    <swal #confirmSwal title=\"Información\" text=\"Medida actualizada\" type=\"success\" [showCancelButton]=\"false\" [focusCancel]=\"true\" (confirm)=\"cerrarVentana()\">\n    </swal>\n</div>"

/***/ }),

/***/ "./src/app/layout/medidas/medidas.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/medidas/medidas.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tZWRpZGFzL21lZGlkYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/medidas/medidas.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/medidas/medidas.component.ts ***!
  \*****************************************************/
/*! exports provided: MedidasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidasComponent", function() { return MedidasComponent; });
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_indisciplinas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/indisciplinas.service */ "./src/app/shared/services/indisciplinas.service.ts");
/* harmony import */ var _shared_services_table_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/table-factory.service */ "./src/app/shared/services/table-factory.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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





var MedidasComponent = /** @class */ (function () {
    //métodos
    function MedidasComponent(myServicio, myTabla, ruta, modalServiceMedida, formBuilder) {
        this.myServicio = myServicio;
        this.myTabla = myTabla;
        this.ruta = ruta;
        this.modalServiceMedida = modalServiceMedida;
        this.formBuilder = formBuilder;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        //**** Parámetros del dataTable */
        this.columnas = [
            {
                //columnas del dataTable
                data: 'referencia',
                className: 'text-center'
            },
            {
                data: function (row, type, set) {
                    return '<span style="white-space:normal">' + row.medida + '</span>';
                }
                //className:'text-center'
            },
            {
                data: function (row, type, set) {
                    return ('<strong class="text-primary">Categoría: </strong>' +
                        row.categoria.nombre +
                        '.<strong class="text-danger"> Total de implicados: </strong>' +
                        row.sancionados.length +
                        '. <hr><strong class="text-success">Descripción: </strong>' +
                        row.descripcion);
                }
            },
            {
                defaultContent: "<button type='button' id='btnVerIndisciplina' class='btn btn-sm btn-info btn-detail' title='Ver indisciplina'><i class='fa fa-search-plus vermas'></i></button> <button type='button' id='btnEditarMedida' class='btn btn-sm btn-warning btn-detail' title='Editar medida'><i class='fa fa-edit vermas'></i></button>"
            }
        ];
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/medidas'; //url del servicio del API
        this.titulo = 'Listado de medidas aplicadas'; //titulo del documento que se exportará
        this.orientacion = 'Portrait'; //orientación de la página del documento que se exportará
    }
    MedidasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medidas = this.myServicio.getIndisciplinasConMedida().subscribe(function (data) {
            _this.medidas = data['data']; //lleno los demandantes desde el servicio      
        });
        this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);
        //Evento click del botón VerIndisciplina
        $(document).on('click', '#btnVerIndisciplina', function ($event) {
            var row = _this.myTabla.getRowSelected();
            _this.ruta.navigate(['indisciplina-detalles', { id: row.id }]);
        });
        //Evento click del botón Editar
        $(document).on('click', '#btnEditarMedida', function ($event) {
            var row = _this.myTabla.getRowSelected();
            //Elementos del formulario
            _this.form = _this.formBuilder.group({
                id: [row.id],
                medida: [row.medida, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]]
            });
            _this.modalServiceMedida.open(_this.modalMedida).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
                _this.modalServiceMedida.dismissAll();
            }, function (reason) {
                _this.closeResult = "Dismissed ";
            });
        });
    };
    MedidasComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    MedidasComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    MedidasComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            _this.dtTrigger.next();
        });
    };
    MedidasComponent.prototype.onSubmit = function () {
        var _this = this;
        var result = Object.assign({}, this.form.value);
        var id = this.form.controls.id.value;
        this.myServicio.actualizarMedida(id, result).subscribe(function (data) {
            //respuesta correcta
            _this.confirmSwal.show();
        }, function (error) {
            //respuesta de error
        });
        // alert(this.form.controls.nombre_completo.value);
        //this.form.reset();
    };
    MedidasComponent.prototype.cerrarVentana = function () {
        this.modalServiceMedida.dismissAll();
        //Refrescar la vista
        this.ruta.navigate(['medidas']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('questionSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], MedidasComponent.prototype, "questionSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], MedidasComponent.prototype, "successSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], MedidasComponent.prototype, "confirmSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalMedida'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"])
    ], MedidasComponent.prototype, "modalMedida", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], MedidasComponent.prototype, "dtElement", void 0);
    MedidasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medidas',
            template: __webpack_require__(/*! ./medidas.component.html */ "./src/app/layout/medidas/medidas.component.html"),
            styles: [__webpack_require__(/*! ./medidas.component.scss */ "./src/app/layout/medidas/medidas.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_0__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_indisciplinas_service__WEBPACK_IMPORTED_MODULE_2__["IndisciplinasService"],
            _shared_services_table_factory_service__WEBPACK_IMPORTED_MODULE_3__["TableFactoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])
    ], MedidasComponent);
    return MedidasComponent;
}());



/***/ }),

/***/ "./src/app/layout/medidas/medidas.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/medidas/medidas.module.ts ***!
  \**************************************************/
/*! exports provided: MedidasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidasModule", function() { return MedidasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _medidas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medidas-routing.module */ "./src/app/layout/medidas/medidas-routing.module.ts");
/* harmony import */ var _medidas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medidas.component */ "./src/app/layout/medidas/medidas.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //para los datatables
 //para los formularios

var MedidasModule = /** @class */ (function () {
    function MedidasModule() {
    }
    MedidasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_medidas_component__WEBPACK_IMPORTED_MODULE_3__["MedidasComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _medidas_routing_module__WEBPACK_IMPORTED_MODULE_2__["MedidasRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ]
        })
    ], MedidasModule);
    return MedidasModule;
}());



/***/ })

}]);
//# sourceMappingURL=medidas-medidas-module.js.map