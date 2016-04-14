#!/usr/bin/env node
'use strict';
const executable = require('executable');
const meow = require('meow');

const cli = meow(`
	Usage
	  $ executable <file>
`);

if (cli.input.length === 0) {
	console.error('Specify a file');
	process.exit(1);
}

executable(cli.input[0]).then(exec => {
	console.log(exec);
	process.exit(exec ? 0 : 1);
});
