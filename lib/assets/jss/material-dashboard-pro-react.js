'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hexToRgb = function hexToRgb(input) {
  input = input + '';
  input = input.replace('#', '');
  var hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    var _first = input[0];
    var _second = input[1];
    var _last = input[2];
    input = _first + _first + _second + _second + _last + _last;
  }
  input = input.toUpperCase(input);
  var first = input[0] + input[1];
  var second = input[2] + input[3];
  var last = input[4] + input[5];
  return parseInt(first, 16) + ', ' + parseInt(second, 16) + ', ' + parseInt(last, 16);
};

var transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

var drawerWidth = 260;

var drawerMiniWidth = 80;

var containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  '&:before,&:after': {
    display: 'table',
    content: '" "'
  },
  '&:after': {
    clear: 'both'
  }
};

var containerForm = {
  paddingRight: '15px',
  paddingLeft: '15px',
  '@media (min-width: 768px)': {
    width: '750px'
  },
  '@media (min-width: 992px)': {
    width: '970px'
  },
  '@media (min-width: 1200px)': {
    width: '1170px'
  },
  '&:before,&:after': {
    display: 'table',
    content: '" "'
  },
  '&:after': {
    clear: 'both'
  }
};

var zoom80 = {
  transform: 'scale(0.8)',
  transformOrigin: '0 0'
};

var container = {
  // ...zoom80,
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media (min-width: 768px)': {
    width: '750px'
  },
  '@media (min-width: 992px)': {
    width: '970px'
  },
  '@media (min-width: 1200px)': {
    width: '1170px'
  },
  '&:before,&:after': {
    display: 'table',
    content: '" "'
  },
  '&:after': {
    clear: 'both'
  }
};

var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em'
};

var primaryColor = ['#9c27b0', '#ab47bc', '#8e24aa', '#af2cc5', '#7b1fa2'];
var warningColor = ['#ff9800', '#ffa726', '#fb8c00', '#ffa21a', '#f57c00', '#faf2cc', '#fcf8e3'];
var dangerColor = ['#f44336', '#ef5350', '#e53935', '#f55a4e', '#d32f2f', '#ebcccc', '#f2dede'];
var successColor = ['#4caf50', '#66bb6a', '#43a047', '#5cb860', '#388e3c', '#d0e9c6', '#dff0d8'];
var infoColor = ['#00acc1', '#26c6da', '#00acc1', '#00d3ee', '#0097a7', '#c4e3f3', '#d9edf7'];
var roseColor = ['#e91e63', '#ec407a', '#d81b60', '#eb3573', '#c2185b'];
var grayColor = ['#999', '#777', '#3C4858', '#AAAAAA', '#D2D2D2', '#DDD', '#555555', '#333', '#eee', '#ccc', '#e4e4e4', '#E5E5E5', '#f9f9f9', '#f5f5f5', '#495057', '#e7e7e7', '#212121', '#c8c8c8', '#505050'];
var blackColor = '#000';
var whiteColor = '#FFF';
var twitterColor = '#55acee';
var facebookColor = '#3b5998';
var googleColor = '#dd4b39';
var linkedinColor = '#0976b4';
var pinterestColor = '#cc2127';
var youtubeColor = '#e52d27';
var tumblrColor = '#35465c';
var behanceColor = '#1769ff';
var dribbbleColor = '#ea4c89';
var redditColor = '#ff4500';
var _roseColor = '#e91e63';

var boxShadow = {
  boxShadow: '0 10px 30px -12px rgba(' + hexToRgb(blackColor) + ', 0.42), 0 4px 25px 0px rgba(' + hexToRgb(blackColor) + ', 0.12), 0 8px 10px -5px rgba(' + hexToRgb(blackColor) + ', 0.2)'
};

