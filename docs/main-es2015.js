(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/activity-panel/activity-panel.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/activity-panel/activity-panel.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-row>\n    <amexio-column\n                    size=\"3\"\n                    fit=\"false\">\n    <amexio-card\n        [header]=\"true\"\n        [header-align]=\"'left'\"\n        [footer]=\"false\">           \n    <amexio-header>\n                Activity List\n    </amexio-header>\n            <amexio-body>\n                <amexio-listbox\n                [height]=\"425\" \n                [header]=\"'Contacts'\" \n                [search-placeholder]=\"'Search Contacts'\" \n                [data]=\"localData\"\n                [filter]=\"true\" \n                [data-reader]=\"'response.data'\" \n                [display-field]=\"'name_official'\" >\n                </amexio-listbox>\n            </amexio-body>            \n    </amexio-card>\n    </amexio-column>\n    <amexio-column\n                    size=\"9\"\n                    fit=\"false\">\n            <amexio-card\n                [header]=\"true\"\n                [header-align]=\"'left'\"\n                [footer]=\"true\"\n                [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Activity Details\n                    </amexio-header>\n                    <amexio-body>\n                        <form [formGroup]=\"activityForm\">\n                            <amexio-row>\n                                <amexio-column size=\"6\">\n                                    <amexio-text-input formControlName=\"FirstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"  [icon-feedback]=\"false\"\n                                        [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                                <amexio-column size=\"6\">\n                                    <amexio-text-input formControlName=\"LastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\"\n                                        [max-length]=\"20\"\n                                        [icon-feedback]=\"true\" >\n                                    </amexio-text-input>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column size=\"6\">\n                                    <amexio-email-input formControlName=\"Email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                                    </amexio-email-input>\n                                </amexio-column>\n                                <amexio-column size=\"6\">\n                                    <amexio-number-input formControlName=\"Age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\" [max-error-msg]=\"'age can not be greater than 100'\"\n                                        [icon-feedback]=\"true\">\n                                    </amexio-number-input>\n                                </amexio-column>\n                            </amexio-row>\n                        \n\n                        </form>\n                        \n                    </amexio-body>\n                    <amexio-action>\n                        <amexio-button [label]=\"'Save'\" [disabled]=\"!activityForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                        </amexio-button>\n        \n                    </amexio-action>\n            </amexio-card>\n    </amexio-column>\n</amexio-row>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/department-info/department-info.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/department-info/department-info.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-row>\n    <amexio-column\n                    size=\"3\"\n                    fit=\"false\">\n    <amexio-card\n        [header]=\"false\"\n        [header-align]=\"'left'\"\n        [footer]=\"false\">           \n\n            <amexio-body>\n                <amexio-listbox\n                [height]=\"425\" \n                [header]=\"'Department List'\" \n                [search-placeholder]=\"'Search Department'\" \n                [data]=\"localData\"\n                [filter]=\"true\" \n                [data-reader]=\"'response.data'\" \n                [display-field]=\"'name_official'\" >\n                </amexio-listbox>\n            </amexio-body>            \n    </amexio-card>\n    </amexio-column>\n    <amexio-column\n                    size=\"9\"\n                    fit=\"false\">\n            <amexio-card\n                [header]=\"true\"\n                [header-align]=\"'left'\"\n                [footer]=\"true\"\n                [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Department Details\n                    </amexio-header>\n                    <amexio-body>\n                        <form [formGroup]=\"deptForm\">\n                            <amexio-row>\n                                <amexio-column size=\"6\">\n                                    <amexio-text-input formControlName=\"deptName\" [field-label]=\"'Department Name'\" [allow-blank]=\"true\" \n                                      [error-msg]=\"'Please enter valid Department Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter dept name'\" [min-length]=\"2\"  [icon-feedback]=\"false\"\n                                      [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                                <amexio-column size=\"6\">\n                                    <amexio-text-input formControlName=\"mgrName\" [field-label]=\"'Manager Name'\" [place-holder]=\"'Please enter manager name'\" \n                                      [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\"\n                                      [max-length]=\"20\"\n                                      [icon-feedback]=\"true\" >\n                                    </amexio-text-input>\n                                </amexio-column>\n                            </amexio-row>\n                           \n                        \n\n                        </form>\n                        \n                    </amexio-body>\n                    <amexio-action>\n                        <amexio-button [label]=\"'Save'\" [disabled]=\"!deptForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                        </amexio-button>\n                        \n                    </amexio-action>\n            </amexio-card>\n    </amexio-column>\n</amexio-row>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/employee-info/employee-info.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/employee-info/employee-info.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-row>\n    <amexio-column\n                    size=\"3\"\n                    fit=\"false\">\n    <amexio-card\n        [header]=\"false\"\n        [header-align]=\"'left'\"\n        [footer]=\"false\">           \n\n            <amexio-body>\n                <amexio-listbox\n                [height]=\"425\" \n                [header]=\"'Employee List'\" \n                [search-placeholder]=\"'Search Contacts'\" \n                [data]=\"localData\"\n                [filter]=\"true\" \n                [data-reader]=\"'response.data'\" \n                [display-field]=\"'name_official'\" >\n                </amexio-listbox>\n            </amexio-body>            \n    </amexio-card>\n    </amexio-column>\n    <amexio-column\n                    size=\"9\"\n                    fit=\"false\">\n            <amexio-card\n                [header]=\"true\"\n                [header-align]=\"'left'\"\n                [footer]=\"true\"\n                [footer-align]=\"'right'\">\n                    <amexio-header>\n                        Employee Details\n                    </amexio-header>\n                    <amexio-body>\n                        <form [formGroup]=\"employeeForm\">\n                            <amexio-row>\n                                <amexio-column size=\"6\">\n                                    <amexio-text-input formControlName=\"FirstName\" [field-label]=\"'First Name'\" [allow-blank]=\"true\" [error-msg]=\"'Please enter valid First Name'\" [enable-popover]=\"true\" [place-holder]=\"'Please enter first name'\" [min-length]=\"2\"  [icon-feedback]=\"false\"\n                                        [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\" [max-length]=\"20\">\n                                    </amexio-text-input>\n                                </amexio-column>\n                                <amexio-column size=\"6\">\n                                    <amexio-text-input formControlName=\"LastName\" [field-label]=\"'Last Name'\" [place-holder]=\"'Please enter last name'\" [allow-blank]=\"true\" [error-msg]=\"'errorMsg'\" [enable-popover]=\"true\" [min-length]=\"2\" [min-error-msg]=\"'Minimum 2 char allowed'\" [max-error-msg]=\"'Maximum 20 char allowed'\"\n                                        [max-length]=\"20\">\n                                        [icon-feedback]=\"true\" >\n                                    </amexio-text-input>\n                                </amexio-column>\n                            </amexio-row>\n                            <amexio-row>\n                                <amexio-column size=\"6\">\n                                    <amexio-email-input formControlName=\"Email\" [field-label]=\"'Email Id'\" [place-holder]=\"'Please enter Email Id'\" [allow-blank]=\"false\" [error-msg]=\"'Please Enter Email Id'\" [enable-popover]=\"true\" [icon-feedback]=\"true\">\n                                    </amexio-email-input>\n                                </amexio-column>\n                                <amexio-column size=\"6\">\n                                    <amexio-number-input formControlName=\"Age\" [enable-popover]=\"true\" [field-label]=\"'Age'\" [place-holder]=\"'Enter age'\" [error-msg]=\"'Please enter age'\" [min-value]=\"18\" [min-error-msg]=\"'age can not be less than 18'\" [max-value]=\"100\" [max-error-msg]=\"'age can not be greater than 100'\"\n                                        [icon-feedback]=\"true\">\n                                    </amexio-number-input>\n                                </amexio-column>\n                            </amexio-row>\n                        \n\n                        </form>\n                        \n                    </amexio-body>\n                    <amexio-action>\n                        <amexio-button [label]=\"'Save'\" [disabled]=\"!employeeForm.valid\" [type]=\"'green'\" [tooltip]=\"'Save Form'\">\n                        </amexio-button>\n                        \n                    </amexio-action>\n            </amexio-card>\n    </amexio-column>\n</amexio-row>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-homepage-ce [type]=\"'1'\">\n  <amexio-homepage-northpanel>\n    <amexio-nav amexioColorPalette [color-palette]=\"'vibrant'\" [gradient]=\"true\" [transparent]=\"true\" [title]=\"'Amexio Quick Start App'\" \n        class=\"custom-nav\" [enable-side-nav-position]=\"true\" [logo]=\"'assets/images/amexio-logo.png'\">\n  \n    <amexio-nav-item position-right [icon]=\"'fa fa-bell'\" [type]=\"'button'\">\n    </amexio-nav-item> \n    \n    <amexio-nav-item position-right *ngFor=\"let item of usermenu\" [type]=\"'menu'\" [icon]=\"item.icon\"\n        [title]=\"item.name\" [data]=\"item.submenus\" (onNavItemClick)=\"externalLinkClick($event)\">\n    </amexio-nav-item>\n    <amexio-nav-item position-left *ngFor=\"let items of menus\" [type]=\"'menu'\"\n        [title]=\"items.text\" [data]=\"items.submenus\" (onNavItemClick)=\"externalLink($event)\">\n    </amexio-nav-item>\n    \n  </amexio-nav>\n  </amexio-homepage-northpanel>\n  <amexio-homepage-westpanel>\n        <amexio-side-nav [http-url]=\"'assets/data/sidenav.json'\"\n        [http-method]=\"'get'\" [data-reader]=\"'data'\"\n        [width]=\"'275px'\" [position]=\"'relative'\" \n        (nodeClick)=\"getNodeData($event)\">\n    </amexio-side-nav> \n  </amexio-homepage-westpanel>\n  <amexio-homepage-centerpanel>\n        <!-- <app-activity-panel>\n          \n        </app-activity-panel> -->\n        <router-outlet></router-outlet>\n    </amexio-homepage-centerpanel>\n</amexio-homepage-ce>\n<!-- <div class=\"top-nav-padding\">\n    <router-outlet></router-outlet>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<amexio-viewport [type]=\"'2'\" [scrollable]=\"false\">\n  <amexio-viewport-content [scrollable]=\"false\">\n    <amexio-viewport-background [background-color]='white'>\n      <amexio-image [path]=\"'assets/images/notebook.png'\"></amexio-image>\n    </amexio-viewport-background>\n\n    <amexio-viewport-content-body>\n      <amexio-nav\n        amexioColorPalette\n        [color-palette]=\"'vibrant'\"\n        [gradient]=\"true\"\n        [transparent]=\"true\"\n        [enable-side-nav-position]=\"true\"\n        [title]=\"'Amexio Quick Start App'\"\n        [logo]=\"'assets/images/amexio-logo.png'\"\n      >\n      </amexio-nav>\n      <amexio-layout-columns\n        [orientation]=\"'vertical'\"\n        [border]=\"false\"\n        [alignment]=\"'center'\"\n      >\n        <amexio-layout-item>\n          <amexio-layout-columns\n            [fit]=\"true\"\n            [orientation]=\"'horizontal'\"\n            [border]=\"false\"\n            [alignment]=\"'end'\"\n          >\n            <amexio-layout-item> &nbsp; </amexio-layout-item>\n            <amexio-layout-item  class = \"login-page\">\n              <amexio-card-ce amexioThemeStyle [theme-style]=\"'round-edge'\">\n                <amexio-header-ce [border-bottom]=\"true\">\n                  <amexio-label>\n                    SIGN IN\n                  </amexio-label>\n                </amexio-header-ce>\n\n                <amexio-body-ce>\n                  <ng-container>\n                    <form [formGroup]=\"signInGroup\">\n                      <amexio-layout-columns\n                        [border]=\"false\"\n                        [fit]=\"true\"\n                        [alignment]=\"'center'\"\n                        [orientation]=\"'vertical'\"\n                      >\n                        <amexio-layout-item>\n                          <amexio-text-input\n                            formControlName=\"userName\"\n                            [field-label]=\"'User Id'\"\n                            name=\"email\"\n                            [place-holder]=\"'Enter User Id'\"\n                            [allow-blank]=\"false\"\n                            [error-msg]=\"'Please Enter Email Id'\"\n                            [icon-feedback]=\"true\"\n                          >\n                          </amexio-text-input>\n                        </amexio-layout-item>\n                        <amexio-layout-item>\n                          <amexio-password-input\n                            formControlName=\"password\"\n                            [field-label]=\"'Password'\"\n                            name=\"password\"\n                            [place-holder]=\"'Enter password'\"\n                            [allow-blank]=\"false\"\n                            [error-msg]=\"'Please Enter password'\"\n                            [show-password]=\"true\"\n                            [icon-feedback]=\"true\"\n                          >\n                          </amexio-password-input>\n                        </amexio-layout-item>\n                        <amexio-layout-item>\n                          <amexio-label [size]=\"'xsmall'\" [enable-click]=\"true\">\n                            Forgot Password?\n                          </amexio-label>\n                        </amexio-layout-item>\n                      </amexio-layout-columns>\n                    </form>\n                  </ng-container>\n                </amexio-body-ce>\n                <amexio-action-ce border-top=\"true\" [align]=\"'center'\">\n                  <amexio-button\n                    [icon]=\"'fa fa-sign-in'\"\n                    [label]=\"'Sign In'\"\n                    [disabled]=\"!signInGroup.valid\"\n                    [type]=\"'theme-color'\"\n                    (onClick)=\"loginHandle()\"\n                    [tooltip]=\"'Login'\"\n                    [block]=\"true\"\n                  >\n                  </amexio-button>\n                </amexio-action-ce>\n              </amexio-card-ce>\n            </amexio-layout-item>\n            <amexio-layout-item> &nbsp;</amexio-layout-item>\n          </amexio-layout-columns>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n    </amexio-viewport-content-body>\n  </amexio-viewport-content>\n  <amexio-spinner\n    [show]=\"showLoader\"\n    [type]=\"'rectanglebounce'\"\n    [vertical-position]=\"'center'\"\n    [horizontal-position]=\"'center'\"\n    [color]=\"'blue'\"\n  >\n  </amexio-spinner\n></amexio-viewport>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _component_activity_panel_activity_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/activity-panel/activity-panel.component */ "./src/app/component/activity-panel/activity-panel.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/route.guard.service */ "./src/app/services/route.guard.service.ts");
/* harmony import */ var _component_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/employee-info/employee-info.component */ "./src/app/component/employee-info/employee-info.component.ts");
/* harmony import */ var _component_department_info_department_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/department-info/department-info.component */ "./src/app/component/department-info/department-info.component.ts");









const routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'home', canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]], component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [
            {
                path: 'activity', canLoad: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]], component: _component_activity_panel_activity_panel_component__WEBPACK_IMPORTED_MODULE_1__["ActivityPanelComponent"],
            },
            {
                path: 'emp', canLoad: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]], component: _component_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeInfoComponent"],
            },
            {
                path: 'dept', canLoad: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]], component: _component_department_info_department_info_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentInfoComponent"]
            },
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'QuickStartApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/route.guard.service */ "./src/app/services/route.guard.service.ts");
/* harmony import */ var _component_activity_panel_activity_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/activity-panel/activity-panel.component */ "./src/app/component/activity-panel/activity-panel.component.ts");
/* harmony import */ var _component_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/employee-info/employee-info.component */ "./src/app/component/employee-info/employee-info.component.ts");
/* harmony import */ var _component_department_info_department_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/department-info/department-info.component */ "./src/app/component/department-info/department-info.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _component_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _component_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _component_activity_panel_activity_panel_component__WEBPACK_IMPORTED_MODULE_14__["ActivityPanelComponent"],
            _component_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeInfoComponent"],
            _component_department_info_department_info_component__WEBPACK_IMPORTED_MODULE_16__["DepartmentInfoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioEnterpriseModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_5__["AmexioWidgetModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ],
        providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"], _services_route_guard_service__WEBPACK_IMPORTED_MODULE_13__["RouteGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/activity-panel/activity-panel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/component/activity-panel/activity-panel.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hY3Rpdml0eS1wYW5lbC9hY3Rpdml0eS1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/activity-panel/activity-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/activity-panel/activity-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: ActivityPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPanelComponent", function() { return ActivityPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ActivityPanelComponent = class ActivityPanelComponent {
    constructor(fb) {
        this.fb = fb;
        this.localData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name_official": "John Doe",
                    },
                    {
                        "name_official": "Jack Doe",
                    },
                    {
                        "name_official": "Jenny Doe",
                    },
                    {
                        "name_official": "Kenny Doe",
                    },
                    {
                        "name_official": "Bunny Doe",
                    },
                    {
                        "name_official": "Jill Doe",
                    }
                ]
            }
        };
        this.activityForm = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
};
ActivityPanelComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ActivityPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/activity-panel/activity-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-panel.component.scss */ "./src/app/component/activity-panel/activity-panel.component.scss")).default]
    })
], ActivityPanelComponent);



