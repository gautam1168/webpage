"use strict";

//XY environment class
//------------------------------------------------------------------------------
var XYEnvironment = function(width, height){
    this.width = width;
    this.height = height;
    this.canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
}

XYEnvironment.prototype.Render = function(elem){
    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);

    elem.appendChild(this.canvas);
}
//------------------------------------------------------------------------------

//Thing class (there is no such thing as abstract in JS so this too can be
//instantiated)
//------------------------------------------------------------------------------
var Thing = function(x, y, width, height){
    this.elemtype = "rect";
    this.elemattrs = ["x", "y", "width", "height"];
    this.attrvals = [x, y, width, height];
    this.svgelem = document.createElementNS("http://www.w3.org/2000/svg",
                                                                this.elemtype);
    this.svgelem.setAttribute("x", x);
    this.svgelem.setAttribute("y", y);
    this.svgelem.setAttribute("width", width);
    this.svgelem.setAttribute("height", height);
}

Thing.prototype.Display = function(env){
    env.canvas.appendChild(this.svgelem);
}
//------------------------------------------------------------------------------

//Simple Agent class
//------------------------------------------------------------------------------
function Agent(x, y){
    Thing.call(this, x, y, 20, 20);
    this.svgelem = document.createElementNS("http://www.w3.org/2000/svg",
                                                                    "polygon");
    this.svgelem.setAttribute("points", String(x)+","+String(y)+" "+
                                        String(x+20)+","+String(y)+" "+
                                        String(x+10)+","+String(y+20));
}
Agent.prototype = Object.create(Thing.prototype);
Agent.prototype.constructor = Agent;

Agent.prototype.Display = function(env){
    env.canvas.appendChild(this.svgelem);
}
//------------------------------------------------------------------------------
