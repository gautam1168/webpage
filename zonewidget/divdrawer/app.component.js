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
var DrawAreaState = (function () {
    function DrawAreaState() {
    }
    return DrawAreaState;
}());
exports.DrawAreaState = DrawAreaState;
var Coords = (function () {
    function Coords() {
    }
    return Coords;
}());
exports.Coords = Coords;
var Position = (function () {
    function Position() {
    }
    return Position;
}());
exports.Position = Position;
var AppComponent = (function () {
    function AppComponent() {
        this.dstate = {
            uuidseed: 0,
            height: 500, width: 1370,
            resolution: [3, 3],
            widgets: [
                [[0], [0], [0]],
                [[0], [0], [0]],
                [[0], [0], [0]]
            ]
        };
    }
    AppComponent.prototype.uuid = function () {
        this.dstate.uuidseed += 1;
        return this.dstate.uuidseed;
    };
    AppComponent.prototype.logMouseCoords = function (evt) {
        var cellIndices = this.mapCoordToCell(evt.offsetX, evt.offsetY);
        this.insertWidget(cellIndices, this.uuid());
        console.log(this.dstate.widgets);
        console.log(this.cellPosition(cellIndices));
    };
    AppComponent.prototype.mapCoordToCell = function (xcoord, ycoord) {
        var cellIndices = { x: 0, y: 0 };
        cellIndices.x = Math.floor(xcoord / (this.dstate.width / this.dstate.resolution[0]));
        cellIndices.y = Math.floor(ycoord / (this.dstate.height / this.dstate.resolution[1]));
        return cellIndices;
    };
    AppComponent.prototype.insertWidget = function (cellIndices, widgetIndex, widgetLevel) {
        if (widgetLevel === void 0) { widgetLevel = 0; }
        this.dstate.widgets[cellIndices.y][cellIndices.x][widgetLevel] = widgetIndex;
    };
    AppComponent.prototype.cellPosition = function (cellIndices) {
        var cellpos = new Position();
        cellpos.width = this.dstate.width / this.dstate.resolution[0];
        cellpos.height = this.dstate.height / this.dstate.resolution[1];
        cellpos.top = cellIndices.y * cellpos.height;
        cellpos.left = cellIndices.x * cellpos.width;
        return cellpos;
    };
    AppComponent.prototype.getWidgets = function () {
        var widgets = [];
        var widindex = 0;
        for (var i = 0; i < this.dstate.resolution[1]; i++) {
            for (var j = 0; j < this.dstate.resolution[0]; j++) {
                if (this.dstate.widgets[i][j][0] > 0) {
                    widgets[widindex] = this.cellPosition({ x: j, y: i });
                }
                widindex += 1;
            }
        }
        console.log(widgets);
        return widgets;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Div Drawer</h1>\n            <div class=\"drawarea\" [style.height]=\"dstate.height\"\n                 [style.width]=\"dstate.width\"\n                 (click)=\"logMouseCoords($event)\">\n                 <div *ngFor=\"let widget of getWidgets()\" [style.position]=\"absolute\"\n                  [style.top]=\"widget.top\" [style.left]=\"widget.left\"\n                  [style.width]=\"widget.width\" [style.height]=\"widget.height\"\n                  class=\"widgetblock\"></div>\n            </div>\n            ",
        styles: ["\n            .drawarea{\n                border: solid 2px #ccc;\n            }\n            .widgetblock{\n                border: solid 1px red;\n            }\n          "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map