webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.sidebar {\n\theight: 100vh;\n\tbackground-color: #1a1a1a;\n}\n\ndiv.mainarea {\n\tbackground-color: #212121;\n\tpadding-left: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container-fluid\">\n  <!-- <div class=\"row\" style=\"border: solid 1px\">TARANG</div> -->\n  <div class=\"row\">\n  \t<div class=\"sidebar col-lg-2\">\n  \t\t<app-sidebar></app-sidebar>\n  \t</div>\n  \t<div class=\"mainarea col-lg-10\">\n  \t\t<router-outlet></router-outlet>\n  \t</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_settings_program_settings_component__ = __webpack_require__("../../../../../src/app/program-settings/program-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__field_settings_field_settings_component__ = __webpack_require__("../../../../../src/app/field-settings/field-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toggle_switch_toggle_switch_component__ = __webpack_require__("../../../../../src/app/toggle-switch/toggle-switch.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'program', component: __WEBPACK_IMPORTED_MODULE_5__program_settings_program_settings_component__["a" /* ProgramSettingsComponent */] },
    { path: 'field', component: __WEBPACK_IMPORTED_MODULE_8__field_settings_field_settings_component__["a" /* FieldSettingsComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__program_settings_program_settings_component__["a" /* ProgramSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__field_settings_field_settings_component__["a" /* FieldSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__toggle_switch_toggle_switch_component__["a" /* ToggleSwitchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__settings_service__["a" /* SettingsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/field-settings/field-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/field-settings/field-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>FIELD</h1>\n<br/>\nN: <input type=\"text\" name=\"N\"/>\n<br/>\nK: <input type=\"text\" name=\"N\"/>\n<br/>\nL:<input type=\"text\" name=\"N\"/>"

/***/ }),

/***/ "../../../../../src/app/field-settings/field-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldSettingsComponent = /** @class */ (function () {
    function FieldSettingsComponent() {
    }
    FieldSettingsComponent.prototype.ngOnInit = function () {
    };
    FieldSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-field-settings',
            template: __webpack_require__("../../../../../src/app/field-settings/field-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/field-settings/field-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FieldSettingsComponent);
    return FieldSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/program-settings/program-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textwhite {\n\tcolor: #ffffff;\n\tfont-family: sans-serif;\n}\n\n.formcontent {\n\toverflow-y: scroll;\n\theight: 800px;\n}\n\n.allcontent {\n\tpadding-top: 40px;\n}\n\n.textgrey {\n\tcolor: #808080;\n}\n\nselect {\n\tbackground-color: #464545;\n\theight: 30px;\n\tborder: solid 1px;\n\tborder-color: #000000;\n\tcolor: #aba9a9;\n}\n\n.description {\n\tborder: solid 1px;\n\tmin-height: 800px;\n\tborder-top: none;\n\tborder-right: none;\n\tborder-bottom: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/program-settings/program-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"allcontent row\">\n\t<div class=\"formcontent col-lg-7\">\n\t\t<h1 class=\"textwhite topheading\">Program</h1>\n\n\t\t<ng-container *ngFor=\"let conf of configurationNames\">\n\t\t\t<span class=\"textgrey\">{{ conf }}</span>\n\t\t\t<br *ngIf=\"isDropdown(conf)\"/>\n\t\t\t<select *ngIf=\"isDropdown(conf)\" (change)=\"showDescription(conf)\">\n\t\t\t\t<option *ngFor=\"let value of configuration[conf].possibleValues\">\n\t\t\t\t\t{{ value }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<app-toggle-switch *ngIf=\"!isDropdown(conf)\"\n\t\t\t\t[Option1]=\"configuration[conf].possibleValues[0]\"\n\t\t\t\t[Option2]=\"configuration[conf].possibleValues[1]\">\n\t\t\t</app-toggle-switch>\n\t\t\t<br/>\n\t\t\t<br/>\n\t\t</ng-container>\n\n\t</div>\n\t<div class=\"col-lg-5 textgrey description\"\n\t\t[innerHtml]=\"configuration[descriptionConf].description\">\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/program-settings/program-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Switch = /** @class */ (function () {
    function Switch() {
    }
    Switch.prototype.Switch = function () { };
    ;
    return Switch;
}());
var Select = /** @class */ (function () {
    function Select() {
        this.possibleValues = [];
    }
    Select.prototype.Select = function () { };
    ;
    return Select;
}());
var ProgramSettingsComponent = /** @class */ (function () {
    function ProgramSettingsComponent(settings) {
        this.settings = settings;
        this.configuration = {
            kind: new Select(),
            basis_type: new Select(),
            decomposition: new Select(),
            iter_or_diag: new Switch(),
            alias_option: new Switch(),
            integration_scheme: new Select(),
            LES_switch: new Switch(),
            apply_strong_realitycond_alltime_switch: new Switch(),
            apply_weak_realitycond_alltime_switch: new Switch(),
            low_dimension_switch: new Switch(),
            two_and_half_dimension: new Switch(),
            two_dimension: new Switch(),
            dt_option: new Switch(),
            helicity_switch: new Switch(),
            sincostr_switch: new Switch()
        };
        this.configurationNames = Object.keys(this.configuration);
    }
    ProgramSettingsComponent.prototype.onSelectKind = function (kind) {
        console.log(kind);
        if (kind == "MHD") {
            this.configuration.basis_type.possibleValues = ["SFF"];
        }
        else {
            this.configuration.basis_type.possibleValues = ["FFF", "SSS"];
        }
    };
    ProgramSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.refreshKinds();
        }, 1000);
    };
    ProgramSettingsComponent.prototype.refreshKinds = function () {
        for (var i = 0; i < this.configurationNames.length; i++) {
            var key = this.configurationNames[i];
            this.configuration[key].possibleValues = this.settings[key].values;
            this.configuration[key].description = this.settings[key].description;
        }
        this.descriptionConf = this.configurationNames[0];
    };
    ProgramSettingsComponent.prototype.showDescription = function (conf) {
        this.descriptionConf = conf;
    };
    ProgramSettingsComponent.prototype.isDropdown = function (conf) {
        return this.configuration[conf] instanceof Select;
    };
    ProgramSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-program-settings',
            template: __webpack_require__("../../../../../src/app/program-settings/program-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/program-settings/program-settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]])
    ], ProgramSettingsComponent);
    return ProgramSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        var _this = this;
        this.http = http;
        this.http.get("./assets/programConfig.json").subscribe(function (conf) {
            var keys = Object.keys(conf.program);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                _this[key] = conf.program[key];
            }
        });
    }
    SettingsService.prototype.GetKinds = function () {
        return this.kind;
    };
    SettingsService.prototype.GetBasisTypes = function () {
        return this.basis_type;
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.settingsmenu {\n\tlist-style: none;\n\tpadding-left: 0px;\n\tpadding-top: 20px;\n}\n\nli.menuitem {\n\tmargin-left: -15px;\n\tmargin-right: -15px;\n\tmargin-top: 8px;\n\tpadding-left: 20px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n}\n\nli.menuitem > a {\n\tcolor: #808080;\n}\n\nli.menuitem.active {\n\tbackground-color: #212121;\n}\n\nli.menuitem.active > a {\n\tcolor: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"settingsmenu\">\n\t<li style=\"padding-left: 30px; margin-bottom: 20px;\">\n\t\t<img src=\"assets/logo.png\" style=\"width: 80%\"/>\n\t</li>\n\t<li class=\"menuitem\" *ngFor=\"let setting of settings\" routerLinkActive=\"active\">\n\t\t<a  [routerLink]=\"setting.path\">\n\t\t\t<span class=\"glyphicon glyphicon-pencil\"></span>\n\t\t\t<span> {{ setting.name }} </span>\n\t\t</a>\n\t</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.settings = [
            { name: "PROGRAM", path: "/program" },
            { name: "FIELD", path: "/field" },
            { name: "PHYSICS", path: "/physics" },
            { name: "TIME", path: "/path" },
            { name: "FINISH", path: "/finish" }
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/toggle-switch/toggle-switch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widgetcontainer {\n\tborder: solid 1px black;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\tpadding: 2px;\n\tbackground-color: #2c97de;\n\theight: 36px;\n\tborder-radius: 3px;\n}\n\ndiv.option {\n\tfloat: left;\n\tdisplay: inline;\n\tmargin: 1px;\n\tpadding: 2px;\n\tbackground-color: #464545;\n\tcolor: #848080;\n\tborder-radius: 3px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n}\n\ndiv.option.active {\n\tpadding: 2px;\n\tbackground-color: #2c97de;\n\tcolor: #d4eefb;\n\tborder-radius: 3px;\n}\n\ndiv.option.two::after {\n\tclear: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toggle-switch/toggle-switch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widgetcontainer\" (click)=\"toggle()\">\n\t<div class=\"option one\" [ngClass]=\"{ 'active': Opt1Active }\"> {{ Option1 }} </div>\n\t<div class=\"option two\" [ngClass]=\"{ 'active': !Opt1Active }\"> {{ Option2 }} </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/toggle-switch/toggle-switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleSwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleSwitchComponent = /** @class */ (function () {
    function ToggleSwitchComponent() {
        this.toggleEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.Opt1Active = true;
        this.Option1 = "Option1";
        this.Option2 = "Option2";
    }
    ToggleSwitchComponent.prototype.ngOnInit = function () {
    };
    ToggleSwitchComponent.prototype.toggle = function () {
        this.Opt1Active = !this.Opt1Active;
        if (this.Opt1Active) {
            this.toggleEvent.emit(this.Option1);
        }
        else {
            this.toggleEvent.emit(this.Option2);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ToggleSwitchComponent.prototype, "Option1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ToggleSwitchComponent.prototype, "Option2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ToggleSwitchComponent.prototype, "toggleEvent", void 0);
    ToggleSwitchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toggle-switch',
            template: __webpack_require__("../../../../../src/app/toggle-switch/toggle-switch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toggle-switch/toggle-switch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleSwitchComponent);
    return ToggleSwitchComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map