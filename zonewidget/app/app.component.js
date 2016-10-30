"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.bgcolor = "#202022";
        this.dconf = {
            x: "50", y: "50", r1: "25", r2: "35",
            fill: "white", centerfill: this.bgcolor,
            arclength: 60, strokecolor: "#82EAAF"
        };
        this.zconf = [
            { start: 0, end: 20, x: 100, width: 99, fill: "#009581" },
            { start: 21, end: 40, x: 100, width: 99, fill: "#00B28C" },
            { start: 41, end: 60, x: 100, width: 99, fill: "#00CA86" },
            { start: 61, end: 80, x: 100, width: 99, fill: "#82EAAF" },
            { start: 81, end: 100, x: 100, width: 99, fill: "#C3FFBD" }
        ];
        this.conf = {
            width: "800",
            height: "410",
            bgcolor: this.bgcolor,
            viewbox: "0 0 200 100"
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        //Force the viewbox values
        this.conf.viewbox = "0 0 200 100";
        this.dconf.x = "50";
        this.dconf.y = "50";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>My First Angular App {{metervalue}} fs</h1>\n\t  \t\t<div>\n\t\t\t\t    <svg attr.width={{conf.width}} attr.height={{conf.height}}\n                  [attr.viewBox]=\"conf.viewbox\"\n\t\t\t\t \t        [style.background-color]=\"conf.bgcolor\">\n                  <g donut-chart [conf]=\"dconf\"></g>\n                  <g zone-label [rectconfs]=\"zconf\"></g>\n\t\t\t\t    </svg>\n\t     \t</div>\n\t    \t"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map