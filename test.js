const assert = require('assert');
const CLIEngine = require("eslint").CLIEngine;
const conf = require('.');

// Use the rules defined in this repo to test against.
const eslintOpts = {
  envs: ['node', 'es6'],
  useEslintrc: false,
  rules: conf.rules,
};

// Ensure the config is valid
assert.doesNotThrow(() => {
  const cli = new CLIEngine(eslintOpts);
});