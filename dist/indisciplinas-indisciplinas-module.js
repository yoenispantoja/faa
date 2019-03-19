(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indisciplinas-indisciplinas-module"],{

/***/ "./src/app/layout/indisciplinas/indisciplinas-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/indisciplinas/indisciplinas-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: IndisciplinasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndisciplinasRoutingModule", function() { return IndisciplinasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _indisciplinas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indisciplinas.component */ "./src/app/layout/indisciplinas/indisciplinas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _indisciplinas_component__WEBPACK_IMPORTED_MODULE_2__["IndisciplinasComponent"]
    }
];
var IndisciplinasRoutingModule = /** @class */ (function () {
    function IndisciplinasRoutingModule() {
    }
    IndisciplinasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IndisciplinasRoutingModule);
    return IndisciplinasRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/indisciplinas/indisciplinas.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/indisciplinas/indisciplinas.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Listado de indisciplinas'\" [icon]=\"'fa-fire'\"></app-page-header>\n\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <app-add-indisciplina></app-add-indisciplina>\n        </div>\n    </div>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"tbIndisciplinas\" [ngClass]=\"'table table-bordered table-hover display nowrap'\" *ngIf=\"indisciplinas\" style=\"width:100%\">\n                    <thead>\n                        <tr>\n                            <th>Ref.</th>\n                            <th>Categoría</th>\n                            <th>Implicados</th>\n                            <th>Fecha</th>\n                            <th>Clasificación</th>\n                            <th>Demandante</th>\n                            <th class=\"thOperations\" width=\"50px\"></th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <swal #successSwal title=\"Información\" text=\"Registro eliminado\" type=\"success\" [showCancelButton]=\"false\" [focusCancel]=\"true\">\n    </swal>\n\n    <swal #questionSwal title=\"Información\" text=\"¿Está seguro de eliminar este registro?\" type=\"question\" [showCancelButton]=\"true\" [focusCancel]=\"true\" (confirm)=\"eliminarRegistro()\">\n    </swal>\n\n    <!-- /.row -->\n</div>"

/***/ }),

/***/ "./src/app/layout/indisciplinas/indisciplinas.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/indisciplinas/indisciplinas.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbmRpc2NpcGxpbmFzL2luZGlzY2lwbGluYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/indisciplinas/indisciplinas.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/indisciplinas/indisciplinas.component.ts ***!
  \*****************************************************************/
