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

    this.yscale = d3.scale.linear()
                          .domain([0, d3.max(dataset)])
                          .range([h, botpad+toppad]);

    var yscale = this.yscale;

	this.xscale = d3.scale.linear()
						  .domain([0, dataset.length])
					      .range([0, w]);

    var xscale = this.xscale;

	var yaxis = d3.svg.axis()
					  .scale(yscale)
					  .orient("left");

	var xaxis = d3.svg.axis()
					  .scale(xscale)
					  .orient("bottom")
                      .ticks(0);

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

    this.chart.append("g")
			 .attr('transform', 'translate('+botpad+', -'+botpad+')')
			 .attr('class', 'axis')
			 .call(yaxis);

    this.chart.append("g")
			 .attr('transform', 'translate('+leftpad+','+(h-leftpad)+')')
			 .attr('class', 'axis')
			 .call(xaxis);

    this.chart.append('text')
			 .attr('class', 'y label')
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
    var dataset = this.dataset;
    dataset.push(height);
    var chart = this.chart;
    var w = this.w, botpad = this.pad, h = this.h, barpad = this.barpad;
    var leftpad = this.pad;
    var yscale = this.yscale;

    var bars = chart.selectAll('rect')
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
    bars = chart.selectAll('rect');
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
}
//------------------------------------------------------------------------------
