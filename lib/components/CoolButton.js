'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CoolButton;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _cardStyle = require('../assets/jss/material-dashboard-pro-react/components/cardStyle');

var _cardStyle2 = _interopRequireDefault(_cardStyle);

var _styles = require('@material-ui/core/styles');

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return _extends({}, _cardStyle2.default);
});

function CoolButton() {
  var classes = useStyles();
  return React.createElement(
    'div',
    { className: classes.card },
    React.createElement(
      'h1',
      null,
      'Hello Button'
    ),
    React.createElement(
      _core.Button,
      { onClick: function onClick() {
          alert('YEA! :)');
        } },
      'Click Me'
    )
  );
}