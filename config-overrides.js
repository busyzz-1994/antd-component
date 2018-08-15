/**
 * Created by Vincent on 2018/8/6.
 */
const path = require('path');
const { compose } = require('react-app-rewired');
const rewireMobx = require('react-app-rewire-mobx');
const rewireCssModules = require('react-app-rewire-css-modules');

function rewireModules(config, env) {
  config.resolve.modules.push(path.resolve('./src'));
  return config;
}

module.exports = compose(
  rewireMobx,
  rewireModules,
  rewireCssModules
);