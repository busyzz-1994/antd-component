/**
 * Created by Vincent on 2018/8/6.
 */
const { compose } = require('react-app-rewired');
const rewireMobx = require('react-app-rewire-mobx');

module.exports = compose(
  rewireMobx
);