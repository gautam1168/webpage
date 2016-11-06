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
var configurations_1 = require("./configurations");
var DonutComponent = (function () {
    function DonutComponent() {
        this.floor = Math.floor;
    }
    DonutComponent.prototype.calcPath = function () {
        //Calculate the path for filling circle
        var path = "";
        // "'M50 20 A30 30 0 0, 1 80 50'"
        var arctype; //0 means the smaller arc and 1 means the bigger one
        if (this.conf.arclength > 180) {
            arctype = 1;
        }
        else {
            arctype = 0;
        }
        path += "M50 20 A30 30 0 " + arctype + ", 1 ";
        var arcInRads = (this.conf.arclength) * Math.PI / 180;
        var xcoord, ycoord;
        xcoord = 50 + 30 * Math.sin(arcInRads);
        ycoord = 50 - 30 * Math.cos(arcInRads);
        path += xcoord.toString() + " " + ycoord.toString();
        return path;
    };
    DonutComponent.prototype.ngOnInit = function () {
        //Calculate text position
        this.textXcoord = parseInt(this.conf.x) - 0.6 * parseInt(this.conf.r1);
        this.textYcoord = parseInt(this.conf.y) + 0.2 * parseInt(this.conf.r1);
    };
    return DonutComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", configurations_1.DonutConf)
], DonutComponent.prototype, "conf", void 0);
DonutComponent = __decorate([
    core_1.Component({
        selector: "[donut-chart]",
        template: "<svg:circle [attr.cx]=\"conf.x\" [attr.cy]=\"conf.y\"\n                       [attr.r]=\"conf.r2\" [attr.fill]=\"conf.fill\">\n             </svg:circle>\n             <svg:circle [attr.cx]=\"conf.x\" [attr.cy]=\"conf.y\"\n                       [attr.r]=\"conf.r1\" [attr.fill]=\"conf.centerfill\">\n             </svg:circle>\n             <svg:path [attr.d]=\"calcPath()\" stroke-linecap=\"round\"\n                       style=\"fill:none; stroke-width: 9\"\n                       [style.stroke]=\"conf.strokecolor\">\n             </svg:path>\n             <svg:text [attr.x]=\"textXcoord\"\n                       [attr.y]=\"textYcoord\" font-family=\"Verdana\"\n                        font-size=\"15\" fill=\"white\">\n                        {{floor(conf.arclength/3.6)}}%\n             </svg:text>\n             ",
        animations: [
            core_1.trigger('onload', [
                core_1.state('void', core_1.style({ fill: "black" })),
                core_1.state('*', core_1.style({ fill: "red" })),
                core_1.transition('void => *', core_1.animate('100ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], DonutComponent);
exports.DonutComponent = DonutComponent;
//# sourceMappingURL=app.donutcomponent.js.map