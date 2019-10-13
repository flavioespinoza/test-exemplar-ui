'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cardStyle = require('../assets/jss/material-dashboard-pro-react/components/cardStyle');

var _cardStyle2 = _interopRequireDefault(_cardStyle);

var _styles = require('@material-ui/core/styles');

var _core = require('@material-ui/core');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const useStyles = makeStyles((theme) => {
//   return {
//     ...cardStyle,
//   };
// });

function CoolButton() {
  // const classes = useStyles();
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

exports.default = (0, _withStyles2.default)(_cardStyle2.default)(CoolButton);