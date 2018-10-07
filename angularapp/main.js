(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/action/action.component.css":
/*!*********************************************!*\
  !*** ./src/app/action/action.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/action/action.component.html":
/*!**********************************************!*\
  !*** ./src/app/action/action.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [ngStyle]=\"marginTop\">\n  action works!\n</p>\n"

/***/ }),

/***/ "./src/app/action/action.component.ts":
/*!********************************************!*\
  !*** ./src/app/action/action.component.ts ***!
  \********************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionComponent = /** @class */ (function () {
    function ActionComponent() {
        this.marginTop = { 'margin-top': '100px' };
    }
    ActionComponent.prototype.ngOnInit = function () {
    };
    ActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action',
            template: __webpack_require__(/*! ./action.component.html */ "./src/app/action/action.component.html"),
            styles: [__webpack_require__(/*! ./action.component.css */ "./src/app/action/action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./src/app/another/another.component.css":
/*!***********************************************!*\
  !*** ./src/app/another/another.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/another/another.component.html":
/*!************************************************!*\
  !*** ./src/app/another/another.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [ngStyle]=\"marginTop\">\n  another works!\n</p>\n"

/***/ }),

/***/ "./src/app/another/another.component.ts":
/*!**********************************************!*\
  !*** ./src/app/another/another.component.ts ***!
  \**********************************************/
/*! exports provided: AnotherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnotherComponent", function() { return AnotherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnotherComponent = /** @class */ (function () {
    function AnotherComponent() {
        this.marginTop = { 'margin-top': '100px' };
    }
    AnotherComponent.prototype.ngOnInit = function () {
    };
    AnotherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-another',
            template: __webpack_require__(/*! ./another.component.html */ "./src/app/another/another.component.html"),
            styles: [__webpack_require__(/*! ./another.component.css */ "./src/app/another/another.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnotherComponent);
    return AnotherComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <app-loremipsum></app-loremipsum>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angularapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loremipsum_loremipsum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loremipsum/loremipsum.component */ "./src/app/loremipsum/loremipsum.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _action_action_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action/action.component */ "./src/app/action/action.component.ts");
/* harmony import */ var _another_another_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./another/another.component */ "./src/app/another/another.component.ts");
/* harmony import */ var _somethingelsehere_somethingelsehere_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./somethingelsehere/somethingelsehere.component */ "./src/app/somethingelsehere/somethingelsehere.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./singlepost/singlepost.component */ "./src/app/singlepost/singlepost.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: 'features',
        component: _features_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"]
    },
    {
        path: 'pricing',
        component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"]
    },
    {
        path: 'action',
        component: _action_action_component__WEBPACK_IMPORTED_MODULE_9__["ActionComponent"]
    },
    {
        path: 'another',
        component: _another_another_component__WEBPACK_IMPORTED_MODULE_10__["AnotherComponent"]
    },
    {
        path: 'somethingelsehere',
        component: _somethingelsehere_somethingelsehere_component__WEBPACK_IMPORTED_MODULE_11__["SomethingelsehereComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
    },
    {
        path: 'posts',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_14__["PostsComponent"]
    },
    {
        path: 'posts/:id',
        component: _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_15__["SinglepostComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _loremipsum_loremipsum_component__WEBPACK_IMPORTED_MODULE_5__["LoremipsumComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_7__["FeaturesComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"],
                _action_action_component__WEBPACK_IMPORTED_MODULE_9__["ActionComponent"],
                _another_another_component__WEBPACK_IMPORTED_MODULE_10__["AnotherComponent"],
                _somethingelsehere_somethingelsehere_component__WEBPACK_IMPORTED_MODULE_11__["SomethingelsehereComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_14__["PostsComponent"],
                _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_15__["SinglepostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/features.component.css":
/*!*************************************************!*\
  !*** ./src/app/features/features.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/features.component.html":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [ngStyle]=\"marginTop\">\n  features works!\n</p>\n"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
        this.marginTop = { 'margin-top': '100px' };
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.css */ "./src/app/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"marginTop\">\n<h1>Example heading <span class=\"badge badge-secondary\">New</span></h1>\n<h2>Example heading <span class=\"badge badge-secondary\">New</span></h2>\n<h3>Example heading <span class=\"badge badge-secondary\">New</span></h3>\n<h4>Example heading <span class=\"badge badge-secondary\">New</span></h4>\n<h5>Example heading <span class=\"badge badge-secondary\">New</span></h5>\n<h6>Example heading <span class=\"badge badge-secondary\">New</span></h6>\n </div> \n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.marginTop = { 'margin-top': '100px' };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loremipsum/loremipsum.component.css":
/*!*****************************************************!*\
  !*** ./src/app/loremipsum/loremipsum.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    color:red;\r\n}\r\n\r\nh6{\r\n    color:skyblue;\r\n}"

/***/ }),

/***/ "./src/app/loremipsum/loremipsum.component.html":
/*!******************************************************!*\
  !*** ./src/app/loremipsum/loremipsum.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hey {{ name }} loremipsum works!\n</p>\n<p><input type=\"text\" [(ngModel)]=\"name\"/></p>\nYou clicked {{ times }} times.\n<p><button (click)=\"increment()\">Click Me!</button></p>\n<p><input type=\"text\" [(ngModel)]=\"task\" [value]=\"defaultvalue\"/></p>\n<p><button (click)=\"addTask()\">Add</button></p>\n<ul>\n  <li *ngFor=\"let t of taskList;let i=index\">{{ t }} <a href=\"javascript:;\" (click)=\"removeTask(i)\">Delete</a></li>\n</ul>\n<h6>wowwwwwwwwwwwwwwwwwwwwwwww</h6>\n<p><input type=\"number\" name=\"number\" [(ngModel)]=\"showView\"/></p>\n<div [ngSwitch] =\"showView\">\n<p *ngSwitchCase = \"1\">This is 1 block.</p>\n<p *ngSwitchCase = \"2\">This is 2 block.</p>\n<p *ngSwitchCase = \"3\">This is 3 block.</p>\n<p *ngSwitchCase = \"4\">This is 4 block.</p>\n<p *ngSwitchDefault>This is default block.</p>\n</div>"

/***/ }),

/***/ "./src/app/loremipsum/loremipsum.component.ts":
/*!****************************************************!*\
  !*** ./src/app/loremipsum/loremipsum.component.ts ***!
  \****************************************************/
/*! exports provided: LoremipsumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoremipsumComponent", function() { return LoremipsumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoremipsumComponent = /** @class */ (function () {
    function LoremipsumComponent() {
        this.name = "vaishali";
        this.defaultvalue = "hello";
        this.times = 0;
        this.task = "";
        this.taskList = [];
        this.colors = [];
        this.showView = 0;
    }
    LoremipsumComponent.prototype.ngOnInit = function () {
    };
    LoremipsumComponent.prototype.increment = function () {
        this.times++;
    };
    LoremipsumComponent.prototype.addTask = function () {
        if (this.task != "") {
            this.taskList.push(this.task);
            this.task = "";
        }
    };
    LoremipsumComponent.prototype.removeTask = function (index) {
        this.taskList.splice(index, 1);
    };
    LoremipsumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loremipsum',
            template: __webpack_require__(/*! ./loremipsum.component.html */ "./src/app/loremipsum/loremipsum.component.html"),
            styles: [__webpack_require__(/*! ./loremipsum.component.css */ "./src/app/loremipsum/loremipsum.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoremipsumComponent);
    return LoremipsumComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-dark fixed-top\" [ngStyle]=\"marginBot\">\n    <a class=\"navbar-brand\" href=\"#\" [ngStyle]=\"whiteclr\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"home\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"features\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"pricing\">Pricing</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"posts\">Posts</a>\n          </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown link\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"action\">Action</a>\n            <a class=\"dropdown-item\" routerLink=\"another\">Another action</a>\n            <a class=\"dropdown-item\" routerLink=\"somethingelsehere\">Something else here</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-md-8\"><router-outlet></router-outlet></div>\n    <div class=\"col-md-4\"><app-sidebar></app-sidebar></div>\n    </div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.whiteclr = { 'color': 'white' };
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\" [ngStyle] = \"marginTop\">\n <h2>Sample Blog  posts works</h2>\n <div *ngFor= \"let post of posts\">\n    <div>\n      <h4>Id:</h4>\n       <span> {{ post.id }}</span>\n    </div>\n\n   <h4>Title:</h4>\n    <a [routerLink]=\"[post.id]\">{{ post.title }}</a>\n\n    <h4>Body:</h4>\n    <span> {{ post.body }}</span><br/><br/>\n <hr>\n  </div>\n   </div>\n\n     \n   "

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        var _this = this;
        this.marginTop = { 'margin-top': '100px' };
        this.posts = [];
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) { return response.json(); })
            .then(function (data) { return _this.posts = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [ngStyle]=\"marginTop\">\n  pricing works!\n</p>\n"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        this.marginTop = { 'margin-top': '100px' };
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"accordion\" id=\"accordionExample\">\n        <div class=\"card\">\n          <div class=\"card-header\" id=\"headingOne\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                Collapsible Group Item #1\n              </button>\n            </h5>\n          </div>\n      \n          <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\" id=\"headingTwo\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                Collapsible Group Item #2\n              </button>\n            </h5>\n          </div>\n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\" id=\"headingThree\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                Collapsible Group Item #3\n              </button>\n            </h5>\n          </div>\n          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/singlepost/singlepost.component.css":
/*!*****************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/singlepost/singlepost.component.html":
/*!******************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngStyle] = \"marginTop\">\n    <h2>Sample Blog  posts works</h2>\n       <div>\n        <!-- <div><h4>Id:</h4> <span> {{ post.id }}</span></div>  -->\n                <div><h4>Title:</h4>  {{ post.title }}</div>\n                <!-- <h4>Body:</h4><span> {{ post.body }}</span><br/><br/> -->\n       <hr>\n     </div>\n   </div>"

/***/ }),

/***/ "./src/app/singlepost/singlepost.component.ts":
/*!****************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.ts ***!
  \****************************************************/
/*! exports provided: SinglepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepostComponent", function() { return SinglepostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SinglepostComponent = /** @class */ (function () {
    function SinglepostComponent(route) {
        var _this = this;
        this.route = route;
        this.marginTop = { "margin-top": '60px' };
        this.post = {};
        this.id = 0;
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(function (response) { return response.json(); })
            .then(function (data) { return _this.post = data; })
            .catch(function (err) { return console.log(err); });
    }
    SinglepostComponent.prototype.ngOnInit = function () {
    };
    SinglepostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singlepost',
            template: __webpack_require__(/*! ./singlepost.component.html */ "./src/app/singlepost/singlepost.component.html"),
            styles: [__webpack_require__(/*! ./singlepost.component.css */ "./src/app/singlepost/singlepost.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SinglepostComponent);
    return SinglepostComponent;
}());



/***/ }),

/***/ "./src/app/somethingelsehere/somethingelsehere.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/somethingelsehere/somethingelsehere.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/somethingelsehere/somethingelsehere.component.html":
/*!********************************************************************!*\
  !*** ./src/app/somethingelsehere/somethingelsehere.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [ngStyle]=\"marginTop\">\n  somethingelsehere works!\n</p>\n"

/***/ }),

/***/ "./src/app/somethingelsehere/somethingelsehere.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/somethingelsehere/somethingelsehere.component.ts ***!
  \******************************************************************/
/*! exports provided: SomethingelsehereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomethingelsehereComponent", function() { return SomethingelsehereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SomethingelsehereComponent = /** @class */ (function () {
    function SomethingelsehereComponent() {
        this.marginTop = { 'margin-top': '100px' };
    }
    SomethingelsehereComponent.prototype.ngOnInit = function () {
    };
    SomethingelsehereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-somethingelsehere',
            template: __webpack_require__(/*! ./somethingelsehere.component.html */ "./src/app/somethingelsehere/somethingelsehere.component.html"),
            styles: [__webpack_require__(/*! ./somethingelsehere.component.css */ "./src/app/somethingelsehere/somethingelsehere.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SomethingelsehereComponent);
    return SomethingelsehereComponent;
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

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\angular5\angularapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map