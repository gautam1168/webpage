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
var DeltaComponent = (function () {
    function DeltaComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', configurations_1.DeltaConf)
    ], DeltaComponent.prototype, "conf", void 0);
    DeltaComponent = __decorate([
        core_1.Component({
            selector: '[delta-component]',
            template: "<svg:defs>\n                <svg:marker id=\"Triangle\" viewBox=\"0 0 10 10\" refX=\"1\" refY=\"5\"\n                    markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\" fill=\"white\">\n                    <path d=\"M 0 0 L 10 5 L 0 10 z\" />\n                </svg:marker>\n             </svg:defs>\n             <svg:line [attr.x1]=\"conf.xpos+5\" [attr.y1]=\"conf.start\"\n                       [attr.x2]=\"conf.xpos+5\" [attr.y2]=\"conf.end-3\"\n                       style=\"stroke-width: 0.5; stroke: white\"\n                       marker-end=\"url(#Triangle)\"\n                       ></svg:line>\n             <svg:text [attr.x]=\"conf.xpos+7\"\n                       [attr.y]=\"(conf.start + conf.end)*0.5 + 1\" font-family=\"Verdana\"\n                       font-size=\"5\" fill=\"white\">\n                       {{conf.start - conf.end}}%\n            </svg:text>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], DeltaComponent);
    return DeltaComponent;
}());
exports.DeltaComponent = DeltaComponent;
//# sourceMappingURL=app.deltacomponent.js.map