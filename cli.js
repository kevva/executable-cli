#!/usr/bin/env node
'use strict';
var executable = require('executable');
var meow = require('meow');

var cli = meow([
	'Usage',
	'  $ executable <file>'
]);

if (cli.input.length === 0) {
	console.error('Specify a file');
	process.exit(1);
}

executable(cli.input[0]).then(function (exec) {
	console.log(exec);
	process.exit(exec ? 0 : 1);
});