var primaryBoxShadow = {
  boxShadow: '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(primaryColor[0]) + ',.4)'
};
var infoBoxShadow = {
  boxShadow: '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(infoColor[0]) + ',.4)'
};
var successBoxShadow = {
  boxShadow: '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(successColor[0]) + ',.4)'
};
var warningBoxShadow = {
  boxShadow: '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(warningColor[0]) + ',.4)'
};
var dangerBoxShadow = {
  boxShadow: '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(dangerColor[0]) + ',.4)'
};
var roseBoxShadow = {
  boxShadow: '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(roseColor[0]) + ',.4)'
};

var warningCardHeader = babelHelpers.extends({
  background: 'linear-gradient(60deg, ' + warningColor[1] + ', ' + warningColor[2] + ')'
}, warningBoxShadow);
var successCardHeader = babelHelpers.extends({
  background: 'linear-gradient(60deg, ' + successColor[1] + ', ' + successColor[2] + ')'
}, successBoxShadow);
var dangerCardHeader = babelHelpers.extends({
  background: 'linear-gradient(60deg, ' + dangerColor[1] + ', ' + dangerColor[2] + ')'
}, dangerBoxShadow);
var infoCardHeader = babelHelpers.extends({
  background: 'linear-gradient(60deg, ' + infoColor[1] + ', ' + infoColor[2] + ')'
}, infoBoxShadow);
var primaryCardHeader = babelHelpers.extends({
  background: 'linear-gradient(60deg, ' + primaryColor[1] + ', ' + primaryColor[2] + ')'
}, primaryBoxShadow);
var roseCardHeader = babelHelpers.extends({
  background: 'linear-gradient(60deg, ' + roseColor[1] + ', ' + roseColor[2] + ')'
}, roseBoxShadow);

var card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(' + hexToRgb(blackColor) + ', 0.14)',
  borderRadius: '6px',
  color: 'rgba(' + hexToRgb(blackColor) + ', 0.87)',
  background: whiteColor
};

var cardActions = babelHelpers.extends({
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid ' + grayColor[8],
  height: 'auto'
}, defaultFont);

var cardHeader = {
  margin: '-20px 15px 0',
  borderRadius: '3px',
  padding: '15px'
};

var defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow: '0 10px 20px -12px rgba(' + hexToRgb(blackColor) + ', 0.42), 0 3px 20px 0px rgba(' + hexToRgb(blackColor) + ', 0.12), 0 8px 10px -5px rgba(' + hexToRgb(blackColor) + ', 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s'
};

var tooltip = {
  padding: '10px 15px',
  minWidth: '130px',
  color: whiteColor,
  lineHeight: '1.7em',
  background: 'rgba(' + hexToRgb(grayColor[6]) + ',0.9)',
  border: 'none',
  borderRadius: '3px',
  opacity: '1!important',
  boxShadow: '0 8px 10px 1px rgba(' + hexToRgb(blackColor) + ', 0.14), 0 3px 14px 2px rgba(' + hexToRgb(blackColor) + ', 0.12), 0 5px 5px -3px rgba(' + hexToRgb(blackColor) + ', 0.2)',
  maxWidth: '200px',
  textAlign: 'center',
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  textShadow: 'none',
  textTransform: 'none',
  letterSpacing: 'normal',
  wordBreak: 'normal',
  wordSpacing: 'normal',
  wordWrap: 'normal',
  whiteSpace: 'normal',
  lineBreak: 'auto'
};

var title = {
  color: grayColor[2],
  textDecoration: 'none',
  fontWeight: '300',
  marginTop: '30px',
  marginBottom: '25px',
  minHeight: '32px',
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  '& small': {
    color: grayColor[1],
    fontSize: '65%',
    fontWeight: '400',
    lineHeight: '1'
  }
};

var cardTitle = babelHelpers.extends({}, title, {
  paddingTop: '8px',
  paddingRight: 0,
  marginTop: '0',
  marginBottom: '3px',
  minHeight: 'auto',
  '& a': babelHelpers.extends({}, title, {
    marginTop: '.625rem',
    marginBottom: '0.75rem',
    minHeight: 'auto'
  })
});

var cardSubtitle = {
  marginTop: '-.375rem'
};

var cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem'
  }
};

var mlAuto = {
  marginLeft: 'auto'
};

var mrAuto = {
  marginRight: 'auto'
};

var main = {
  background: whiteColor,
  position: 'relative',
  zIndex: '3'
};

var mainRaised = {
  '@media (max-width: 576px)': {
    marginTop: '-30px'
  },
  '@media (max-width: 830px)': {
    marginLeft: '10px',
    marginRight: '10px'
  },
  margin: '-60px 30px 0px',
  borderRadius: '6px',
  boxShadow: '0 16px 24px 2px rgba(' + hexToRgb(blackColor) + ', 0.14), 0 6px 30px 5px rgba(' + hexToRgb(blackColor) + ', 0.12), 0 8px 10px -5px rgba(' + hexToRgb(blackColor) + ', 0.2)'
};

var coloredShadow = {
  '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
    display: 'none !important'
  },
  transform: 'scale(0.94)',
  top: '12px',
  filter: 'blur(12px)',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  zIndex: '-1',
  transition: 'opacity .45s',
  opacity: '0'
};

var sectionDescription = {
  marginTop: '130px'
};

var description = {
  color: grayColor[0]
};

var section = {
  backgroundPosition: '50%',
  backgroundSize: 'cover'
};

var sectionDark = {
  backgroundColor: grayColor[3],
  background: 'radial-gradient(ellipse at center,' + grayColor[4] + ' 0,' + grayColor[5] + ' 100%)'
};

exports.hexToRgb = hexToRgb;
exports.drawerWidth = drawerWidth;
exports.drawerMiniWidth = drawerMiniWidth;
exports.transition = transition;
exports.container = container;
exports.containerForm = containerForm;
exports.containerFluid = containerFluid;
exports.boxShadow = boxShadow;
exports.card = card;
exports.defaultFont = defaultFont;
exports.primaryColor = primaryColor;
exports.warningColor = warningColor;
exports.dangerColor = dangerColor;
exports.successColor = successColor;
exports.infoColor = infoColor;
exports.roseColor = roseColor;
exports.grayColor = grayColor;
exports.blackColor = blackColor;
exports.whiteColor = whiteColor;
exports.twitterColor = twitterColor;
exports.facebookColor = facebookColor;
exports.googleColor = googleColor;
exports.linkedinColor = linkedinColor;
exports.pinterestColor = pinterestColor;
exports.youtubeColor = youtubeColor;
exports.tumblrColor = tumblrColor;
exports.behanceColor = behanceColor;
exports.dribbbleColor = dribbbleColor;
exports.redditColor = redditColor;
exports.primaryBoxShadow = primaryBoxShadow;
exports.infoBoxShadow = infoBoxShadow;
exports.successBoxShadow = successBoxShadow;
exports.warningBoxShadow = warningBoxShadow;
exports.dangerBoxShadow = dangerBoxShadow;
exports.roseBoxShadow = roseBoxShadow;
exports.warningCardHeader = warningCardHeader;
exports.successCardHeader = successCardHeader;
exports.dangerCardHeader = dangerCardHeader;
exports.infoCardHeader = infoCardHeader;
exports.primaryCardHeader = primaryCardHeader;
exports.roseCardHeader = roseCardHeader;
exports.cardActions = cardActions;
exports.cardHeader = cardHeader;
exports.defaultBoxShadow = defaultBoxShadow;
exports.tooltip = tooltip;
exports.title = title;
exports.cardTitle = cardTitle;
exports.cardSubtitle = cardSubtitle;
exports.cardLink = cardLink;
exports.mlAuto = mlAuto;
exports.mrAuto = mrAuto;
exports.main = main;
exports.mainRaised = mainRaised;
exports.coloredShadow = coloredShadow;
exports.description = description;
exports.sectionDescription = sectionDescription;
exports.section = section;
exports.sectionDark = sectionDark;
exports._roseColor = _roseColor;
exports.zoom80 = zoom80;