/*! exports provided: IndisciplinasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndisciplinasComponent", function() { return IndisciplinasComponent; });
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_indisciplinas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/indisciplinas.service */ "./src/app/shared/services/indisciplinas.service.ts");
/* harmony import */ var _shared_services_table_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/table-factory.service */ "./src/app/shared/services/table-factory.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var IndisciplinasComponent = /** @class */ (function () {
    //métodos
    function IndisciplinasComponent(myServicio, myTabla, ruta, route) {
        this.myServicio = myServicio;
        this.myTabla = myTabla;
        this.ruta = ruta;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        //**** Parámetros del dataTable */
        this.columnas = [
            {
                //columnas del dataTable
                data: 'referencia',
                className: 'text-center'
            },
            {
                data: 'categoria.nombre'
            },
            {
                data: function (row, type, set) {
                    return row.sancionados.length;
                },
                className: 'text-center'
            },
            {
                data: 'fecha',
                render: function (data) {
                    var date = new Date(data);
                    var month = date.getMonth() + 1;
                    return date.getDate() + '/' + month + '/' + date.getFullYear();
                }
            },
            {
                data: 'clasificacion',
                className: 'text-center'
            },
            {
                data: 'demandante.nombre_completo'
            },
            {
                defaultContent: "<button type='button' id='btnVerDetalles' class='btn btn-sm btn-info btn-detail' title='Ver detalles'><i class='fa fa-search-plus vermas'></i></button> <button type='button' id='btnEliminar' class='btn btn-sm btn-danger btn-detail' title='Eliminar'><i class='fa fa-trash vermas'></i></button>"
            }
        ];
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/indisciplinas'; //url del servicio del API
        this.titulo = 'Listado de indisciplinas'; //titulo del documento que se exportará
        this.orientacion = 'Portrait'; //orientación de la página del documento que se exportará
        this.name = 'Yoenis Celedonio';
    }
    IndisciplinasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.indisciplinas = this.myServicio.getIndisciplinas().subscribe(function (data) {
            _this.indisciplinas = data; //lleno los indisciplinas desde el servicio
        });
        this.dtOptions = this.myTabla.getDataTable(this.url, this.columnas, this.titulo, this.orientacion);
        //Evento click del botón Ver Detalles
        $(document).on('click', '#btnVerDetalles', function ($event) {
            var row = _this.myTabla.getRowSelected();
            //Redirigir a otra ruta pasándole el id
            _this.ruta.navigate(['indisciplina-detalles', { id: row.id }]);
        });
        //Evento click del botón Eliminar
        $(document).on('click', '#btnEliminar', function ($event) {
            var row = _this.myTabla.getRowSelected();
            _this.questionSwal.show();
        });
    };
    IndisciplinasComponent.prototype.eliminarRegistro = function () {
        var _this = this;
        var row = this.myTabla.getRowSelected();
        this.myServicio.deleteIndisciplina(row.id).subscribe(function (data) {
            if (data) {
                _this.successSwal.show();
                _this.rerender();
            }
        }, function (error) {
            console.log(error);
        });
    };
    IndisciplinasComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    IndisciplinasComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    IndisciplinasComponent.prototype.rerender = function () {
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
    ], IndisciplinasComponent.prototype, "questionSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"])
    ], IndisciplinasComponent.prototype, "successSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], IndisciplinasComponent.prototype, "dtElement", void 0);
    IndisciplinasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indisciplinas',
            template: __webpack_require__(/*! ./indisciplinas.component.html */ "./src/app/layout/indisciplinas/indisciplinas.component.html"),
            styles: [__webpack_require__(/*! ./indisciplinas.component.scss */ "./src/app/layout/indisciplinas/indisciplinas.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_0__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_indisciplinas_service__WEBPACK_IMPORTED_MODULE_2__["IndisciplinasService"],
            _shared_services_table_factory_service__WEBPACK_IMPORTED_MODULE_3__["TableFactoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], IndisciplinasComponent);
    return IndisciplinasComponent;
}());



/***/ }),

/***/ "./src/app/layout/indisciplinas/indisciplinas.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/indisciplinas/indisciplinas.module.ts ***!
  \**************************************************************/
/*! exports provided: IndisciplinasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndisciplinasModule", function() { return IndisciplinasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _indisciplinas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indisciplinas-routing.module */ "./src/app/layout/indisciplinas/indisciplinas-routing.module.ts");
/* harmony import */ var _indisciplinas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indisciplinas.component */ "./src/app/layout/indisciplinas/indisciplinas.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _modals_add_indisciplina_add_indisciplina_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/add-indisciplina/add-indisciplina.component */ "./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.ts");
/* harmony import */ var ng2_archwizard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-archwizard */ "./node_modules/ng2-archwizard/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //para los datatables
 //para los formularios
 //para los sweetAlerts





var IndisciplinasModule = /** @class */ (function () {
    function IndisciplinasModule() {
    }
    IndisciplinasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _indisciplinas_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndisciplinasRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                ng2_archwizard__WEBPACK_IMPORTED_MODULE_9__["ArchwizardModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ],
            declarations: [_indisciplinas_component__WEBPACK_IMPORTED_MODULE_6__["IndisciplinasComponent"], _modals_add_indisciplina_add_indisciplina_component__WEBPACK_IMPORTED_MODULE_8__["AddIndisciplinaComponent"]]
        })
    ], IndisciplinasModule);
    return IndisciplinasModule;
}());



/***/ }),

