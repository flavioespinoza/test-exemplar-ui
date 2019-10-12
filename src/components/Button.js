import withStyles from '@material-ui/core/styles/withStyles';
import cardStyle from '../assets/jss/material-dashboard-pro-react/components/cardStyle';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => {
  return {
    ...cardStyle,
  };
});

function CoolButton() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <h1>Hello Button</h1>
      <Button onClick={() => {
          alert('YEA! :)')
      }}>Click Me</Button>
    </div>
  );
}

export default withStyles(cardStyle)(CoolButton);
