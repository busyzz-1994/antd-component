/**
 * Created by Vincent on 2018/8/6.
 */
const { compose } = require('react-app-rewired');
const rewireLess = require("react-app-rewire-less-modules");
const rewireMobX = require('react-app-rewire-mobx');

module.exports = compose(
  rewireLess,
  rewireMobx
...
);