/***/ "./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"open(content)\"> <i class=\" fa fa-plus-circle\"></i>\n  Registrar indisciplina</button>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"modal-header bg-info text-white\">\n            <h5 class=\"modal-title\"><i class=\"fa fa-fire\"></i> Nueva indisciplina</h5>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n        </div>\n        <div class=\"modal-body\">\n            <!--Comienza el wizard-->\n            <wizard>\n                <wizard-step stepTitle=\"Indisciplina\" [canExit]='true'>\n                    <br>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"\" class=\"text-primary\">Categoría</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <select class=\"form-control\" formControlName=\"id_categoria\">\n                                <option value=\"\" selected disabled>Seleccione</option>\n                                <option *ngFor=\"let categoria of categorias\" [value]='categoria.id'>{{categoria.nombre}}\n                                </option>\n                            </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"\" class=\"text-primary\">Fecha</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <input type=\"date\" formControlName=\"fecha\" class=\"form-control\" placeholder=\"Fecha\" aria-describedby=\"helpId\">\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"\" class=\"text-primary\">Clasificación</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <select class=\"form-control\" formControlName=\"clasificacion\">\n                                    <option value=\"\" selected disabled>Seleccione</option>\n                                    <option value=\"MUY GRAVE\">MUY GRAVE</option>\n                                    <option value=\"GRAVE\">GRAVE</option>\n                                    <option value=\"MENOS GRAVE\">MENOS GRAVE</option>\n                                    <option value=\"LEVE\">LEVE</option>                            \n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"\" class=\"text-primary\">Descripción</label>\n                            <textarea class=\"form-control\" formControlName=\"descripcion\" rows=\"3\"></textarea>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"\" class=\"text-primary\">Medida Propuesta</label>\n                            <textarea class=\"form-control\" formControlName=\"medida\" rows=\"3\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" nextStep class=\"btn btn-primary\"><i class=\"fa fa-arrow-circle-right\"></i>\n  Siguiente</button>\n                    </div>\n                </wizard-step>\n                <wizard-step stepTitle=\"Demandante\" awOptionalStep>\n                    <br>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-5\">\n                            <label for=\"\" class=\"text-primary\">Nombre y apellidos</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <input type=\"text\" formControlName=\"demandante_nombre\" list=\"dtlDemandantes\" class=\"form-control\" placeholder=\"Nombre y apellidos del demandante\" aria-describedby=\"helpId\" [(ngModel)]='currentDemandante' (change)=\"onDemandanteChanged(currentDemandante)\">\n                                <datalist id=\"dtlDemandantes\">\n                                <option *ngFor=\"let demandante of demandantes['data']\" >{{demandante.nombre_completo}}\n                                </option>\n                                </datalist>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label for=\"\" class=\"text-primary\">Solapín</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <input type=\"text\" formControlName=\"demandante_solapin\" class=\"form-control\" placeholder=\"Solapin\" aria-describedby=\"helpId\" [(ngModel)]='solapinDemandante'>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"\" class=\"text-primary\">Cargo</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <input type=\"text\" formControlName=\"demandante_cargo\" class=\"form-control\" placeholder=\"Cargo\" aria-describedby=\"helpId\" [(ngModel)]='cargoDemandante'>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" previousStep class=\"btn btn-primary\"><i class=\"fa fa-arrow-circle-left\"></i>  Anterior</button>\n                        <button type=\"button\" nextStep class=\"btn btn-primary\"><i class=\"fa fa-arrow-circle-right\"></i>\n    Siguiente</button>\n                    </div>\n                </wizard-step>\n                <wizard-step stepTitle=\"Implicados\">\n                    <br>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"\" class=\"text-primary\">Nombre y apellidos</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <input type=\"text\" formControlName=\"sancionado_nombre\" list=\"dtlSancionados\" class=\"form-control\" placeholder=\"Nombre y apellidos\" aria-describedby=\"helpId\" [(ngModel)]='currentSancionado' (change)=\"onSancionadoChanged(currentSancionado)\">\n                                <datalist id=\"dtlSancionados\">\n                                    <option *ngFor=\"let sancionado of sancionados['data']\">{{sancionado.nombre_completo}}\n                                    </option>\n                                </datalist>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label for=\"\" class=\"text-primary\">Solapín</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <input type=\"text\" formControlName=\"sancionado_solapin\" class=\"form-control\" placeholder=\"Solapin\" aria-describedby=\"helpId\" [(ngModel)]='solapinSancionado'>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label for=\"\" class=\"text-primary\">Grupo</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text text-primary\" id=\"addon-wrapping\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></span>\n                                </div>\n                                <input type=\"text\" formControlName=\"sancionado_grupo\" class=\"form-control\" placeholder=\"Grupo\" aria-describedby=\"helpId\" [(ngModel)]='grupoSancionado'>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-2\">\n                            <button type=\"button\" id=\"btnAddImplicado\" class=\"btn btn-info\" (click)=\"addImplicado()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n  Adicionar</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label for=\"\" class=\"text-primary\">Implicados</label>\n                            <table class=\"table table-bordered table-hover display nowrap\" style=\"width:100%; font-size:12px\">\n                                <thead>\n                                    <tr>\n                                        <th>Nombre y apellidos</th>\n                                        <th>Solapin</th>\n                                        <th>Grupo</th>\n                                        <th style=\"width: 50px\"></th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let implicado of implicados; index as i\">\n                                        <td>{{ implicado.nombre_completo }}</td>\n                                        <td>{{ implicado.solapin }}</td>\n                                        <td>{{ implicado.grupo }}</td>\n                                        <td><button type='button' (click)=\"EliminarImplicado(i)\" id='btnEliminarImplicado' class='btn btn-sm btn-danger btn-detail' title='Eliminar'><i class='fa fa-trash vermas'></i></button></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" previousStep class=\"btn btn-primary\"><i class=\"fa fa-arrow-circle-left\"></i>\n    Anterior</button>\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\"><i class=\"fa fa-save\"></i>\n    Guardar</button>\n                    </div>\n                </wizard-step>\n            </wizard>\n        </div>\n\n    </form>\n</ng-template>\n\n<swal #confirmSwal title=\"Información\" text=\"Registro almacenado\" type=\"success\" [showCancelButton]=\"false\" [focusCancel]=\"true\" (confirm)=\"cerrarVentana()\">\n</swal>\n\n<swal #existeSancionadoSwal title=\"Información\" text=\"Ya existe este estudiante en la lista\" type=\"error\" [showCancelButton]=\"false\" [focusCancel]=\"true\">\n</swal>"

