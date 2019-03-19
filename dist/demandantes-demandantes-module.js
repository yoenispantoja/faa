(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demandantes-demandantes-module"],{

/***/ "./src/app/layout/demandantes/demandantes-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/demandantes/demandantes-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DemandantesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandantesRoutingModule", function() { return DemandantesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demandantes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demandantes.component */ "./src/app/layout/demandantes/demandantes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _demandantes_component__WEBPACK_IMPORTED_MODULE_2__["DemandantesComponent"]
    }
];
var DemandantesRoutingModule = /** @class */ (function () {
    function DemandantesRoutingModule() {
    }
    DemandantesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DemandantesRoutingModule);
    return DemandantesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/demandantes/demandantes.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/demandantes/demandantes.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Listado de demandantes'\" [icon]=\"'fa-users'\"></app-page-header>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"tbDemandantes\" [ngClass]=\"'table table-bordered table-hover display nowrap'\" *ngIf=\"demandantes\" style=\"width:100%\">\n                    <thead>\n                        <tr>\n                            <th>No</th>\n                            <th>Foto</th>\n                            <th>Nombre</th>\n                            <th>Solapín</th>\n                            <th>Cargo</th>\n                            <th class=\"thOperations\" width=\"50px\"></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <swal #successSwal title=\"Información\" text=\"Registro eliminado\" type=\"success\" [showCancelButton]=\"false\" [focusCancel]=\"true\">\n    </swal>\n\n    <swal #questionSwal title=\"Información\" text=\"¿Está seguro de eliminar este registro?\" type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"eliminarRegistro()\">\n    </swal>\n\n    <!-- Ventana modal-->\n    <ng-template #modalDemandante let-c=\"close\" let-d=\"dismiss\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"modal-header bg-info text-white\">\n                <h5 class=\"modal-title\"><i class=\"fa fa-user\"></i> Editar datos del demandante</h5>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label for=\"\">Nombre completo</label>\n                    <input type=\"hidden\" formControlName=\"id\">\n                    <input type=\"text\" formControlName=\"nombre_completo\" class=\"form-control\" placeholder=\"Nombre completo\" aria-describedby=\"helpId\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Solapin</label>\n                    <input type=\"text\" formControlName=\"solapin\" class=\"form-control\" placeholder=\"Solapin\" aria-describedby=\"helpId\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Cargo</label>\n                    <input type=\"text\" formControlName=\"cargo\" class=\"form-control\" placeholder=\"Cargo\" aria-describedby=\"helpId\">\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"c('Close click')\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\n        Cancelar</button>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\"><i class=\"fa fa-save\"></i> Guardar</button>\n            </div>\n        </form>\n    </ng-template>\n\n    <swal #confirmSwal title=\"Información\" text=\"Registro actualizado\" type=\"success\" [showCancelButton]=\"false\" [focusCancel]=\"true\" (confirm)=\"cerrarVentana()\">\n    </swal>\n</div>"

/***/ }),

/***/ "./src/app/layout/demandantes/demandantes.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/demandantes/demandantes.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kZW1hbmRhbnRlcy9kZW1hbmRhbnRlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/demandantes/demandantes.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/demandantes/demandantes.component.ts ***!
  \*************************************************************/
