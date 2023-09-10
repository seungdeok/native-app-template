'use strict';

const android = require('..');
const assert = require('assert').strict;

assert.strictEqual(android(), 'Hello from android');
console.info('android tests passed');