/***/ }),

/***/ "./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btnAddImplicado {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2luZGlzY2lwbGluYXMvbW9kYWxzL2FkZC1pbmRpc2NpcGxpbmEvQzpcXGxhcmFnb25cXHd3d1xcZmFhXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcaW5kaXNjaXBsaW5hc1xcbW9kYWxzXFxhZGQtaW5kaXNjaXBsaW5hXFxhZGQtaW5kaXNjaXBsaW5hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2luZGlzY2lwbGluYXMvbW9kYWxzL2FkZC1pbmRpc2NpcGxpbmEvYWRkLWluZGlzY2lwbGluYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidG5BZGRJbXBsaWNhZG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddIndisciplinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIndisciplinaComponent", function() { return AddIndisciplinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_indisciplinas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/indisciplinas.service */ "./src/app/shared/services/indisciplinas.service.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_categorias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/categorias.service */ "./src/app/shared/services/categorias.service.ts");
/* harmony import */ var src_app_shared_services_demandantes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/demandantes.service */ "./src/app/shared/services/demandantes.service.ts");
/* harmony import */ var src_app_shared_services_sancionados_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/sancionados.service */ "./src/app/shared/services/sancionados.service.ts");
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




var AddIndisciplinaComponent = /** @class */ (function () {
    function AddIndisciplinaComponent(modalService, formBuilder, myServicio, myServicioCategorias, myServicioDemandantes, myServicioSancionados, ruta) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.myServicio = myServicio;
        this.myServicioCategorias = myServicioCategorias;
        this.myServicioDemandantes = myServicioDemandantes;
        this.myServicioSancionados = myServicioSancionados;
        this.ruta = ruta;
        this.implicados = [];
        this.solapinDemandante = '';
        this.cargoDemandante = '';
        this.currentSancionado = '';
        this.solapinSancionado = '';
        this.grupoSancionado = '';
    }
    AddIndisciplinaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Elementos del formulario
        this.form = this.formBuilder.group({
            id_categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fecha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            clasificacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            medida: [''],
            demandante_nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            demandante_solapin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            demandante_cargo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sancionado_nombre: [''],
            sancionado_solapin: [''],
            sancionado_grupo: ['']
        });
        this.categorias = this.myServicioCategorias.getCategorias().subscribe(function (data) {
            _this.categorias = data; //lleno los categorias desde el servicio
        });
        //cargando los demandates que tenemos en la BD para ayudar con el completamiento
        this.demandantes = this.myServicioDemandantes.getDemandantes().subscribe(function (data) {
            _this.demandantes = data; //lleno los demandantes desde el servicio
        });
        //cargando los demandates que tenemos en la BD para ayudar con el completamiento
        this.sancionados = this.myServicioSancionados.getSancionados().subscribe(function (data) {
            _this.sancionados = data; //lleno los sancionados desde el servicio
        });
    };
    //en el cambio del datalist, cargo los demás campos del dato seleccionado
    AddIndisciplinaComponent.prototype.onDemandanteChanged = function (demandanteName) {
        this.selectedDemandante = this.getSelectedDemandanteByName(demandanteName);
        if (this.selectedDemandante) {
            this.solapinDemandante = this.selectedDemandante['solapin'];
            this.cargoDemandante = this.selectedDemandante['cargo'];
        }
    };
    AddIndisciplinaComponent.prototype.getSelectedDemandanteByName = function (selectedName) {
        return this.demandantes['data'].find(function (demandante) { return demandante.nombre_completo === selectedName; });
    };
    //Lo mismo para los sancionados
    AddIndisciplinaComponent.prototype.onSancionadoChanged = function (sancionadoName) {
        this.selectedSancionado = this.getSelectedSancionadoByName(sancionadoName);
        if (this.selectedSancionado) {
            this.solapinSancionado = this.selectedSancionado['solapin'];
            this.grupoSancionado = this.selectedSancionado['grupo'];
        }
    };
    AddIndisciplinaComponent.prototype.getSelectedSancionadoByName = function (selectedName) {
        return this.sancionados['data'].find(function (sancionado) { return sancionado.nombre_completo === selectedName; });
    };
    AddIndisciplinaComponent.prototype.addImplicado = function () {
        var pnombre = this.form.controls.sancionado_nombre.value;
        var psolapin = this.form.controls.sancionado_solapin.value;
        var pgrupo = this.form.controls.sancionado_grupo.value;
        //verificando que ya no exista en la lista
        if (!this.implicados.find(function (implicado) { return implicado.solapin === psolapin; })) {
            this.implicados.push({ nombre_completo: pnombre, solapin: psolapin, grupo: pgrupo });
        }
        else {
            this.existeSancionadoSwal.show();
        }
        //limpiando los componentes
        this.currentSancionado = "";
        this.solapinSancionado = "";
        this.grupoSancionado = "";
    };
    AddIndisciplinaComponent.prototype.EliminarImplicado = function (i) {
        this.implicados.splice(i, 1);
    };
    AddIndisciplinaComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    };
    AddIndisciplinaComponent.prototype.onSubmit = function () {
        var _this = this;
        var implicados = {
            implicados: this.implicados
        };
        var result = Object.assign({}, this.form.value, implicados);
        //console.log(result);
        this.myServicio.addIndisciplina(result).subscribe(function (data) {
            //respuesta correcta
            _this.confirmSwal.show();
        }, function (error) {
            //respuesta de error
        });
        // alert(this.form.controls.nombre_completo.value);
        //this.form.reset();
    };
    AddIndisciplinaComponent.prototype.cerrarVentana = function () {
        this.modalService.dismissAll();
        //Refrescar la vista
        this.ruta.navigate(['indisciplinas']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SwalComponent"])
    ], AddIndisciplinaComponent.prototype, "confirmSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('existeSancionadoSwal'),
        __metadata("design:type", _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SwalComponent"])
    ], AddIndisciplinaComponent.prototype, "existeSancionadoSwal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddIndisciplinaComponent.prototype, "src", void 0);
    AddIndisciplinaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-indisciplina',
            template: __webpack_require__(/*! ./add-indisciplina.component.html */ "./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.html"),
            styles: [__webpack_require__(/*! ./add-indisciplina.component.scss */ "./src/app/layout/indisciplinas/modals/add-indisciplina/add-indisciplina.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_indisciplinas_service__WEBPACK_IMPORTED_MODULE_3__["IndisciplinasService"],
            src_app_shared_services_categorias_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasService"],
            src_app_shared_services_demandantes_service__WEBPACK_IMPORTED_MODULE_7__["DemandantesService"],
            src_app_shared_services_sancionados_service__WEBPACK_IMPORTED_MODULE_8__["SancionadosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddIndisciplinaComponent);
    return AddIndisciplinaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=indisciplinas-indisciplinas-module.js.map