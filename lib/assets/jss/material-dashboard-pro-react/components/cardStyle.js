"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardProReactCopy = require("../../material-dashboard-pro-react-copy");

var cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.blackColor) + ", 0.87)",
    background: _materialDashboardProReactCopy.whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardBlog: {
    marginTop: "60px"
  },
  cardRaised: {
    boxShadow: "0 16px 38px -12px rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.blackColor) + ", 0.56), 0 4px 25px 0px rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.blackColor) + ", 0.2)"
  },
  cardBackground: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    textAlign: "center",
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.blackColor) + ", 0.56)",
      borderRadius: "6px"
    },
    "& small": {
      color: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.whiteColor) + ", 0.7) !important"
    }
  },
  cardPricing: {
    textAlign: "center",
    "&:after": {
      backgroundColor: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.blackColor) + ", 0.7) !important"
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      maxWidth: "240px",
      margin: "10px auto"
    },
    "& ul li": {
      color: _materialDashboardProReactCopy.grayColor[0],
      textAlign: "center",
      padding: "12px 0px",
      borderBottom: "1px solid rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.grayColor[0]) + ",0.3)"
    },
    "& ul li:last-child": {
      border: 0
    },
    "& ul li b": {
      color: _materialDashboardProReactCopy.grayColor[2]
    },
    "& h1": {
      marginTop: "30px"
    },
    "& h1 small": {
      display: "inline-flex",
      height: 0,
      fontSize: "18px"
    },
    "& h1 small:first-child": {
      position: "relative",
      top: "-17px",
      fontSize: "26px"
    },
    "& ul li svg, & ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
      position: "relative",
      top: "7px"
    }
  },
  cardPricingColor: {
    "& ul li": {
      color: _materialDashboardProReactCopy.whiteColor,
      borderColor: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.whiteColor) + ",0.3)",
      "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: _materialDashboardProReactCopy.whiteColor,
        fontWeight: "700"
      }
    }
  },
  cardProduct: {
    marginTop: "30px"
  },
  primary: {
    background: "linear-gradient(60deg," + _materialDashboardProReactCopy.primaryColor[1] + "," + _materialDashboardProReactCopy.primaryColor[4] + ")",
    "& h1 small": {
      color: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.whiteColor) + ", 0.8)"
    },
    color: _materialDashboardProReactCopy.whiteColor
  },
  info: {
    background: "linear-gradient(60deg," + _materialDashboardProReactCopy.infoColor[1] + "," + _materialDashboardProReactCopy.infoColor[4] + ")",
    "& h1 small": {
      color: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.whiteColor) + ", 0.8)"
    },
    color: _materialDashboardProReactCopy.whiteColor
  },
  success: {
    background: "linear-gradient(60deg," + _materialDashboardProReactCopy.successColor[1] + "," + _materialDashboardProReactCopy.successColor[4] + ")",
    "& h1 small": {
      color: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.whiteColor) + ", 0.8)"
    },
    color: _materialDashboardProReactCopy.whiteColor
  },
  warning: {
    background: "linear-gradient(60deg," + _materialDashboardProReactCopy.warningColor[1] + "," + _materialDashboardProReactCopy.warningColor[4] + ")",
    "& h1 small": {
      color: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.whiteColor) + ", 0.8)"
    },
    color: _materialDashboardProReactCopy.whiteColor
  },
  danger: {
    background: "linear-gradient(60deg," + _materialDashboardProReactCopy.dangerColor[1] + "," + _materialDashboardProReactCopy.dangerColor[4] + ")",
    "& h1 small": {
      color: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.whiteColor) + ", 0.8)"
    },
    color: _materialDashboardProReactCopy.whiteColor
  },
  rose: {
    background: "linear-gradient(60deg," + _materialDashboardProReactCopy.roseColor[1] + "," + _materialDashboardProReactCopy.roseColor[4] + ")",
    "& h1 small": {
      color: "rgba(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.whiteColor) + ", 0.8)"
    },
    color: _materialDashboardProReactCopy.whiteColor
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  },
  cardLogin: {
    transform: "translate3d(" + (0, _materialDashboardProReactCopy.hexToRgb)(_materialDashboardProReactCopy.blackColor) + ")",
    transition: "all 300ms linear"
  }
};

exports.default = cardStyle;