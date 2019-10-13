'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCardProps = getCardProps;
exports.default = Card;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classNames = require('../classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between']; // import withStyles from '@material-ui/core/styles/withStyles';
// import cardStyle from '../assets/jss/material-dashboard-pro-react/components/cardStyle';
// import { makeStyles } from '@material-ui/core/styles';


var propTypes = {
  reverse: _propTypes2.default.bool,
  start: _types.ViewportSizeType,
  center: _types.ViewportSizeType,
  end: _types.ViewportSizeType,
  top: _types.ViewportSizeType,
  middle: _types.ViewportSizeType,
  bottom: _types.ViewportSizeType,
  around: _types.ViewportSizeType,
  between: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function getCardClassNames(props) {
  var modifiers = [props.className, (0, _classNames2.default)('row')];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];
    if (value) {
      modifiers.push((0, _classNames2.default)(key + '-' + value));
    }
  }

  if (props.reverse) {
    modifiers.push((0, _classNames2.default)('reverse'));
  }

  return modifiers;
}

function getCardProps(props) {
  return (0, _createProps2.default)(propTypes, props, getCardClassNames(props));
}

function Card(props) {
  return _react2.default.createElement(props.tagName || 'div', getCardProps(props));
}

Card.propTypes = propTypes;