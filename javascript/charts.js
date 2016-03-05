"use strict";
//A simple barchart of 1D array
//------------------------------------------------------------------------------
var BarChart = function(elemid, width, height){
    this.w = width;
    this.h = height;
    this.chart = d3.select("#"+elemid)
                   .append('svg')
                   .attr('width', width)
                   .attr('height', height);
    this.pad = 40; //bottom and left
    this.barpad = 1;
    this.toppad = 10;
}

BarChart.prototype.Plot = function(dataset, label){
    var w = this.w, h = this.h, botpad = this.pad, barpad = this.barpad;
    var toppad = this.toppad, leftpad = this.pad;
    this.dataset = dataset;

    //Create scaling functions
    var yscale = d3.scale.linear()
                          .domain([0, d3.max(dataset)])
                          .range([h, botpad+toppad]);

	var xscale = d3.scale.linear()
						  .domain([0, dataset.length])
					      .range([0, w]);

    //Create the axes
	this.yaxis = d3.svg.axis()
					  .scale(yscale)
					  .orient("left");

	this.xaxis = d3.svg.axis()
					  .scale(xscale)
					  .orient("bottom")
                      .ticks(0);

    //Add bars for data
    this.chart.selectAll("rect")
              .data(dataset)
              .enter()
              .append("rect")
              .attr('x', function(d,i){
                            return i*((w-leftpad)/dataset.length) + leftpad;
                            })
			  .attr('y', function(d){
                            return yscale(d)-botpad;
                            })
			  .attr('width', (w-leftpad)/dataset.length - barpad)
			  .attr('height', function(d){return h-yscale(d);})
			  .attr('fill', '#427795');

    //Add axes to the plot
    this.chart.append("g")
			 .attr('transform', 'translate('+botpad+', -'+botpad+')')
			 .attr('class', 'yaxis')
			 .call(this.yaxis);

    this.chart.append("g")
			 .attr('transform', 'translate('+leftpad+','+(h-leftpad)+')')
			 .attr('class', 'xaxis')
			 .call(this.xaxis);

    //Add the y axis label
    this.chart.append('text')
			 .attr('class', 'ylabel')
			 .attr('text-anchor', 'end')
			 .attr('y', 5)
			 .attr('dy', '0.5em')
			 .attr('x', -h/3)
			 .attr('transform', 'rotate(-90)')
			 .attr('fill', '#76323F')
			 .text(label)
             .attr('font-family', 'Sans-Serif')
             .attr('font-size','12px');
}

BarChart.prototype.AddBar = function(height){
    this.dataset.push(height);
    var chart = this.chart;
    var w = this.w, botpad = this.pad, h = this.h, barpad = this.barpad;
    var leftpad = this.pad, toppad = this.toppad;

    //Recreate the y scale function
    var yscale = d3.scale.linear()
                          .domain([0, d3.max(this.dataset)])
                          .range([h, botpad+toppad]);

    //Add a new rect for the data just outside the viewbox
    var bars = this.chart.selectAll('rect')
                     .data(dataset)
                     .enter()
                     .append('rect')
                     .attr('x', w)
                     .attr('y', function(d){
                            return yscale(d)-botpad;
                            })
			         .attr('width', (w-leftpad)/dataset.length - barpad)
			         .attr('height', function(d){return h-yscale(d);})
			         .attr('fill', '#427795');

    //Now move all the rects inside the graph
    bars = this.chart.selectAll('rect');
    bars.transition()
        .duration(500)
        .attr('x', function(d,i){
                            return i*((w-leftpad)/dataset.length) + leftpad;
                            })
        .attr('y', function(d){
                            return yscale(d)-botpad;
                            })
		.attr('width', (w-leftpad)/dataset.length - barpad)
		.attr('height', function(d){return h-yscale(d);});

    //Update the y axis
    var yaxis = d3.svg.axis()
					  .scale(yscale)
					  .orient("left");

    this.chart.select(".yaxis")
              .transition()
              .duration(300)
              .call(yaxis);
}
//------------------------------------------------------------------------------