/***/ }),

/***/ "./src/app/component/department-info/department-info.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/department-info/department-info.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kZXBhcnRtZW50LWluZm8vZGVwYXJ0bWVudC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/department-info/department-info.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/department-info/department-info.component.ts ***!
  \************************************************************************/
/*! exports provided: DepartmentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentInfoComponent", function() { return DepartmentInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let DepartmentInfoComponent = class DepartmentInfoComponent {
    constructor(fb) {
        this.fb = fb;
        this.localData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name_official": "CXO",
                    },
                    {
                        "name_official": "Admin",
                    },
                    {
                        "name_official": "HR",
                    },
                    {
                        "name_official": "IT",
                    }
                ]
            }
        };
        this.deptForm = this.fb.group({
            deptName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            mgrName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
        });
    }
    ngOnInit() {
    }
};
DepartmentInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
DepartmentInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-department-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/department-info/department-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department-info.component.scss */ "./src/app/component/department-info/department-info.component.scss")).default]
    })
], DepartmentInfoComponent);



/***/ }),

/***/ "./src/app/component/employee-info/employee-info.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/employee-info/employee-info.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9lbXBsb3llZS1pbmZvL2VtcGxveWVlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/employee-info/employee-info.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/employee-info/employee-info.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeInfoComponent", function() { return EmployeeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let EmployeeInfoComponent = class EmployeeInfoComponent {
    constructor(fb) {
        this.fb = fb;
        this.localData = {
            "response": {
                "success": true,
                "message": "Fetching  Data  Request Succeeded: Profile",
                "data": [
                    {
                        "name_official": "John Doe",
                    },
                    {
                        "name_official": "Jack Doe",
                    },
                    {
                        "name_official": "Jenny Doe",
                    },
                    {
                        "name_official": "Kenny Doe",
                    },
                    {
                        "name_official": "Bunny Doe",
                    },
                    {
                        "name_official": "Jill Doe",
                    }
                ]
            }
        };
        this.employeeForm = this.fb.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
        });
    }
    ngOnInit() {
    }
};
EmployeeInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EmployeeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/employee-info/employee-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-info.component.scss */ "./src/app/component/employee-info/employee-info.component.scss")).default]
    })
], EmployeeInfoComponent);



