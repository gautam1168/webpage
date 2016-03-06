"use strict";
//TrivialVacuumEnvironment
//------------------------------------------------------------------------------
var TrivialVacuumEnvironment = function(width, height){
    this.canvwidth = width;
    this.canvheight = height;
    this.agents = [];
    this.things = [];
    var locvala = Math.random();
    var locvalb = Math.random();
    this.stat = ["Dirty", "Dirty"];
    this.canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.squares = [];
}

TrivialVacuumEnvironment.prototype.Render = function(elem){
    this.canvas.setAttribute("width", this.canvwidth);
    this.canvas.setAttribute("height", this.canvheight);
    var i;
    for (i=0; i<2; i++){
        this.squares.push(document.createElementNS("http://www.w3.org/2000/svg",
                                                                    "rect"));
        this.squares[i].setAttribute("x", i*this.canvwidth/2);
        this.squares[i].setAttribute("y", 0);
        this.squares[i].setAttribute("width", this.canvwidth/2-19);
        this.squares[i].setAttribute("height", this.canvheight-19);
        if (this.stat[i] == "Clean"){
            this.squares[i].setAttribute("fill", "white");
        }
        else{
            this.squares[i].setAttribute("fill", "grey");
        }
        this.canvas.appendChild(this.squares[i]);
    }
    elem.appendChild(this.canvas);
}

TrivialVacuumEnvironment.prototype.AddThing = function(thing, location){
    thing.location = location;
    if (thing instanceof Agent){
        this.agents.push(thing);
        this.things.push(thing);
        thing.Display(this);
    }
    else if(thing instanceof Thing){
        this.things.push(thing);
        thing.Display(this);
    }
    else{
        alert("TrivialVacuumEnvironment doesn't support this thing.");
    }
}

TrivialVacuumEnvironment.prototype.RemoveThing = function(thing){
    var index;
    if (thing instanceof Agent){
        index = this.agents.indexOf(thing);
        if (index > -1){this.agents.splice(index, 1)};
        index = this.things.indexOf(thing);
        if (index > -1){this.things.splice(index, 1)};
    }
    else if (thing instanceof Thing){
        index = this.things.indexOf(thing);
        if (index > -1){this.things.splice(index, 1)};
    }
    else{
        alert("Cannot remove thing that doesn't exist");
    }

    this.canvas.removeChild(thing.svgelem);
}

TrivialVacuumEnvironment.prototype.Percept = function(agent){
    var perceptkey = "";
    perceptkey += this.stat[agent.location[0]] + String(agent.location[0]);
    return perceptkey;
}

TrivialVacuumEnvironment.prototype.Cleanse = function(location){
    this.squares[location].setAttribute("fill", "white");
    this.stat[location] = "Clean";
}

TrivialVacuumEnvironment.prototype.Dirtyfy = function(location){
    this.squares[location].setAttribute("fill", "#565656");
    this.stat[location] = "Dirty";
}

TrivialVacuumEnvironment.prototype.ExecuteAction = function(agent, action){
    if (action[0] == 'Left'){
        agent.MoveTo([0,0]);
        agent.performance += action[1];
    }
    else if (action[0] == 'Right'){
        agent.MoveTo([1,0]);
        agent.performance += action[1];
    }
    else if (action[0] == 'Suck'){
        if (this.stat[agent.location[0]] == 'Dirty'){
            agent.performance += action[1];
        }
        this.Cleanse(agent.location[0]);
    }
}

TrivialVacuumEnvironment.prototype.Default_location = function(){
    return Math.floor(Math.random()*2);
}


TrivialVacuumEnvironment.prototype.Step = function(){
    var action;
    var i;
    for (i=0; i<this.agents.length; i++){
        var action = this.agents[i].program(this.Percept(this.agents[i]));
        this.ExecuteAction(this.agents[0], action);
    }
    //this.ExogenousChange();
}

TrivialVacuumEnvironment.prototype.ExogenousChange = function(){
    var i;
    for (i=0; i<this.agents.length; i++){
        this.agents[i].performance = 0;
    }
    for (i=0; i<this.stat.length; i++){
        if (Math.random() < 0.5){
            this.Dirtyfy(i);
        }
        else{
            this.Cleanse(i);
        }
    }
}
//------------------------------------------------------------------------------

