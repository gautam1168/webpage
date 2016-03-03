"use strict";
//TrivialVacuumEnvironment
//------------------------------------------------------------------------------
var TrivialVacuumEnvironment = function(width, height){
    this.width = width;
    this.height = height;
    this.agents = [];
    this.things = [];
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

TrivialVacuumEnvironment.prototype.Percept = function(agent){
    var perceptkey = "";
    perceptkey += this.status[agent.location] + String(agent.location);
    return perceptkey;
}

TrivialVacuumEnvironment.prototype.Cleanse = function(location){
    this.squares[location].setAttribute("fill", "white");
}

TrivialVacuumEnvironment.prototype.Dirtyfy = function(location){
    this.squares[location].setAttribute("fill", "black");
}

TrivialVacuumEnvironment.prototype.ExecuteAction = function(agent, action){
    if (action == 'Left'){
        agent.MoveTo([0,0]);
        agent.performance -= 1;
    }
    else if (action == 'Right'){
        agent.MoveTo([1,0]);
        agent.performance -= 1;
    }
    else if (action == 'Suck'){
        if (this.status[agent.location[0]] == 'Dirty'){
            agent.performance += 10;
        }
        this.Cleanse(agent.location[0]);
    }
}

TrivialVacuumEnvironment.prototype.Default_location = function(){
    return Math.floor(Math.random()*2);
}


TrivialVacuumEnvironment.prototype.Step = function(){
    var action;
    for (agent in this.agents){
        action = agent.program(this.percept(agent));
        this.ExecuteAction(agent, action);
    }
    this.ExogenousChange();
}

TrivialVacuumEnvironment.prototype.ExogenousChange = function(){}
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
    this.svgelem = document.createElementNS("http://www.w3.org/2000/svg",
                                                                    "polygon");
    this.svgelem.setAttribute("points", "0,0 20,0 10,20");
    this.svgelem.setAttribute("fill", "red");

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
    this.svgelem.setAttribute("points", String(x)+","+String(y)+" "+
                                        String(x+20)+","+String(y)+" "+
                                        String(x+10)+","+String(y+15));
    env.canvas.appendChild(this.svgelem);
}

Agent.prototype.MoveTo = function(location){
    this.location = location;
    var x = this.location[0]*250;
    var y = this.location[1];
    this.svgelem.setAttribute("points", String(x)+","+String(y)+" "+
                                        String(x+20)+","+String(y)+" "+
                                        String(x+10)+","+String(y+15));
}
//------------------------------------------------------------------------------

//Program makers for agents
//------------------------------------------------------------------------------
function TableDrivenAgentProgram(table){
    var program = function(percept){
        this.table = table;
        var action = table[percept];
        return action;
    }
    return program;
}

function TableDrivenVacuumAgent(){
    var table = {'Clean0':'Right', 'Dirty0':'Suck',
                 'Clean1':'Left', 'Dirty1':'Suck'};
    return new Agent(TableDrivenAgentProgram(table));
}
//------------------------------------------------------------------------------