/*! exports provided: DemandantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandantesComponent", function() { return DemandantesComponent; });
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_demandantes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/demandantes.service */ "./src/app/shared/services/demandantes.service.ts");
/* harmony import */ var _shared_services_table_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/table-factory.service */ "./src/app/shared/services/table-factory.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var DemandantesComponent = /** @class */ (function () {
    //métodos
    function DemandantesComponent(myServicio, myTabla, modalServiceDemandante, formBuilder, ruta) {
        this.myServicio = myServicio;
        this.myTabla = myTabla;
        this.modalServiceDemandante = modalServiceDemandante;
        this.formBuilder = formBuilder;
        this.ruta = ruta;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        //**** Parámetros del dataTable */
        this.columnas = [
            {
                //columnas del dataTable
                data: 'id',
                className: "text-center"
            },
            {
                data: function (row, type, set) {
                    return ('<img class="person-photo" width="45px" src="' +
                        urlSolapin +
                        row.solapin +
                        '"><div id="hidden_' +
                        row.id +
                        '" class="person-original-photo-link photo-estudiante photo-hidden"><img width="200" height="200" src="' +
                        urlSolapin +
                        row.solapin +
                        '"/></div>');
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
                defaultContent: "<button type='button' id='btnEditarDemandante' class='btn btn-sm btn-warning btn-detail' title='Editar'><i class='fa fa-edit vermas'></i></button>"
            }
        ];
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/demandantes'; //url del servicio del API
        this.titulo = 'Listado de demandantes'; //titulo del documento que se exportará
        this.orientacion = 'Portrait'; //orientación de la página del documento que se exportará
        this.name = 'Yoenis Celedonio';
    }
    DemandantesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demandantes = this.myServicio.getDemandantes().subscribe(function (data) {
            _this.demandantes = data; //lleno los demandantes desde el servicio
        });
        this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);
        //Evento click del botón Editar
        $(document).on('click', '#btnEditarDemandante', function ($event) {
            var row = _this.myTabla.getRowSelected();
            //Elementos del formulario
            _this.form = _this.formBuilder.group({
                id: [row.id],
                nombre_completo: [row.nombre_completo, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                solapin: [row.solapin, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                cargo: [row.cargo, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]]
            });
            _this.modalServiceDemandante.open(_this.modalDemandante).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
                _this.modalServiceDemandante.dismissAll();
            }, function (reason) {
                _this.closeResult = "Dismissed ";
            });
        });
        //Evento click de la foto pequeña
        $(document).on('click', '.person-photo', function ($event) {
            var row = _this.myTabla.getRowSelected();
            //cerrando todas las abiertas
            var divs = document.getElementsByClassName('photo-hidden');
            for (var i = 0; i < divs.length; i++) {
                divs[i].setAttribute('style', "display = 'none'");
            }
            document.getElementById('hidden_' + row.id).style.display = 'block';
        });
        //Evento click de la foto grande
        $(document).on('click', '.photo-hidden', function ($event) {
            var row = _this.myTabla.getRowSelected();
            document.getElementById('hidden_' + row.id).style.display = 'none';
        });
    };
    DemandantesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    DemandantesComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    DemandantesComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            _this.dtTrigger.next();
        });
    };
    DemandantesComponent.prototype.onSubmit = function () {
        var _this = this;
        var result = Object.assign({}, this.form.value);
        var id = this.form.controls.id.value;
        this.myServicio.editDemandante(id, result).subscribe(function (data) {
            //respuesta correcta
            _this.confirmSwal.show();
        }, function (error) {
            //respuesta de error
        });
        // alert(this.form.controls.nombre_completo.value);
        //this.form.reset();
    };
    DemandantesComponent.prototype.cerrarVentana = function () {
        this.modalServiceDemandante.dismissAll();
        //Refrescar la vista
        this.ruta.navigate(['demandantes']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('questionSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], DemandantesComponent.prototype, "questionSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], DemandantesComponent.prototype, "successSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], DemandantesComponent.prototype, "confirmSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalDemandante'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"])
    ], DemandantesComponent.prototype, "modalDemandante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], DemandantesComponent.prototype, "dtElement", void 0);
    DemandantesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demandantes',
            template: __webpack_require__(/*! ./demandantes.component.html */ "./src/app/layout/demandantes/demandantes.component.html"),
            styles: [__webpack_require__(/*! ./demandantes.component.scss */ "./src/app/layout/demandantes/demandantes.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_0__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_demandantes_service__WEBPACK_IMPORTED_MODULE_2__["DemandantesService"],
            _shared_services_table_factory_service__WEBPACK_IMPORTED_MODULE_3__["TableFactoryService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], DemandantesComponent);
    return DemandantesComponent;
}());



/***/ }),

/***/ "./src/app/layout/demandantes/demandantes.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/demandantes/demandantes.module.ts ***!
  \**********************************************************/
/*! exports provided: DemandantesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandantesModule", function() { return DemandantesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _demandantes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demandantes-routing.module */ "./src/app/layout/demandantes/demandantes-routing.module.ts");
/* harmony import */ var _demandantes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demandantes.component */ "./src/app/layout/demandantes/demandantes.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //para los datatables
 //para los formularios
 //para los sweetAlerts



var DemandantesModule = /** @class */ (function () {
    function DemandantesModule() {
    }
    DemandantesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _demandantes_routing_module__WEBPACK_IMPORTED_MODULE_5__["DemandantesRoutingModule"],
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
            declarations: [_demandantes_component__WEBPACK_IMPORTED_MODULE_6__["DemandantesComponent"]]
        })
    ], DemandantesModule);
    return DemandantesModule;
}());



/***/ })

}]);
//# sourceMappingURL=demandantes-demandantes-module.js.map