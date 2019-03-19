(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/categorias.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categorias.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
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
        Authorization: 'my-auth-token',
        contentType: 'false',
        processData: 'false'
    })
};
var CategoriasService = /** @class */ (function () {
    function CategoriasService(myHttp) {
        this.myHttp = myHttp;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/categorias'; //url del servicio del API
    }
    //Devuelve la lista de los categorias
    CategoriasService.prototype.getCategorias = function () {
        return this.myHttp.get(this.url);
    };
    //Devuelve una categoria especifica
    CategoriasService.prototype.getCategoriaById = function (id) {
        return this.myHttp.get(this.url + '/' + id);
    };
    //Aficiona un categoria
    CategoriasService.prototype.addCategoria = function (categoria) {
        return this.myHttp.post(this.url, categoria, httpOptions);
    };
    //Actualiza un categoria
    CategoriasService.prototype.editCategoria = function (id, categoria) {
        return this.myHttp.put(this.url + '/' + id, categoria, httpOptions);
    };
    //Elimina un categoria
    CategoriasService.prototype.deleteCategoria = function (id) {
        return this.myHttp.delete(this.url + '/' + id, httpOptions);
    };
    CategoriasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriasService);
    return CategoriasService;
}());



/***/ }),

/***/ "./src/app/shared/services/demandantes.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/demandantes.service.ts ***!
  \********************************************************/
/*! exports provided: DemandantesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandantesService", function() { return DemandantesService; });
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
var DemandantesService = /** @class */ (function () {
    function DemandantesService(myHttp) {
        this.myHttp = myHttp;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/demandantes'; //url del servicio del API
    }
    //Devuelve la lista de los demandantes
    DemandantesService.prototype.getDemandantes = function () {
        return this.myHttp.get(this.url);
    };
    //Aficiona un demandante
    DemandantesService.prototype.addDemandante = function (demandante) {
        return this.myHttp.post(this.url, demandante, httpOptions);
    };
    //Actualiza un demandante
    DemandantesService.prototype.editDemandante = function (id, demandante) {
        return this.myHttp.put(this.url + '/' + id, demandante, httpOptions);
    };
    //Elimina un demandante
    DemandantesService.prototype.deleteDemandante = function (id) {
        return this.myHttp.delete(this.url + '/' + id, httpOptions);
    };
    DemandantesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DemandantesService);
    return DemandantesService;
}());



/***/ }),

/***/ "./src/app/shared/services/indisciplinas.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/indisciplinas.service.ts ***!
  \**********************************************************/
/*! exports provided: IndisciplinasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndisciplinasService", function() { return IndisciplinasService; });
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
var IndisciplinasService = /** @class */ (function () {
    function IndisciplinasService(myHttp) {
        this.myHttp = myHttp;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/indisciplinas'; //url del servicio del API
        this.urlUltimasDiez = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/ultimas_indisciplinas'; //url del servicio del API
        this.urlConMedida = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/medidas'; //url del servicio del API
        this.urlEditMedida = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/actualizar_medida'; //url del servicio del API
    }
    //Devuelve la lista de las indisciplinas
    IndisciplinasService.prototype.getIndisciplinas = function () {
        return this.myHttp.get(this.url);
    };
    //Devuelve una indisciplina especifica
    IndisciplinasService.prototype.getIndisciplinaById = function (id) {
        return this.myHttp.get(this.url + '/' + id);
    };
    //Devuelve la lista de las últimas 10 indisciplinas
    IndisciplinasService.prototype.getUltimasIndisciplinas = function () {
        return this.myHttp.get(this.urlUltimasDiez);
    };
    //Devuelve la lista de las últimas 10 indisciplinas
    IndisciplinasService.prototype.getIndisciplinasConMedida = function () {
        return this.myHttp.get(this.urlConMedida);
    };
    //Aficiona un indisciplina
    IndisciplinasService.prototype.addIndisciplina = function (indisciplina) {
        return this.myHttp.post(this.url, indisciplina, httpOptions);
    };
    //Actualiza un indisciplina
    IndisciplinasService.prototype.editIndisciplina = function (id, indisciplina) {
        return this.myHttp.put(this.url + '/' + id, indisciplina, httpOptions);
    };
    //Elimina un indisciplina
    IndisciplinasService.prototype.deleteIndisciplina = function (id) {
        return this.myHttp.delete(this.url + '/' + id, httpOptions);
    };
    //actualiza medida
    IndisciplinasService.prototype.actualizarMedida = function (id, indisciplina) {
        return this.myHttp.put(this.urlEditMedida, indisciplina, httpOptions);
    };
    IndisciplinasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IndisciplinasService);
    return IndisciplinasService;
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
        this.urlUltimosDiez = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/ultimos_sancionados'; //url del servicio del API
    }
    //Devuelve la lista de los sancionados
    SancionadosService.prototype.getSancionados = function () {
        return this.myHttp.get(this.url);
    };
    //Devuelve un sancionado especifico
    SancionadosService.prototype.getSancionadoById = function (id) {
        return this.myHttp.get(this.url + '/' + id);
    };
    //Devuelve la lista de las últimas 10 indisciplinas
    SancionadosService.prototype.getUltimosSancionados = function () {
        return this.myHttp.get(this.urlUltimosDiez);
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
//# sourceMappingURL=common.js.map