(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scatterjs-core */ "./node_modules/scatterjs-core/dist/index.js");
/* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scatterjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scatterjs-plugin-eosjs2 */ "./node_modules/scatterjs-plugin-eosjs2/dist/index.js");
/* harmony import */ var scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var scatterjs_plugin_lynx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scatterjs-plugin-lynx */ "./node_modules/scatterjs-plugin-lynx/dist/index.js");
/* harmony import */ var scatterjs_plugin_lynx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scatterjs_plugin_lynx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/dist/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_5__);


// Scatter imports
// import ScatterJS from '@scatterjs/core';
// import ScatterEOS from '@scatterjs/eosjs2';
// import {JsonRpc, Api} from 'eosjs';
// import ScatterLynx from 'scatterjs-plugin-lynx';




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lynx-angular-scatterjs';
        this.status = "wallet NOT detected";
        this.connected = false;
        this.account = null;
        this.init();
    }
    AppComponent.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var network, rpc;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                scatterjs_core__WEBPACK_IMPORTED_MODULE_2___default.a.plugins(new scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_3___default.a(), new scatterjs_plugin_lynx__WEBPACK_IMPORTED_MODULE_4___default.a({ Api: eosjs__WEBPACK_IMPORTED_MODULE_5__["Api"], JsonRpc: eosjs__WEBPACK_IMPORTED_MODULE_5__["JsonRpc"] }));
                network = scatterjs_core__WEBPACK_IMPORTED_MODULE_2___default.a.Network.fromJson({
                    blockchain: 'eos',
                    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                    host: 'nodes.get-scatter.com',
                    port: 443,
                    protocol: 'https'
                });
                rpc = new eosjs__WEBPACK_IMPORTED_MODULE_5__["JsonRpc"](network.fullhost());
                scatterjs_core__WEBPACK_IMPORTED_MODULE_2___default.a.connect('YourAppName', { network: network }).then(function (connected) {
                    _this.connected = connected;
                    if (!connected)
                        return console.error('no scatter');
                    _this.status = "wallet detected";
                    var eos = scatterjs_core__WEBPACK_IMPORTED_MODULE_2___default.a.eos(network, eosjs__WEBPACK_IMPORTED_MODULE_5__["Api"], { rpc: rpc });
                    scatterjs_core__WEBPACK_IMPORTED_MODULE_2___default.a.login().then(function (id) {
                        if (!id)
                            return console.error('no identity');
                        var account = scatterjs_core__WEBPACK_IMPORTED_MODULE_2___default.a.account('eos');
                        _this.status = "Logged as " + account.name;
                        _this.account = account;
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.logout = function () {
        console.log("ScatterJS.forgetIdentity()");
        scatterjs_core__WEBPACK_IMPORTED_MODULE_2___default.a.forgetIdentity();
        this.status = "wallet detected";
        this.account = null;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n        <div style=\"text-align:center\">\n            <h1>\n                status: {{status}}!\n            </h1>\n            <div class=\"padding\" [hidden]=\"!account\">\n                <div><button (click)=\"logout()\">Logout</button></div>\n                <pre>{{account|json}}</pre>\n            </div>\n        </div>\n    ",
            styles: ["pre {text-align:left} .padding{padding: 20px;} "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/lynx-angular-scatterjs/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map