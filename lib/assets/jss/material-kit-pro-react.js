"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
var hexToRgb = function hexToRgb(input) {
  input = input + "";
  input = input.replace("#", "");
  var hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
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
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

var drawerWidth = 260;

var primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5", "#e1bee7", "#ba68c8"];
var secondaryColor = ["#fafafa"];
var warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a", "#fcf8e3", "#faf2cc", "#ffe0b2", "#ffb74d"];
var dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e", "#f2dede", "#ebcccc", "ef9a9a", "#ef5350"];
var successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860", "#dff0d8", "#d0e9c6", "#a5d6a7", "#66bb6a"];
var infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee", "#d9edf7", "#c4e3f3", "#b2ebf2", "#4dd0e1"];
var roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];
var grayColor = ["#999", "#3C4858", "#eee", "#343434", "#585858", "#232323", "#ddd", "#6c757d", "#333", "#212121", "#777", "#D2D2D2", "#AAA", "#495057", "#e5e5e5", "#555", "#f9f9f9", "#ccc", "#444", "#f2f2f2", "#89229b", "#c0c1c2", "#9a9a9a", "#f5f5f5", "#505050", "#1f1f1f"];
var whiteColor = "#FFF";
var blackColor = "#000";
var twitterColor = "#55acee";
var facebookColor = "#3b5998";
var googleColor = "#dd4b39";
var linkedinColor = "#0976b4";
var pinterestColor = "#cc2127";
var youtubeColor = "#e52d27";
var tumblrColor = "#35465c";
var behanceColor = "#1769ff";
var dribbbleColor = "#ea4c89";
var redditColor = "#ff4500";
var instagramColor = "#125688";

var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

var containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
var container = babelHelpers.extends({}, containerFluid, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};

var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
var primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(primaryColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(primaryColor[0]) + ", 0.2)"
};
var infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(infoColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(infoColor[0]) + ", 0.2)"
};
var successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(successColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(successColor[0]) + ", 0.2)"
};
var warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(warningColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(warningColor[0]) + ", 0.2)"
};
var dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(dangerColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(dangerColor[0]) + ", 0.2)"
};
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ", 0.4)"
};

var warningCardHeader = babelHelpers.extends({
  color: whiteColor,
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);
var successCardHeader = babelHelpers.extends({
  color: whiteColor,
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);
var dangerCardHeader = babelHelpers.extends({
  color: whiteColor,
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);
var infoCardHeader = babelHelpers.extends({
  color: whiteColor,
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);
var primaryCardHeader = babelHelpers.extends({
  color: whiteColor,
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);
var roseCardHeader = babelHelpers.extends({
  color: whiteColor,
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);
var cardActions = babelHelpers.extends({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid  " + grayColor[2],
  height: "auto"
}, defaultFont);

var cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

var title = {
  color: grayColor[1],
  textDecoration: "none",
  fontWeight: "700",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "\"Roboto Slab\", \"Times New Roman\", serif"
};

var cardTitle = {
  "&, & a": babelHelpers.extends({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
};

var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

var cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};

var main = {
  background: whiteColor,
  position: "relative",
  zIndex: "3"
};

var mainRaised = {
  "@media (max-width: 576px)": {
    marginTop: "-30px"
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px"
  },
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow: "0 16px 24px 2px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 6px 30px 5px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};

var section = {
  backgroundPosition: "50%",
  backgroundSize: "cover"
};

var sectionDark = {
  backgroundColor: grayColor[3],
  background: "radial-gradient(ellipse at center," + grayColor[4] + " 0," + grayColor[5] + " 100%)"
};

var sectionDescription = {
  marginTop: "130px"
};

var description = {
  color: grayColor[0]
};

var mlAuto = {
  marginLeft: "auto"
};

var mrAuto = {
  marginRight: "auto"
};

var btnLink = {
  backgroundColor: "transparent",
  boxShdow: "none",
  marginTop: "5px",
  marginBottom: "5px"
};
var coloredShadow = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
    display: "none !important"
  },
  transform: "scale(0.94)",
  top: "12px",
  filter: "blur(12px)",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  zIndex: "-1",
  transition: "opacity .45s",
  opacity: "0"
};

exports.drawerWidth = drawerWidth;
exports.transition = transition;
exports.container = container;
exports.containerFluid = containerFluid;
exports.boxShadow = boxShadow;
exports.card = card;
exports.defaultFont = defaultFont;
exports.primaryColor = primaryColor;
exports.secondaryColor = secondaryColor;
exports.warningColor = warningColor;
exports.dangerColor = dangerColor;
exports.successColor = successColor;
exports.infoColor = infoColor;
exports.roseColor = roseColor;
exports.grayColor = grayColor;
exports.whiteColor = whiteColor;
exports.blackColor = blackColor;
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
exports.instagramColor = instagramColor;
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
exports.title = title;
exports.cardTitle = cardTitle;
exports.description = description;
exports.cardLink = cardLink;
exports.cardSubtitle = cardSubtitle;
exports.main = main;
exports.mainRaised = mainRaised;
exports.section = section;
exports.sectionDark = sectionDark;
exports.sectionDescription = sectionDescription;
exports.mlAuto = mlAuto;
exports.mrAuto = mrAuto;
exports.btnLink = btnLink;
exports.coloredShadow = coloredShadow;
exports.hexToRgb = hexToRgb;