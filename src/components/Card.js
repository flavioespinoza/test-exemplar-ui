// import withStyles from '@material-ui/core/styles/withStyles';
// import cardStyle from '../assets/jss/material-dashboard-pro-react/components/cardStyle';
// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import getClass from '../classNames';
import PropTypes from 'prop-types';
import createProps from '../createProps';
import { ViewportSizeType } from '../types';

const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

const propTypes = {
  reverse: PropTypes.bool,
  start: ViewportSizeType,
  center: ViewportSizeType,
  end: ViewportSizeType,
  top: ViewportSizeType,
  middle: ViewportSizeType,
  bottom: ViewportSizeType,
  around: ViewportSizeType,
  between: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

function getCardClassNames(props) {
  const modifiers = [props.className, getClass('row')];

  for (let i = 0; i < rowKeys.length; ++i) {
    const key = rowKeys[i];
    const value = props[key];
    if (value) {
      modifiers.push(getClass(`${key}-${value}`));
    }
  }

  if (props.reverse) {
    modifiers.push(getClass('reverse'));
  }

  return modifiers;
}

export function getCardProps(props) {
  return createProps(propTypes, props, getCardClassNames(props));
}

export default function Card(props) {
  return React.createElement(props.tagName || 'div', getCardProps(props));
}

Card.propTypes = propTypes;
