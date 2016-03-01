"use strict";
//TrivialVacuumEnvironment
//------------------------------------------------------------------------------
var TrivialVacuumEnvironment = function(width, height){
    this.width = width;
    this.height = height;
    var locvala = Math.random();
    var locvalb = Math.random();
    this.status = [locvala > 0.5 ? "Clean":"Dirty",
                   locvalb > 0.5 ? "Clean":"Dirty"];
    this.canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.squares = [];
}

TrivialVacuumEnvironment.prototype.Render = function(elem){
    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
    var i;
    for (i=0; i<2; i++){
        this.squares.push(document.createElementNS("http://www.w3.org/2000/svg",
                                                                    "rect"));
        this.squares[i].setAttribute("x", i*this.width/2);
        this.squares[i].setAttribute("y", 0);
        this.squares[i].setAttribute("width", this.width/2);
        this.squares[i].setAttribute("height", this.height);
        if (this.status[i] == "Clean"){
            this.squares[i].setAttribute("fill", "white");
        }
        this.canvas.appendChild(this.squares[i]);
    }

    elem.appendChild(this.canvas);
}
//------------------------------------------------------------------------------

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