/***/ }),

/***/ "./src/app/component/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let HomeComponent = class HomeComponent {
    constructor(_route, hService, cookieService) {
        this._route = _route;
        this.hService = hService;
        this.cookieService = cookieService;
        this.menus = [];
        this.subnavmenus = [];
        this.getMenuList();
        this.subnavmenus =
            [
                {
                    'text': 'My Profile',
                },
                {
                    'text': 'Logout',
                }
            ];
    }
    ngOnInit() {
        // Need to change --- Doubt
        this.title = 'Hello,' + ' ' + 'John Doe';
    }
    onMenuClick(node) {
        if (node.hasOwnProperty('link') && node.link != null && node.link != '') {
            this._route.navigate([node.link]);
        }
    }
    userAction(data) {
        if (data.name == 'Logout') {
            this._route.navigate(['login']);
            this.cookieService.delete('tokenId');
        }
    }
    getMenuList() {
        let responseData;
        this.hService.fetch('assets/data/navmenu.json', 'get').subscribe((res) => {
            responseData = res;
        }, (error) => {
        }, () => {
            if (responseData) {
                this.menus = responseData;
            }
        });
        this.hService.fetch('assets/data/navusermenu.json', 'get').subscribe((res) => {
            responseData = res;
        }, (error) => {
        }, () => {
            if (responseData) {
                this.usermenu = responseData;
            }
        });
    }
    externalLink(event) {
    }
    externalLinkClick(event) {
        console.log(event);
        if (event.data.text == 'Logout') {
            this._route.navigate(['login']);
            this.cookieService.delete('tokenId');
        }
    }
    getNodeData(data) {
        console.log(data.link);
        if (data.hasOwnProperty('link')) {
            this._route.navigate([data.link]);
        }
        else {
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nav', { static: true })
], HomeComponent.prototype, "tab", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/component/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let LoginComponent = class LoginComponent {
    constructor(fb, route, cookieService) {
        this.fb = fb;
        this.route = route;
        this.cookieService = cookieService;
        this.showLoader = false;
    }
    ngOnInit() {
        this.validateSigninform();
    }
    validateSigninform() {
        this.signInGroup = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    loginHandle() {
        this.cookieService.set('tokenId', new Date().getTime() + '');
        this.route.navigate(['home']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let HttpService = class HttpService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    fetch(serviceUrl, methodType) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8').append('tokenid', this.cookieService.get('tokenId'));
        if (methodType === 'post') {
            return this.http.post(serviceUrl, methodType);
        }
        else if (methodType === 'get') {
            return this.http.get(serviceUrl, { headers });
        }
    }
    post(serviceUrl, methodType, requestJson) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json;charset=UTF-8').append('tokenid', this.cookieService.get('tokenId'));
        if (methodType === 'post') {
            return this.http.post(serviceUrl, requestJson, { headers });
        }
        else if (methodType === 'get') {
            return this.http.get(serviceUrl);
        }
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/services/route.guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/route.guard.service.ts ***!
  \*************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let RouteGuardService = class RouteGuardService {
    constructor(_cookieService, router) {
        this._cookieService = _cookieService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this._cookieService.get('tokenId')) {
            return true;
        }
        else {
            return false;
        }
    }
    canLoad(route) {
        if (this._cookieService.get('tokenId')) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
        //throw new Error("Method not implemented.");
    }
};
RouteGuardService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RouteGuardService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/meta-magic/amexio-quick-start-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);