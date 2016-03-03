"use strict";
//Thing class
class Thing{
	constructor(){}
	display(){}
	is_alive(){}
	show_state(){}
}

class Agent extends Thing{

	constructor(program){
		this.alive = true;
		this.bump = false;

		if (prog == null){
			this.program = function(percept){
				return percept;
			}
		}
		else if(prog == 'function'){
			this.program = prog;
		}
		else{
			alert("ERROR: Agent has a bad program");
		}
	}

	can_grab(thing){
		return false;
	}
}

class Environment{
	constructor(){
		this.things = [];
		this.agents = [];
	}

	thing_classes(){
		return [];
	}

	percept(agent){}
	execute_action(agent, action){}
	default_location(thing){}
	exogenous_change(){}
	is_done(){}
	step(){}
	run(steps){}
	list_things_at(loc){}
	some_things_at(loc){}
	add_thing(thing, loc){}
	delete_thing(thing){}
}

class XYEnvironment{
	constructor(width, height){
		super();
		this.width = width;
		this.height = height;
		this.perceptible_distance = 1;
	}

	things_near(location, radius){
		if (radius < 0){radius = this.perceptible_distance;}
		for (thing in this.things){
			var nearobs = [];
			if (distance2(location, thing.location) <= radius){
				nearobs.push(thing);
			}
		}
		return nearobs;
	}

	percept(agent){
		var observeditems = [];
		for (thing in this.things_near(agent.location, -1)){
			observeditems.push(thing_percept(thing, agent));
		}
	}

	execute_action(agent, action){
		agent.bump = false;
		if (action == "TurnRight"){
			agent.heading = this.turn_heading(agent.heading, -1);
		}
		else if (action == "TurnLeft"){
			agent.heading = this.turn_heading(agent.heading, +1);
		}
		else if (action == "Forward"){
			this.move_to(agent, vector_add(agent.heading, agent.location));
		}
		else if (action == "Release"){
			if (agent.holding){
				agent.holding.pop();
			}
		}
	}

	thing_percept(thing, agent){}

	default_location(thing){}

	move_to(thing, destination){
		thing.bump = self.some_things_at(destination)
		if (not thing.bump){
			thing.location = destination;
		}
	}

	add_thing(thing, location){
		super.add_thing();
		thing.holding = [];
		thing.held = null;
	}

	delete_thing(thing){
		super.delete_thing();
	}

	render(elem){
		var div = document.createElement("div");
		var newContent = document.createTextNode("Blerghhh..!!!");
		div.appendChild(newContent);
		elem.appendChild(div);
	}
}
