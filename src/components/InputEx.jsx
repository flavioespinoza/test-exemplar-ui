import withStyles from '@material-ui/core/styles/withStyles';
import cardStyle from '../assets/jss/material-dashboard-pro-react/components/cardStyle';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => {
  return {
    ...cardStyle,
  };
});

function InputEx() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <h1>Hello Input</h1>
      <Input />
    </div>
  );
}

export default withStyles(cardStyle)(InputEx);
