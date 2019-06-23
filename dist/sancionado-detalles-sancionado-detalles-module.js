(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sancionado-detalles-sancionado-detalles-module"],{

/***/ "./src/app/layout/sancionado-detalles/sancionado-detalles-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/sancionado-detalles/sancionado-detalles-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SancionadoDetallesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionadoDetallesRoutingModule", function() { return SancionadoDetallesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sancionado_detalles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sancionado-detalles.component */ "./src/app/layout/sancionado-detalles/sancionado-detalles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _sancionado_detalles_component__WEBPACK_IMPORTED_MODULE_2__["SancionadoDetallesComponent"]
    }
];
var SancionadoDetallesRoutingModule = /** @class */ (function () {
    function SancionadoDetallesRoutingModule() {
    }
    SancionadoDetallesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SancionadoDetallesRoutingModule);
    return SancionadoDetallesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/sancionado-detalles/sancionado-detalles.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/sancionado-detalles/sancionado-detalles.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Detalles del sancionado'\" [icon]=\"'fa-user'\"></app-page-header>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\"><b>Ficha personal</b><span class=\"pull-right btn badge badge-secondary\"\n            (click)=\"ExportarFicha(sancionado.id)\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i> Exportar</span>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <img [src]=\"foto\" alt=\"\" class=\"rowSancionado\" width=\"200px\" height=\"200px\">\n            </div>\n            <div class=\"col-sm-8\">\n              <div *ngIf=\"sancionado\">\n                <br><br>\n                <h5><i class=\"fa fa-user\" aria-hidden=\"true\"></i> <span class=\"text-primary\"> Nombre y apellidos:\n                  </span>{{sancionado.nombre_completo}}</h5>\n                <h5><i class=\"fa fa-users\" aria-hidden=\"true\"></i> <span class=\"text-primary\"> Grupo docente:\n                  </span>{{sancionado.grupo}}</h5>\n                <h5><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i> <span class=\"text-primary\"> Solapín:\n                  </span>{{sancionado.solapin}}</h5>\n                <h5><i class=\"fa fa-fire\" aria-hidden=\"true\"></i> <span class=\"text-primary\"> Cantidad de sanciones:\n                  </span><span class=\"badge badge-info\">{{indisciplinas.length}}</span></h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <hr>\n              <h4>Relación de indisciplinas cometidas</h4>\n              <div *ngIf=\"indisciplinas\" class=\"table-responsive\" style=\"font-size: 13px\">\n                <table class=\"table table-bordered table-striped table-hover display nowrap\" width=\"100%\">\n                  <thead>\n                    <tr>\n                      <th width=\"12%\" class=\"text-primary\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                        Referencia</th>\n                      <th width=\"15%\" class=\"text-primary\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Fecha</th>\n                      <th width=\"20%\" class=\"text-primary\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Categoría\n                      </th>\n                      <th width=\"20%\" class=\"text-primary\"><i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\n                        Clasificación</th>\n                      <th class=\"text-primary\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Descripción</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let indisciplina of indisciplinas\">\n                      <td>{{indisciplina.referencia}}</td>\n                      <td>{{indisciplina.fecha | date}}</td>\n                      <td *ngIf=\"categorias\">{{getCategoria(indisciplina.id_categoria)}}</td>\n                      <td>{{indisciplina.clasificacion}}</td>\n                      <td>{{indisciplina.descripcion}}</td>\n                    </tr>\n                  </tbody>\n\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/sancionado-detalles/sancionado-detalles.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/sancionado-detalles/sancionado-detalles.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rowSancionado {\n  border: 2px solid gray;\n  padding: 5px;\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NhbmNpb25hZG8tZGV0YWxsZXMvQzpcXGxhcmFnb25cXHd3d1xcZmFhXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcc2FuY2lvbmFkby1kZXRhbGxlc1xcc2FuY2lvbmFkby1kZXRhbGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NhbmNpb25hZG8tZGV0YWxsZXMvc2FuY2lvbmFkby1kZXRhbGxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dTYW5jaW9uYWRvIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/sancionado-detalles/sancionado-detalles.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/sancionado-detalles/sancionado-detalles.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SancionadoDetallesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionadoDetallesComponent", function() { return SancionadoDetallesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_sancionados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/sancionados.service */ "./src/app/shared/services/sancionados.service.ts");
/* harmony import */ var src_app_shared_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/categorias.service */ "./src/app/shared/services/categorias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var urlSolapin = 'http://directorio.uci.cu/sites/all/modules/custom/directorio_de_personas/display_foto.php?id=';
var SancionadoDetallesComponent = /** @class */ (function () {
    function SancionadoDetallesComponent(route, router, sancionadoService, myServicioCategorias) {
        this.route = route;
        this.router = router;
        this.sancionadoService = sancionadoService;
        this.myServicioCategorias = myServicioCategorias;
        this.urlPrint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/imprimir_ficha_sancionado/'; //url del servicio del API
    }
    SancionadoDetallesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.sancionadoService.getSancionadoById(id).subscribe(function (data) {
            _this.sancionado = data[0]; //lleno los sancionados desde el servicio
            _this.foto = urlSolapin + _this.sancionado.solapin;
            _this.nombreSancionado = _this.sancionado.nombre_completo;
            _this.indisciplinas = _this.sancionado.indisciplinas;
        });
        this.myServicioCategorias.getCategorias().subscribe(function (data) {
            _this.categorias = data; //lleno los categorias desde el servicio
        });
    };
    SancionadoDetallesComponent.prototype.getCategoria = function (id) {
        return this.categorias[id - 1]['nombre'];
    };
    SancionadoDetallesComponent.prototype.ExportarFicha = function (id) {
        var url = this.urlPrint + id;
        window.location.href = url;
    };
    SancionadoDetallesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sancionado-detalles',
            template: __webpack_require__(/*! ./sancionado-detalles.component.html */ "./src/app/layout/sancionado-detalles/sancionado-detalles.component.html"),
            styles: [__webpack_require__(/*! ./sancionado-detalles.component.scss */ "./src/app/layout/sancionado-detalles/sancionado-detalles.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_shared_services_sancionados_service__WEBPACK_IMPORTED_MODULE_2__["SancionadosService"],
            src_app_shared_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"]])
    ], SancionadoDetallesComponent);
    return SancionadoDetallesComponent;
}());



/***/ }),

/***/ "./src/app/layout/sancionado-detalles/sancionado-detalles.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/sancionado-detalles/sancionado-detalles.module.ts ***!
  \**************************************************************************/
/*! exports provided: SancionadoDetallesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SancionadoDetallesModule", function() { return SancionadoDetallesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sancionado_detalles_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sancionado-detalles-routing.module */ "./src/app/layout/sancionado-detalles/sancionado-detalles-routing.module.ts");
/* harmony import */ var _sancionado_detalles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sancionado-detalles.component */ "./src/app/layout/sancionado-detalles/sancionado-detalles.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SancionadoDetallesModule = /** @class */ (function () {
    function SancionadoDetallesModule() {
    }
    SancionadoDetallesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sancionado_detalles_component__WEBPACK_IMPORTED_MODULE_3__["SancionadoDetallesComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sancionado_detalles_routing_module__WEBPACK_IMPORTED_MODULE_2__["SancionadoDetallesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]]
        })
    ], SancionadoDetallesModule);
    return SancionadoDetallesModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return slideToRight();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=sancionado-detalles-sancionado-detalles-module.js.map