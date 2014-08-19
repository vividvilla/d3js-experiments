var body = d3.select("body");
var title = body.append("h1").text("D3js experiments - scatterplot");
title.attr({"style": "color: #326DA8; font-style: italic; font-family: sans-serif"});

var width = window.innerWidth;
var height = window.innerHeight;
var margin = "100";

var svg = body.append("svg").attr({
    width: width - margin,
    height: height - margin
});

var data = [
    {x: 100, y: 12, radius : "20"},
    {x: 90,  y: 42, radius : "75"},
    {x: 63,  y: 54, radius : "33"},
    {x: 40,  y: 34, radius : "43"},
    {x: 43,  y: 62, radius : "65"},
    {x: 24,  y: 65, radius : "23"},
    {x: 24,  y: 44, radius : "57"},
    {x: 85,  y: 34, radius : "23"},
    {x: 10,  y: 52, radius : "37"},
    {x: 93,  y: 14, radius : "65"},
    {x: 47,  y: 56, radius : "35"},
    {x: 30,  y: 68, radius : "53"},
    {x: 14,  y: 12, radius : "56"},
    {x: 130, y: 45, radius : "32"},
    {x: 13,  y: 56, radius : "56"},
    {x: 60,  y: 67, radius : "75"},
    {x: 19,  y: 52, radius : "25"},
]

var xScale = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.x }) + 10])
    .range([margin, width - 2*margin])

var yScale = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.y }) + 10])
    .range([margin, height - 2*margin])

var yRadius = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.radius })])
    .range([0, 20])

var randomColor = d3.scale.category20()

var xAxis = d3.svg.axis().scale(xScale).orient("top");
var yAxis = d3.svg.axis().scale(yScale).orient("left");

svg.append("g").attr({
    class: "axis",
    transform: "translate("+[0, margin]+")"
}).call(xAxis);

svg.append("g").attr({
    class: "axis",
    transform: "translate("+[margin, 0]+")"
}).call(yAxis);

svg.selectAll("circle").
    data(data).
    enter().
    append("circle").
    attr({
        cx: function(d) { return xScale(d.x) },
        cy: function(d) { return yScale(d.y) },
        r: function(d) { return yRadius(d.radius) },
        fill: function(d, i) { return randomColor(i) }
    });