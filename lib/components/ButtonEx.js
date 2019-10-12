'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = babelHelpers.interopRequireDefault(_withStyles);

var _cardStyle = require('../assets/jss/material-dashboard-pro-react/components/cardStyle');

var _cardStyle2 = babelHelpers.interopRequireDefault(_cardStyle);

var _styles = require('@material-ui/core/styles');

var _core = require('@material-ui/core');

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return babelHelpers.extends({}, _cardStyle2.default);
});

function ButtonEx() {
  var classes = useStyles();
  return _react2.default.createElement(
    'div',
    { className: classes.card },
    _react2.default.createElement(
      'h1',
      null,
      'Hello Button'
    ),
    _react2.default.createElement(
      _core.Button,
      { onClick: function onClick() {
          alert('YEA! :)');
        } },
      'Click Me'
    )
  );
}

exports.default = (0, _withStyles2.default)(_cardStyle2.default)(ButtonEx);