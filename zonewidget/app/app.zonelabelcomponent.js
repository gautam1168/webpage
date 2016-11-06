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
var ZoneLabelComponent = (function () {
    function ZoneLabelComponent() {
    }
    ZoneLabelComponent.prototype.ngOnInit = function () {
        this.deltaconf = {
            start: 30, end: 50,
            xpos: this.rectconfs[0].x + this.rectconfs[0].width - 25
        };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ZoneLabelComponent.prototype, "rectconfs", void 0);
    ZoneLabelComponent = __decorate([
        core_1.Component({
            selector: '[zone-label]',
            template: "<svg:rect *ngFor=\"let conf of rectconfs; let i = index\"\n                        [attr.x]=\"conf.x\" [attr.y]=\"conf.start\"\n                        [attr.width]=\"conf.width\"\n                        [attr.height]=\"conf.end - conf.start\"\n                        [attr.fill]=\"conf.fill\">\n             </svg:rect>\n             <svg:text *ngFor=\"let conf of rectconfs\"\n                        [attr.x]=\"conf.x + 6\"\n                        [attr.y]=\"(conf.start + conf.end)*0.5 + 5\" font-family=\"Verdana\"\n                        font-size=\"10\" fill=\"white\">\n                        {{conf.start}}%-{{conf.end}}%\n             </svg:text>\n             <svg:g delta-component [conf]=\"deltaconf\"></svg:g>\n             "
        }), 
        __metadata('design:paramtypes', [])
    ], ZoneLabelComponent);
    return ZoneLabelComponent;
}());
exports.ZoneLabelComponent = ZoneLabelComponent;
//# sourceMappingURL=app.zonelabelcomponent.js.map