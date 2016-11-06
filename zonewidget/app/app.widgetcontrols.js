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
var core_1 = require('@angular/core');
var configurations_1 = require('./configurations');
var WidgetControls = (function () {
    function WidgetControls() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', configurations_1.DonutConf)
    ], WidgetControls.prototype, "conf", void 0);
    WidgetControls = __decorate([
        core_1.Component({
            selector: 'widget-controls',
            template: "<div class=\"inputcontainer\">\n                <label for=\"arc\">Arc</label>\n                <input type=\"text\" class=\"form-control\" id=\"arc\"\n                      [(ngModel)]=\"conf.arclength\" name=\"arclength\">\n             </div>\n             <div class=\"inputcontainer\">\n                <label for=\"arc\">Start</label>\n                <input type=\"text\" class=\"form-control\" id=\"arc\">\n             </div>\n             <div class=\"inputcontainer\">\n                <label for=\"arc\">End</label>\n                <input type=\"text\" class=\"form-control\" id=\"arc\">\n             </div>",
            styles: [".inputcontainer{padding: 10px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetControls);
    return WidgetControls;
}());
exports.WidgetControls = WidgetControls;
//# sourceMappingURL=app.widgetcontrols.js.map