//XY environment class
//------------------------------------------------------------------------------
var XYEnvironment = function(width, height){
    this.canvwidth = width;
    this.canvheight = height;
    this.squares = [];
    this.stat = [];
    this.canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
}

XYEnvironment.prototype.Render = function(elem, Nx, Ny){
    this.canvas.setAttribute("width", this.canvwidth);
    this.canvas.setAttribute("height", this.canvheight);
    var i, j, tempsquares;
    for (i=0; i<Ny; i++){
        this.stat.push(Array(Nx));
    }

    for (i=0; i<Nx; i++){
        tempsquares = [];
        for (j=0; j<Ny; j++){
            tempsquares.push(document.createElementNS("http://www.w3.org/2000/svg",
                                                                        "rect"));
            tempsquares[j].setAttribute("x", i*this.canvwidth/Nx);
            tempsquares[j].setAttribute("y", j*this.canvheight/Ny);
            tempsquares[j].setAttribute("width", this.canvwidth/Nx);
            tempsquares[j].setAttribute("height", this.canvheight/Ny);
            if (this.stat[i][j] == "Clean"){
                tempsquares[j].setAttribute("fill", "white");
            }
            else{
                tempsquares[j].setAttribute("fill", "grey");
            }
            this.canvas.appendChild(tempsquares[j]);
        }
    }
    elem.appendChild(this.canvas);
}
//------------------------------------------------------------------------------

//Thing class (there is no such thing as abstract in JS so this too can be
//instantiated)
//------------------------------------------------------------------------------
var Thing = function(x, y, width, height){
    this.location = [x, y];
    this.elemtype = "rect";
    this.svgelem = document.createElementNS("http://www.w3.org/2000/svg",
                                                                this.elemtype);
    this.svgelem.setAttribute("width", width);
    this.svgelem.setAttribute("height", height);
}

Thing.prototype.Display = function(env){
    this.svgelem.setAttribute("x", this.location[0]);
    this.svgelem.setAttribute("y", this.location[1]);
    env.canvas.appendChild(this.svgelem);
}
//------------------------------------------------------------------------------

//Simple Agent class, derived from thing
//------------------------------------------------------------------------------
function Agent(program){
    Thing.call(this, 0, 0, 20, 20);
    /*
    this.svgelem = document.createElementNS("http://www.w3.org/2000/svg",
                                                                    "polygon");
    this.svgelem.setAttribute("points", "0,0 20,0 10,20");
    this.svgelem.setAttribute("fill", "#76323F");
    */
    this.svgelem = document.createElementNS("http://www.w3.org/2000/svg",
                                                                    "image");
    this.svgelem.setAttribute("height", "200px");
    this.svgelem.setAttribute("width", "200px");
    this.svgelem.setAttribute("y", 0);
    this.svgelem.setAttribute("x", 0);
    this.svgelem.setAttributeNS("http://www.w3.org/1999/xlink", "href",
                                                              "./robot1.svg");

    this.performance = 0;

    //Assign default program if none is given
    if (program == null){
        this.program = function(){ return "Default-percept";}
    }
    //Check program is a callable
    else if (typeof(program) == 'function'){
        this.program = program;
    }
    else{
        alert("Agent was given a bad program!!");
    }
}
Agent.prototype = Object.create(Thing.prototype);
Agent.prototype.constructor = Agent;

Agent.prototype.Display = function(env){
    var x = this.location[0]*250;
    var y = this.location[1];
    this.svgelem.setAttribute("x", x);
    env.canvas.appendChild(this.svgelem);
}

Agent.prototype.MoveTo = function(location){
    this.location = location;
    var x = this.location[0]*250;
    var y = this.location[1];
    this.svgelem.setAttribute("x", x);
}
//------------------------------------------------------------------------------

//Program makers for agents
//------------------------------------------------------------------------------
function TableDrivenAgentProgram(table){
    var program = function(percept){
        var action = table[percept];
        return action;
    }
    return program;
}

function TableDrivenVacuumAgent(){
    var table = {'Clean0':['Right', -1], 'Dirty0':['Suck', 10],
                 'Clean1':['Left', -1], 'Dirty1':['Suck', 10]};
    return new Agent(TableDrivenAgentProgram(table));
}
//------------------------------------------------------------------------------
