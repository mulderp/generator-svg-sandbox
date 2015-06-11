var hello = require('../drawings/hello.svg')(10, 40);
var createNode = require('svg-node');

var svg = document.getElementsByTagName('svg')[0];

var someLayer = createNode('g');
someLayer.appendChild(hello);

svg.appendChild(someLayer);



