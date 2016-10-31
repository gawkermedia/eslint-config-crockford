'use strict';

const assert = require('assert');
const eslint = require('eslint');
const conf = require('.');

// Use the rules defined in this repo to test against.
const eslintOpts = {
  envs: ['node', 'es6'],
  useEslintrc: false,
  rules: conf.rules,
};

// Ensure the config is valid
assert.doesNotThrow(() => {eslint.CLIEngine(eslintOpts);});