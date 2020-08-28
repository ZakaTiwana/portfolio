function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-container\"> \n  \n  <header>\n    <app-navbar></app-navbar>\n  </header>\n\n  <article>\n    <router-outlet></router-outlet>\n  </article>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bisection/bisection.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bisection/bisection.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBisectionBisectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"bisection-container\">\n    <h1> Find Root by Bisection Method</h1>\n    <form class=\"biform form-group\" [formGroup]=\"biForm\" >\n        <label for=\"equation\" class=\"biform__label\">f(x) = </label>\n        <input  required type=\"text\" id=\"equation\" formControlName=\"equation\" class=\"biform__input form-control\" placeholder=\"e.g  sin(x) - x^2 + 1\">\n        <label for=\"from\" class=\"biform__label\">Interval (a) From :</label>\n        <input  required type=\"number\" id=\"from\" formControlName=\"from\" class=\"biform__input form-control\" step=\"0.001\" placeholder=\"e.g 0.4\">\n        <label for=\"to\"  class=\"biform__label\">Interval (b) To :</label>\n        <input  required type=\"number\" id=\"to\" formControlName=\"to\" class=\"biform__input form-control\"  step=\"0.001\" placeholder=\"e.g 0.6\">\n\n        <label for=\"precision\" class=\"biform__label\">precision upto decimal places :</label>\n        <select  name=\"precision\" id=\"precision\" formControlName=\"precision\" class=\"biform__select form-control\">\n            <option *ngFor=\"let n of [1,2,3,4,5,6,9,8,9,10]\" [value]=\"n\"> {{n}} </option>\n        </select>\n        <button (click)=\"eval()\" class=\"biform__submit\"> Find </button>\n    </form>\n\n    <div *ngIf=\"isSubmited\" class=\"bidisplay\">\n        <h3>Solution for; f(x) = {{biForm.value.equation}} </h3>\n        <table class=\"table bidisplay__table\">\n            <thead>\n                <th>n</th>\n                <th>a</th>\n                <th>b</th>\n                <th mathjax> \\(c=\\frac{{'{a+b}'}}2\\) </th>\n                <th>f(c)</th>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let d of data\">\n                    <td>{{d.i}}</td>\n                    <td>{{d.a | number:precision}}</td>\n                    <td>{{d.b | number:precision}}</td>\n                    <td>{{d.c | number:precision}}</td>\n                    <td>{{d.f_of_c | number:precision}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"bidisplay__result\">\n            <h5 *ngIf=\"gotResult\"> Root is {{root| number:precision}} </h5>\n            <h5 *ngIf=\"!gotResult\"> Cannot find root in given interval</h5>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"home\">\n    <h1>\n        {{title}} \n    </h1>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/iteration/iteration.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iteration/iteration.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIterationIterationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"iteration-container\">\n    <h1 mathjax> Find Root by Iteration Method using \\(\\varnothing(x)\\) </h1>\n    <form class=\"itform form-group\" [formGroup]=\"itForm\" >\n        <label for=\"equation\" class=\"itform__label\" mathjax>\\(\\varnothing(x)\\) = </label>\n        <input  required type=\"text\" id=\"equation\" formControlName=\"equation\" class=\"itform__input form-control\" placeholder=\"e.g  sin(x) - x^2 + 1\">\n\n        <label for=\"from\"  class=\"itform__label\" mathjax >Inital guess \\(x_0\\) :</label>\n        <input  required type=\"number\" id=\"from\" formControlName=\"from\" class=\"itform__input form-control\"  step=\"0.001\" placeholder=\"e.g 0.6\">\n\n        <label for=\"precision\" class=\"itform__label\">precision upto decimal places :</label>\n\n        <select  name=\"precision\" id=\"precision\" formControlName=\"precision\" class=\"itform__select form-control\">\n            <option *ngFor=\"let n of [1,2,3,4,5,6,9,8,9,10]\" [value]=\"n\"> {{n}} </option>\n        </select>\n\n        <button (click)=\"eval()\" class=\"itform__submit\"> Find </button>\n    </form>\n\n    <div *ngIf=\"isSubmited\" class=\"itdisplay\">\n        <h3>Solution for; f(x) = {{itForm.value.equation}} </h3>\n        <table class=\"table itdisplay__table\">\n            <thead>\n                <th>n</th>\n                <th mathjax>\\(x_0\\)</th>\n                <th mathjax>\\(x_1=\\varnothing(x_0)\\)</th>\n                <th mathjax>\\(x_1 - x_0\\)</th>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let d of data\">\n                    <td>{{d.i}}</td>\n                    <td>{{d.x0 | number:precision}}</td>\n                    <td>{{d.x1 | number:precision}}</td>\n                    <td>{{d.diff | number:precision}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"itdisplay__result\">\n            <h5 *ngIf=\"gotResult\"> Root is {{root| number:precision}} </h5>\n            <h5 *ngIf=\"!gotResult\"> Cannot find root in given interval</h5>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav id=\"main-navbar\">\n    <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"> Home </a>\n    <a routerLink=\"/bisection\" routerLinkActive=\"active\"> Bisection </a>\n    <a routerLink=\"/regula-falsi\" routerLinkActive=\"active\"> regula-falsi </a>\n    <a routerLink=\"/secant\" routerLinkActive=\"active\"> secant </a>\n    <a routerLink=\"/newton-raphson\" routerLinkActive=\"active\"> newton-raphson </a>\n    <a routerLink=\"/iteration\" routerLinkActive=\"active\"> iteration </a>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/newton-raphson/newton-raphson.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newton-raphson/newton-raphson.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewtonRaphsonNewtonRaphsonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"newton-raphson-container\">\n    <h1> Find Root by Newton Raphson Method</h1>\n    <form class=\"nrform form-group\" [formGroup]=\"nrForm\" >\n        <label for=\"equation\" class=\"nrform__label\">f(x) = </label>\n        <input  required type=\"text\" id=\"equation\" formControlName=\"equation\" class=\"nrform__input form-control\" placeholder=\"e.g  sin(x) - x^2 + 1\">\n        <label for=\"derivative\" class=\"nrform__label\" mathjax> \\( f^{{\"{'}\"}}(x)\\) = </label>\n        <input  required type=\"text\" id=\"derivative\" formControlName=\"derivative\" class=\"nrform__input form-control\" placeholder=\"e.g cos(x)-2x\">\n        <label for=\"from\"  class=\"nrform__label\" mathjax >Inital guess \\(x_0\\) :</label>\n        <input  required type=\"number\" id=\"from\" formControlName=\"from\" class=\"nrform__input form-control\"  step=\"0.001\" placeholder=\"e.g 0.6\">\n\n        <label for=\"precision\" class=\"nrform__label\">precision upto decimal places :</label>\n        <select  name=\"precision\" id=\"precision\" formControlName=\"precision\" class=\"nrform__select form-control\">\n            <option *ngFor=\"let n of [1,2,3,4,5,6,9,8,9,10]\" [value]=\"n\"> {{n}} </option>\n        </select>\n        <button (click)=\"eval()\" class=\"nrform__submit\"> Find </button>\n    </form>\n\n    <div *ngIf=\"isSubmited\" class=\"nrdisplay\">\n        <h3>Solution for; f(x) = {{nrForm.value.equation}} </h3>\n        <table class=\"table nrdisplay__table\">\n            <thead>\n                <th>n</th>\n                <th mathjax>\\(x_0\\)</th>\n                <th mathjax>\\(x_1=x_0-\\frac {{ \"{f(x_0)}{f^{'}(x_0)}\" }}\\)</th>\n                <th mathjax>\\(f(x_1)\\)</th>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let d of data\">\n                    <td>{{d.i}}</td>\n                    <td>{{d.x0 | number:precision}}</td>\n                    <td>{{d.x1 | number:precision}}</td>\n                    <td>{{d.f_of_x1 | number:precision}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"nrdisplay__result\">\n            <h5 *ngIf=\"gotResult\"> Root is {{root| number:precision}} </h5>\n            <h5 *ngIf=\"!gotResult\"> Cannot find root in given interval</h5>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/regula-falsi/regula-falsi.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/regula-falsi/regula-falsi.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegulaFalsiRegulaFalsiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"regulaFalsi-container\">\n    <h1> Find Root by Regula Falsi Method</h1>\n    <form class=\"rfform form-group\" [formGroup]=\"rfForm\" >\n        <label for=\"equation\" class=\"rfform__label\">f(x) = </label>\n        <input  required type=\"text\" id=\"equation\" formControlName=\"equation\" class=\"rfform__input form-control\" placeholder=\"e.g  sin(x) - x^2 + 1\">\n        <label for=\"from\" class=\"rfform__label\">Interval (a) From :</label>\n        <input  required type=\"number\" id=\"from\" formControlName=\"from\" class=\"rfform__input form-control\" step=\"0.001\" placeholder=\"e.g 0.4\">\n        <label for=\"to\"  class=\"rfform__label\">Interval (b) To :</label>\n        <input  required type=\"number\" id=\"to\" formControlName=\"to\" class=\"rfform__input form-control\"  step=\"0.001\" placeholder=\"e.g 0.6\">\n\n        <label for=\"precision\" class=\"rfform__label\">precision upto decimal places :</label>\n        <select  name=\"precision\" id=\"precision\" formControlName=\"precision\" class=\"rfform__select form-control\">\n            <option *ngFor=\"let n of [1,2,3,4,5,6,9,8,9,10]\" [value]=\"n\"> {{n}} </option>\n        </select>\n        <button (click)=\"eval()\" class=\"rfform__submit\"> Find </button>\n    </form>\n\n    <div *ngIf=\"isSubmited\" class=\"rfdisplay\">\n        <h3>Solution for; f(x) = {{rfForm.value.equation}} </h3>\n        <table class=\"table rfdisplay__table\">\n            <thead>\n                <th>n</th>\n                <th>a</th>\n                <th>b</th>\n                <th mathjax>\\(c=\\frac{{ '{a.f(b)-b.f(a)}' }}{{ '{f(b)-f(a)}' }}\\)</th>\n                <th>f(c)</th>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let d of data\">\n                    <td>{{d.i}}</td>\n                    <td>{{d.a | number:precision}}</td>\n                    <td>{{d.b | number:precision}}</td>\n                    <td>{{d.c | number:precision}}</td>\n                    <td>{{d.f_of_c | number:precision}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"rfdisplay__result\">\n            <h5 *ngIf=\"gotResult\"> Root is {{root| number:precision}} </h5>\n            <h5 *ngIf=\"!gotResult\"> Cannot find root in given interval</h5>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secant/secant.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secant/secant.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecantSecantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"secant-container\">\n    <h1> Find Root by Secant Method</h1>\n    <form class=\"sform form-group\" [formGroup]=\"sForm\" >\n        <label for=\"equation\" class=\"sform__label\">f(x) = </label>\n        <input  required type=\"text\" id=\"equation\" formControlName=\"equation\" class=\"sform__input form-control\" placeholder=\"e.g  sin(x) - x^2 + 1\">\n        <label for=\"from\" class=\"sform__label\">Interval (a) From :</label>\n        <input  required type=\"number\" id=\"from\" formControlName=\"from\" class=\"sform__input form-control\" step=\"0.001\" placeholder=\"e.g 0.4\">\n        <label for=\"to\"  class=\"sform__label\">Interval (b) To :</label>\n        <input  required type=\"number\" id=\"to\" formControlName=\"to\" class=\"sform__input form-control\"  step=\"0.001\" placeholder=\"e.g 0.6\">\n\n        <label for=\"precision\" class=\"sform__label\">precision upto decimal places :</label>\n        <select  name=\"precision\" id=\"precision\" formControlName=\"precision\" class=\"sform__select form-control\">\n            <option *ngFor=\"let n of [1,2,3,4,5,6,9,8,9,10]\" [value]=\"n\"> {{n}} </option>\n        </select>\n        <button (click)=\"eval()\" class=\"sform__submit\"> Find </button>\n    </form>\n\n    <div *ngIf=\"isSubmited\" class=\"sdisplay\">\n        <h3>Solution for; f(x) = {{sForm.value.equation}} </h3>\n        <table class=\"table sdisplay__table\">\n            <thead>\n                <th>n</th>\n                <th>a</th>\n                <th>b</th>\n                <th mathjax>\\(c=\\frac{{ '{a.f(b)-b.f(a)}' }}{{ '{f(b)-f(a)}' }}\\)</th>\n                <th>f(c)</th>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let d of data\">\n                    <td>{{d.i}}</td>\n                    <td>{{d.a | number:precision}}</td>\n                    <td>{{d.b | number:precision}}</td>\n                    <td>{{d.c | number:precision}}</td>\n                    <td>{{d.f_of_c | number:precision}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"sdisplay__result\">\n            <h5 *ngIf=\"gotResult\"> Root is {{root| number:precision}} </h5>\n            <h5 *ngIf=\"!gotResult\"> Cannot find root in given interval</h5>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _bisection_bisection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bisection/bisection.component */
    "./src/app/bisection/bisection.component.ts");
    /* harmony import */


    var _regula_falsi_regula_falsi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./regula-falsi/regula-falsi.component */
    "./src/app/regula-falsi/regula-falsi.component.ts");
    /* harmony import */


    var _secant_secant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./secant/secant.component */
    "./src/app/secant/secant.component.ts");
    /* harmony import */


    var _newton_raphson_newton_raphson_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./newton-raphson/newton-raphson.component */
    "./src/app/newton-raphson/newton-raphson.component.ts");
    /* harmony import */


    var _iteration_iteration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./iteration/iteration.component */
    "./src/app/iteration/iteration.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: "",
      pathMatch: "full",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    }, {
      path: "bisection",
      component: _bisection_bisection_component__WEBPACK_IMPORTED_MODULE_3__["BisectionComponent"]
    }, {
      path: "regula-falsi",
      component: _regula_falsi_regula_falsi_component__WEBPACK_IMPORTED_MODULE_4__["RegulaFalsiComponent"]
    }, {
      path: "secant",
      component: _secant_secant_component__WEBPACK_IMPORTED_MODULE_5__["SecantComponent"]
    }, {
      path: "newton-raphson",
      component: _newton_raphson_newton_raphson_component__WEBPACK_IMPORTED_MODULE_6__["NewtonRaphsonComponent"]
    }, {
      path: "iteration",
      component: _iteration_iteration_component__WEBPACK_IMPORTED_MODULE_7__["IterationComponent"]
    }, {
      path: "**",
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule); // export const routingComponents = [BisectionComponent,RegulaFalsiComponent,
    //                                   SecantComponent,NewtonRaphsonComponent,
    //                                   IterationComponent];

    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container{\n    margin: 0 auto;\n    max-width: 1000px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap:2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6MnJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'sol-nonlinera-eq';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var ngx_mathjax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-mathjax */
    "./node_modules/ngx-mathjax/fesm2015/ngx-mathjax.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _bisection_bisection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./bisection/bisection.component */
    "./src/app/bisection/bisection.component.ts");
    /* harmony import */


    var _regula_falsi_regula_falsi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./regula-falsi/regula-falsi.component */
    "./src/app/regula-falsi/regula-falsi.component.ts");
    /* harmony import */


    var _secant_secant_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./secant/secant.component */
    "./src/app/secant/secant.component.ts");
    /* harmony import */


    var _newton_raphson_newton_raphson_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./newton-raphson/newton-raphson.component */
    "./src/app/newton-raphson/newton-raphson.component.ts");
    /* harmony import */


    var _iteration_iteration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./iteration/iteration.component */
    "./src/app/iteration/iteration.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _bisection_bisection_component__WEBPACK_IMPORTED_MODULE_8__["BisectionComponent"], _regula_falsi_regula_falsi_component__WEBPACK_IMPORTED_MODULE_9__["RegulaFalsiComponent"], _secant_secant_component__WEBPACK_IMPORTED_MODULE_10__["SecantComponent"], _newton_raphson_newton_raphson_component__WEBPACK_IMPORTED_MODULE_11__["NewtonRaphsonComponent"], _iteration_iteration_component__WEBPACK_IMPORTED_MODULE_12__["IterationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_mathjax__WEBPACK_IMPORTED_MODULE_5__["MathJaxModule"].forRoot({
        version: '2.7.5',
        config: 'TeX-AMS_HTML',
        hostname: 'cdnjs.cloudflare.com'
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/bisection/bisection.component.css":
  /*!***************************************************!*\
    !*** ./src/app/bisection/bisection.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBisectionBisectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#bisection-container{\n    background-color: black;\n    min-height: 70vh;\n    padding: 2rem;\n    \n}\n\n.biform{\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    gap: 1rem;\n}\n\n.biform__submit{\n    grid-column: 3/4;   \n    background-color: green;\n    border: none;\n    color: inherit;\n    border-radius: 5px;\n}\n\n.biform__submit:hover{\n    background-color: rgba(0, 128, 0, 0.5);\n}\n\n.biform__submit:focus{\n    border: 1px solid greenyellow;\n    outline: none;\n}\n\n.biform__submit::-moz-focus-inner {\n    border: 0;\n}\n\n.biform__label{\n    grid-column: 1/1;\n}\n\n.biform__input{\n    grid-column: 2/4;\n}\n\n.biform > *[type=number]:focus,*[type=text]:focus,#precision:focus{\n    border: 2px solid rgb(0, 89, 255);\n    border-radius: 2px;\n}\n\n.bidisplay{\n    margin-top: 3rem;\n}\n\n.bidisplay__table{\n    max-width: 700px;\n    margin: 0 auto;\n}\n\n@media only screen and (max-width:600px){\n    .biform{\n        grid-template-columns: 1fr;\n    }\n    .biform > *{\n        grid-column: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlzZWN0aW9uL2Jpc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFHQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUlBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYmlzZWN0aW9uL2Jpc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jpc2VjdGlvbi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWluLWhlaWdodDogNzB2aDtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIFxufVxuXG4uYmlmb3Jte1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmJpZm9ybV9fc3VibWl0e1xuICAgIGdyaWQtY29sdW1uOiAzLzQ7ICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5iaWZvcm1fX3N1Ym1pdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcbn1cblxuXG4uYmlmb3JtX19zdWJtaXQ6Zm9jdXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJpZm9ybV9fc3VibWl0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG59XG5cblxuXG4uYmlmb3JtX19sYWJlbHtcbiAgICBncmlkLWNvbHVtbjogMS8xO1xufVxuLmJpZm9ybV9faW5wdXR7XG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcbn1cbi5iaWZvcm0gPiAqW3R5cGU9bnVtYmVyXTpmb2N1cywqW3R5cGU9dGV4dF06Zm9jdXMsI3ByZWNpc2lvbjpmb2N1c3tcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgODksIDI1NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYmlkaXNwbGF5e1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG4uYmlkaXNwbGF5X190YWJsZXtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xuICAgIC5iaWZvcm17XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAuYmlmb3JtID4gKntcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG87XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/bisection/bisection.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/bisection/bisection.component.ts ***!
    \**************************************************/

  /*! exports provided: BisectionComponent */

  /***/
  function srcAppBisectionBisectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BisectionComponent", function () {
      return BisectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! mathjs */
    "./node_modules/mathjs/main/esm/index.js");

    var BisectionComponent = /*#__PURE__*/function () {
      function BisectionComponent(fb) {
        _classCallCheck(this, BisectionComponent);

        this.fb = fb;
        this.MAX_ITERATION = 100;
        this.isSubmited = false;
        this.gotResult = false;
      }

      _createClass(BisectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.biForm = this.fb.group({
            equation: "",
            from: null,
            to: null,
            precision: 1
          });
          this.biForm.valueChanges.subscribe(function () {
            return _this.isSubmited = false;
          });
        }
      }, {
        key: "eval",
        value: function _eval() {
          if (this.biForm.invalid) return;
          this.isSubmited = true;
          var par = Object(mathjs__WEBPACK_IMPORTED_MODULE_3__["parser"])();
          par.evaluate('f(x) = ' + this.biForm.value.equation);
          this.f = par.get('f');
          par.clear();
          var a, b, p;
          a = this.biForm.value.from;
          b = this.biForm.value.to;
          p = this.biForm.value.precision;
          this.precision = '.1-' + p;
          this.bisectionMethod(a, b, p, this.MAX_ITERATION);
          this.root = this.data.slice(-1)[0].c;
        }
      }, {
        key: "bisectionMethod",
        value: function bisectionMethod(a, b, p, n) {
          this.data = [];
          var c;
          var pre_c;

          for (var i = 0; i < n; i++) {
            pre_c = this.roundOff(c, p);
            c = (a + b) / 2;
            var f_of_c = this.f(c);
            this.data.push(new biData(i, a, b, c, f_of_c));

            if (this.roundOff(f_of_c, p) === 0) {
              this.gotResult = true;
              console.log({
                gotResult: this.gotResult
              });
              break;
            }

            if (this.roundOff(c, p) === pre_c) {
              this.gotResult = false;
              console.log({
                gotResult: this.gotResult
              });
              break;
            }

            var f_of_a = this.f(a);
            if (f_of_a * f_of_c < 0) b = c;else a = c;
          }
        }
      }, {
        key: "roundOff",
        value: function roundOff(x, p) {
          x = x * Math.pow(10, p);
          return Math.round(x);
        }
      }]);

      return BisectionComponent;
    }();

    BisectionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    BisectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bisection',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bisection.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bisection/bisection.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bisection.component.css */
      "./src/app/bisection/bisection.component.css"))["default"]]
    })], BisectionComponent);

    var biData = function biData(i, a, b, c, f_of_c) {
      _classCallCheck(this, biData);

      this.i = i;
      this.a = a;
      this.b = b;
      this.c = c;
      this.f_of_c = f_of_c;
    };
    /***/

  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#home{\n    background-color: black;\n    height: 70vh;\n    display: grid;\n}\n#home > h1{\n    font-size: 3rem;\n    padding:  2rem 3rem;\n    font-weight: bolder;\n    justify-self: center;\n    align-self: center;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cbiNob21lID4gaDF7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHBhZGRpbmc6ICAycmVtIDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.title = "Solution To NON-Linear Equation";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/iteration/iteration.component.css":
  /*!***************************************************!*\
    !*** ./src/app/iteration/iteration.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIterationIterationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#iteration-container{\n    background-color: black;\n    min-height: 70vh;\n    padding: 2rem;\n    \n}\n\n.itform{\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    gap: 1rem;\n}\n\n.itform__submit{\n    grid-column: 3/4;   \n    background-color: green;\n    border: none;\n    color: inherit;\n    border-radius: 5px;\n}\n\n.itform__submit:hover{\n    background-color: rgba(0, 128, 0, 0.5);\n}\n\n.itform__submit:focus{\n    border: 1px solid greenyellow;\n    outline: none;\n}\n\n.itform__submit::-moz-focus-inner {\n    border: 0;\n}\n\n.itform__label{\n    grid-column: 1/1;\n}\n\n.itform__input{\n    grid-column: 2/4;\n}\n\n.itform > *[type=number]:focus,*[type=text]:focus,#precision:focus{\n    border: 2px solid rgb(0, 89, 255);\n    border-radius: 2px;\n}\n\n.itdisplay{\n    margin-top: 3rem;\n}\n\n.itdisplay__table{\n    max-width: 700px;\n    margin: 0 auto;\n}\n\n@media only screen and (max-width:600px){\n    .itform{\n        grid-template-columns: 1fr;\n    }\n    .itform > *{\n        grid-column: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlcmF0aW9uL2l0ZXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFHQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUlBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaXRlcmF0aW9uL2l0ZXJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2l0ZXJhdGlvbi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWluLWhlaWdodDogNzB2aDtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIFxufVxuXG4uaXRmb3Jte1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLml0Zm9ybV9fc3VibWl0e1xuICAgIGdyaWQtY29sdW1uOiAzLzQ7ICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5pdGZvcm1fX3N1Ym1pdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcbn1cblxuXG4uaXRmb3JtX19zdWJtaXQ6Zm9jdXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLml0Zm9ybV9fc3VibWl0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG59XG5cblxuXG4uaXRmb3JtX19sYWJlbHtcbiAgICBncmlkLWNvbHVtbjogMS8xO1xufVxuLml0Zm9ybV9faW5wdXR7XG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcbn1cbi5pdGZvcm0gPiAqW3R5cGU9bnVtYmVyXTpmb2N1cywqW3R5cGU9dGV4dF06Zm9jdXMsI3ByZWNpc2lvbjpmb2N1c3tcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgODksIDI1NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaXRkaXNwbGF5e1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG4uaXRkaXNwbGF5X190YWJsZXtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xuICAgIC5pdGZvcm17XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAuaXRmb3JtID4gKntcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG87XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/iteration/iteration.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/iteration/iteration.component.ts ***!
    \**************************************************/

  /*! exports provided: IterationComponent */

  /***/
  function srcAppIterationIterationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IterationComponent", function () {
      return IterationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! mathjs */
    "./node_modules/mathjs/main/esm/index.js");

    var IterationComponent = /*#__PURE__*/function () {
      function IterationComponent(fb) {
        _classCallCheck(this, IterationComponent);

        this.fb = fb;
        this.MAX_ITERATION = 100;
        this.isSubmited = false;
        this.gotResult = false;
      }

      _createClass(IterationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.itForm = this.fb.group({
            equation: "",
            from: null,
            precision: 1
          });
          this.itForm.valueChanges.subscribe(function () {
            _this2.isSubmited = false;
            _this2.gotResult = false;
          });
        }
      }, {
        key: "eval",
        value: function _eval() {
          if (this.itForm.invalid) return;
          this.isSubmited = true;
          var par = Object(mathjs__WEBPACK_IMPORTED_MODULE_3__["parser"])();
          par.evaluate('f(x) = ' + this.itForm.value.equation);
          this.f = par.get('f');
          par.clear();
          var x0, p;
          x0 = this.itForm.value.from;
          p = this.itForm.value.precision;
          this.precision = '.1-' + p;
          this.iterationMethod(x0, p, this.MAX_ITERATION);
          this.root = this.data.slice(-1)[0].x1;
        }
      }, {
        key: "iterationMethod",
        value: function iterationMethod(x0, p, n) {
          this.data = [];
          var x1;
          x1 = x0;

          for (var i = 0; i < n; i++) {
            x0 = x1;
            x1 = this.f(x0);
            var diff = x1 - x0;
            this.data.push(new itData(i, x0, x1, diff));

            if (this.roundOff(diff, p) === 0) {
              this.gotResult = true;
              break;
            }
          }
        }
      }, {
        key: "roundOff",
        value: function roundOff(x, p) {
          x = x * Math.pow(10, p);
          return Math.round(x);
        }
      }]);

      return IterationComponent;
    }();

    IterationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    IterationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-iteration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./iteration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/iteration/iteration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./iteration.component.css */
      "./src/app/iteration/iteration.component.css"))["default"]]
    })], IterationComponent);

    var itData = function itData(i, x0, x1, diff) {
      _classCallCheck(this, itData);

      this.i = i;
      this.x0 = x0;
      this.x1 = x1;
      this.diff = diff;
    };
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n#main-navbar{\n    background-color: black;\n    display: grid;\n    grid-template-columns: repeat(6,1fr);\n    gap: 0.3rem;\n    padding: 0.8rem;\n    border-radius: 5px;\n    \n}\na {\n    /* align-self: center; */\n\n    text-align: center;\n    color: white;\n    padding: 0.7rem 0.6rem;\n    border-radius: 5px;\n}\na:hover{\n    background-color: rgb(90, 90, 90);\n}\na:visited{\n    color: white;\n}\na.active{\n    background-color: green;\n}\na.active:hover{\n    background-color: green;\n}\n@media only screen and (max-width:700px){\n    #main-navbar{\n        grid-template-columns: 1fr;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksd0JBQXdCOztJQUV4QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNtYWluLW5hdmJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsMWZyKTtcbiAgICBnYXA6IDAuM3JlbTtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIFxufVxuYSB7XG4gICAgLyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjdyZW0gMC42cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xufVxuYTp2aXNpdGVke1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmEuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuYS5hY3RpdmU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XG4gICAgI21haW4tbmF2YmFye1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.title = "NAVBAR";
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/newton-raphson/newton-raphson.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/newton-raphson/newton-raphson.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewtonRaphsonNewtonRaphsonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#newton-raphson-container{\n    background-color: black;\n    min-height: 70vh;\n    padding: 2rem;\n    \n}\n\n.nrform{\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    gap: 1rem;\n}\n\n.nrform__submit{\n    grid-column: 3/4;   \n    background-color: green;\n    border: none;\n    color: inherit;\n    border-radius: 5px;\n}\n\n.nrform__submit:hover{\n    background-color: rgba(0, 128, 0, 0.5);\n}\n\n.nrform__submit:focus{\n    border: 1px solid greenyellow;\n    outline: none;\n}\n\n.nrform__submit::-moz-focus-inner {\n    border: 0;\n}\n\n.nrform__label{\n    grid-column: 1/1;\n}\n\n.nrform__input{\n    grid-column: 2/4;\n}\n\n.nrform > *[type=number]:focus,*[type=text]:focus,#precision:focus{\n    border: 2px solid rgb(0, 89, 255);\n    border-radius: 2px;\n}\n\n.nrdisplay{\n    margin-top: 3rem;\n}\n\n.nrdisplay__table{\n    max-width: 700px;\n    margin: 0 auto;\n}\n\n@media only screen and (max-width:600px){\n    .nrform{\n        grid-template-columns: 1fr;\n    }\n    .nrform > *{\n        grid-column: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3dG9uLXJhcGhzb24vbmV3dG9uLXJhcGhzb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBR0E7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFJQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25ld3Rvbi1yYXBoc29uL25ld3Rvbi1yYXBoc29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmV3dG9uLXJhcGhzb24tY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBcbn1cblxuLm5yZm9ybXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5ucmZvcm1fX3N1Ym1pdHtcbiAgICBncmlkLWNvbHVtbjogMy80OyAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubnJmb3JtX19zdWJtaXQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XG59XG5cblxuLm5yZm9ybV9fc3VibWl0OmZvY3Vze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5ucmZvcm1fX3N1Ym1pdDo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xufVxuXG5cblxuLm5yZm9ybV9fbGFiZWx7XG4gICAgZ3JpZC1jb2x1bW46IDEvMTtcbn1cbi5ucmZvcm1fX2lucHV0e1xuICAgIGdyaWQtY29sdW1uOiAyLzQ7XG59XG4ubnJmb3JtID4gKlt0eXBlPW51bWJlcl06Zm9jdXMsKlt0eXBlPXRleHRdOmZvY3VzLCNwcmVjaXNpb246Zm9jdXN7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDg5LCAyNTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLm5yZGlzcGxheXtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuLm5yZGlzcGxheV9fdGFibGV7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAubnJmb3Jte1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgLm5yZm9ybSA+ICp7XG4gICAgICAgIGdyaWQtY29sdW1uOiBhdXRvO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/newton-raphson/newton-raphson.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/newton-raphson/newton-raphson.component.ts ***!
    \************************************************************/

  /*! exports provided: NewtonRaphsonComponent */

  /***/
  function srcAppNewtonRaphsonNewtonRaphsonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewtonRaphsonComponent", function () {
      return NewtonRaphsonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! mathjs */
    "./node_modules/mathjs/main/esm/index.js");

    var NewtonRaphsonComponent = /*#__PURE__*/function () {
      function NewtonRaphsonComponent(fb) {
        _classCallCheck(this, NewtonRaphsonComponent);

        this.fb = fb;
        this.MAX_ITERATION = 100;
        this.isSubmited = false;
        this.gotResult = false;
      }

      _createClass(NewtonRaphsonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.nrForm = this.fb.group({
            equation: "",
            derivative: "",
            from: null,
            precision: 1
          });
          this.nrForm.valueChanges.subscribe(function () {
            return _this3.isSubmited = false;
          });
        }
      }, {
        key: "eval",
        value: function _eval() {
          if (this.nrForm.invalid) return;
          this.isSubmited = true;
          var par = Object(mathjs__WEBPACK_IMPORTED_MODULE_3__["parser"])();
          par.evaluate('f(x) = ' + this.nrForm.value.equation);
          par.evaluate('f_prime(x) = ' + this.nrForm.value.derivative);
          this.f = par.get('f');
          this.f_prime = par.get('f_prime');
          par.clear();
          var x0, p;
          x0 = this.nrForm.value.from;
          p = this.nrForm.value.precision;
          this.precision = '.1-' + p;
          this.newtonRaphsonMethod(x0, p, this.MAX_ITERATION);
          this.root = this.data.slice(-1)[0].x1;
        }
      }, {
        key: "newtonRaphsonMethod",
        value: function newtonRaphsonMethod(x0, p, n) {
          this.data = [];
          var x1; // let pre_c:number;

          for (var i = 0; i < n; i++) {
            var f_of_x0 = this.f(x0);
            var f_p_of_x0 = this.f_prime(x0);
            x1 = x0 - f_of_x0 / f_p_of_x0;
            var f_of_x1 = this.f(x1);
            this.data.push(new nrData(i, x0, x1, f_of_x1));

            if (this.roundOff(f_of_x1, p) === 0) {
              this.gotResult = true;
              break;
            }

            if (this.roundOff(x1, p) === this.roundOff(x0, p)) {
              this.gotResult = false;
              break;
            }

            x0 = x1;
          }
        }
      }, {
        key: "roundOff",
        value: function roundOff(x, p) {
          x = x * Math.pow(10, p);
          return Math.round(x);
        }
      }]);

      return NewtonRaphsonComponent;
    }();

    NewtonRaphsonComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    NewtonRaphsonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newton-raphson',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./newton-raphson.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/newton-raphson/newton-raphson.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./newton-raphson.component.css */
      "./src/app/newton-raphson/newton-raphson.component.css"))["default"]]
    })], NewtonRaphsonComponent);

    var nrData = function nrData(i, x0, x1, f_of_x1) {
      _classCallCheck(this, nrData);

      this.i = i;
      this.x0 = x0;
      this.x1 = x1;
      this.f_of_x1 = f_of_x1;
    };
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: "\n    <code>\n      <span style=\"color:red;font-size:2rem;\"> Error : </span>\n      <p style=\"padding:1rem;font-size:1rem;\"> 404 Page not found</p>\n    <code>\n  "
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/regula-falsi/regula-falsi.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/regula-falsi/regula-falsi.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegulaFalsiRegulaFalsiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#regulaFalsi-container{\n    background-color: black;\n    min-height: 70vh;\n    padding: 2rem;\n    \n}\n\n.rfform{\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    gap: 1rem;\n}\n\n.rfform__submit{\n    grid-column: 3/4;   \n    background-color: green;\n    border: none;\n    color: inherit;\n    border-radius: 5px;\n}\n\n.rfform__submit:hover{\n    background-color: rgba(0, 128, 0, 0.5);\n}\n\n.rfform__submit:focus{\n    border: 1px solid greenyellow;\n    outline: none;\n}\n\n.rfform__submit::-moz-focus-inner {\n    border: 0;\n}\n\n.rfform__label{\n    grid-column: 1/1;\n}\n\n.rfform__input{\n    grid-column: 2/4;\n}\n\n.rfform > *[type=number]:focus,*[type=text]:focus,#precision:focus{\n    border: 2px solid rgb(0, 89, 255);\n    border-radius: 2px;\n}\n\n.rfdisplay{\n    margin-top: 3rem;\n}\n\n.rfdisplay__table{\n    max-width: 700px;\n    margin: 0 auto;\n}\n\n@media only screen and (max-width:600px){\n    .rfform{\n        grid-template-columns: 1fr;\n    }\n    .rfform > *{\n        grid-column: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVndWxhLWZhbHNpL3JlZ3VsYS1mYWxzaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFHQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUlBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVndWxhLWZhbHNpL3JlZ3VsYS1mYWxzaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZ3VsYUZhbHNpLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgXG59XG5cbi5yZmZvcm17XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucmZmb3JtX19zdWJtaXR7XG4gICAgZ3JpZC1jb2x1bW46IDMvNDsgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnJmZm9ybV9fc3VibWl0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xufVxuXG5cbi5yZmZvcm1fX3N1Ym1pdDpmb2N1c3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucmZmb3JtX19zdWJtaXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbn1cblxuXG5cbi5yZmZvcm1fX2xhYmVse1xuICAgIGdyaWQtY29sdW1uOiAxLzE7XG59XG4ucmZmb3JtX19pbnB1dHtcbiAgICBncmlkLWNvbHVtbjogMi80O1xufVxuLnJmZm9ybSA+ICpbdHlwZT1udW1iZXJdOmZvY3VzLCpbdHlwZT10ZXh0XTpmb2N1cywjcHJlY2lzaW9uOmZvY3Vze1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCA4OSwgMjU1KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5yZmRpc3BsYXl7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbi5yZmRpc3BsYXlfX3RhYmxle1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XG4gICAgLnJmZm9ybXtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIC5yZmZvcm0gPiAqe1xuICAgICAgICBncmlkLWNvbHVtbjogYXV0bztcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/regula-falsi/regula-falsi.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/regula-falsi/regula-falsi.component.ts ***!
    \********************************************************/

  /*! exports provided: RegulaFalsiComponent */

  /***/
  function srcAppRegulaFalsiRegulaFalsiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegulaFalsiComponent", function () {
      return RegulaFalsiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! mathjs */
    "./node_modules/mathjs/main/esm/index.js");

    var RegulaFalsiComponent = /*#__PURE__*/function () {
      function RegulaFalsiComponent(fb) {
        _classCallCheck(this, RegulaFalsiComponent);

        this.fb = fb;
        this.MAX_ITERATION = 100;
        this.isSubmited = false;
        this.gotResult = false;
      }

      _createClass(RegulaFalsiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.rfForm = this.fb.group({
            equation: "",
            from: null,
            to: null,
            precision: 1
          });
          this.rfForm.valueChanges.subscribe(function () {
            return _this4.isSubmited = false;
          });
        }
      }, {
        key: "eval",
        value: function _eval() {
          if (this.rfForm.invalid) return;
          this.isSubmited = true;
          var par = Object(mathjs__WEBPACK_IMPORTED_MODULE_3__["parser"])();
          par.evaluate('f(x) = ' + this.rfForm.value.equation);
          this.f = par.get('f');
          par.clear();
          var a, b, p;
          a = this.rfForm.value.from;
          b = this.rfForm.value.to;
          p = this.rfForm.value.precision;
          this.precision = '.1-' + p;
          this.regulaFalsiMethod(a, b, p, this.MAX_ITERATION);
          this.root = this.data.slice(-1)[0].c;
        }
      }, {
        key: "regulaFalsiMethod",
        value: function regulaFalsiMethod(a, b, p, n) {
          this.data = [];
          var c;
          var pre_c;

          for (var i = 0; i < n; i++) {
            pre_c = this.roundOff(c, p);
            var f_of_a = this.f(a);
            var f_of_b = this.f(b);
            c = (a * f_of_b - b * f_of_a) / (f_of_b - f_of_a);
            var f_of_c = this.f(c);
            this.data.push(new rfData(i, a, b, c, f_of_c));

            if (this.roundOff(f_of_c, p) === 0) {
              this.gotResult = true;
              console.log({
                gotResult: this.gotResult
              });
              break;
            }

            if (this.roundOff(c, p) === pre_c) {
              this.gotResult = false;
              console.log({
                gotResult: this.gotResult
              });
              break;
            }

            if (f_of_a * f_of_c < 0) b = c;else a = c;
          }
        }
      }, {
        key: "roundOff",
        value: function roundOff(x, p) {
          x = x * Math.pow(10, p);
          return Math.round(x);
        }
      }]);

      return RegulaFalsiComponent;
    }();

    RegulaFalsiComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    RegulaFalsiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-regula-falsi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./regula-falsi.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/regula-falsi/regula-falsi.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./regula-falsi.component.css */
      "./src/app/regula-falsi/regula-falsi.component.css"))["default"]]
    })], RegulaFalsiComponent);

    var rfData = function rfData(i, a, b, c, f_of_c) {
      _classCallCheck(this, rfData);

      this.i = i;
      this.a = a;
      this.b = b;
      this.c = c;
      this.f_of_c = f_of_c;
    };
    /***/

  },

  /***/
  "./src/app/secant/secant.component.css":
  /*!*********************************************!*\
    !*** ./src/app/secant/secant.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecantSecantComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#secant-container{\n    background-color: black;\n    min-height: 70vh;\n    padding: 2rem;\n    \n}\n\n.sform{\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    gap: 1rem;\n}\n\n.sform__submit{\n    grid-column: 3/4;   \n    background-color: green;\n    border: none;\n    color: inherit;\n    border-radius: 5px;\n}\n\n.sform__submit:hover{\n    background-color: rgba(0, 128, 0, 0.5);\n}\n\n.sform__submit:focus{\n    border: 1px solid greenyellow;\n    outline: none;\n}\n\n.sform__submit::-moz-focus-inner {\n    border: 0;\n}\n\n.sform__label{\n    grid-column: 1/1;\n}\n\n.sform__input{\n    grid-column: 2/4;\n}\n\n.sform > *[type=number]:focus,*[type=text]:focus,#precision:focus{\n    border: 2px solid rgb(0, 89, 255);\n    border-radius: 2px;\n}\n\n.sdisplay{\n    margin-top: 3rem;\n}\n\n.sdisplay__table{\n    max-width: 700px;\n    margin: 0 auto;\n}\n\n@media only screen and (max-width:600px){\n    .sform{\n        grid-template-columns: 1fr;\n    }\n    .sform > *{\n        grid-column: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjYW50L3NlY2FudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFHQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUlBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2VjYW50L3NlY2FudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlY2FudC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWluLWhlaWdodDogNzB2aDtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIFxufVxuXG4uc2Zvcm17XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uc2Zvcm1fX3N1Ym1pdHtcbiAgICBncmlkLWNvbHVtbjogMy80OyAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2Zvcm1fX3N1Ym1pdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcbn1cblxuXG4uc2Zvcm1fX3N1Ym1pdDpmb2N1c3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2Zvcm1fX3N1Ym1pdDo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xufVxuXG5cblxuLnNmb3JtX19sYWJlbHtcbiAgICBncmlkLWNvbHVtbjogMS8xO1xufVxuLnNmb3JtX19pbnB1dHtcbiAgICBncmlkLWNvbHVtbjogMi80O1xufVxuLnNmb3JtID4gKlt0eXBlPW51bWJlcl06Zm9jdXMsKlt0eXBlPXRleHRdOmZvY3VzLCNwcmVjaXNpb246Zm9jdXN7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDg5LCAyNTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnNkaXNwbGF5e1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG4uc2Rpc3BsYXlfX3RhYmxle1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XG4gICAgLnNmb3Jte1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgLnNmb3JtID4gKntcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG87XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/secant/secant.component.ts":
  /*!********************************************!*\
    !*** ./src/app/secant/secant.component.ts ***!
    \********************************************/

  /*! exports provided: SecantComponent */

  /***/
  function srcAppSecantSecantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecantComponent", function () {
      return SecantComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! mathjs */
    "./node_modules/mathjs/main/esm/index.js");

    var SecantComponent = /*#__PURE__*/function () {
      function SecantComponent(fb) {
        _classCallCheck(this, SecantComponent);

        this.fb = fb;
        this.MAX_ITERATION = 100;
        this.isSubmited = false;
        this.gotResult = false;
      }

      _createClass(SecantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.sForm = this.fb.group({
            equation: "",
            from: null,
            to: null,
            precision: 1
          });
          this.sForm.valueChanges.subscribe(function () {
            return _this5.isSubmited = false;
          });
        }
      }, {
        key: "eval",
        value: function _eval() {
          if (this.sForm.invalid) return;
          this.isSubmited = true;
          var par = Object(mathjs__WEBPACK_IMPORTED_MODULE_3__["parser"])();
          par.evaluate('f(x) = ' + this.sForm.value.equation);
          this.f = par.get('f');
          par.clear();
          var a, b, p;
          a = this.sForm.value.from;
          b = this.sForm.value.to;
          p = this.sForm.value.precision;
          this.precision = '.1-' + p;
          this.secantMethod(a, b, p, this.MAX_ITERATION);
          this.root = this.data.slice(-1)[0].c;
        }
      }, {
        key: "secantMethod",
        value: function secantMethod(a, b, p, n) {
          this.data = [];
          var c;
          var pre_c;

          for (var i = 0; i < n; i++) {
            pre_c = this.roundOff(c, p);
            var f_of_a = this.f(a);
            var f_of_b = this.f(b);
            c = (a * f_of_b - b * f_of_a) / (f_of_b - f_of_a);
            var f_of_c = this.f(c);
            this.data.push(new sData(i, a, b, c, f_of_c));

            if (this.roundOff(f_of_c, p) === 0) {
              this.gotResult = true;
              console.log({
                gotResult: this.gotResult
              });
              break;
            }

            if (this.roundOff(c, p) === pre_c) {
              this.gotResult = false;
              console.log({
                gotResult: this.gotResult
              });
              break;
            }

            a = b;
            b = c;
          }
        }
      }, {
        key: "roundOff",
        value: function roundOff(x, p) {
          x = x * Math.pow(10, p);
          return Math.round(x);
        }
      }]);

      return SecantComponent;
    }();

    SecantComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SecantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-secant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./secant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secant/secant.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./secant.component.css */
      "./src/app/secant/secant.component.css"))["default"]]
    })], SecantComponent);

    var sData = function sData(i, a, b, c, f_of_c) {
      _classCallCheck(this, sData);

      this.i = i;
      this.a = a;
      this.b = b;
      this.c = c;
      this.f_of_c = f_of_c;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/zaka_tiwana/Documents/Semster 8/nc/assingment_2/code_js/sol-nonlinera-eq/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map