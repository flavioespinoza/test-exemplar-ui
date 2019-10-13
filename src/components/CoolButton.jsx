import * as React from 'react';
import cardStyle from '../assets/jss/material-dashboard-pro-react/components/cardStyle';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
  return {
    ...cardStyle,
  };
});

export default function CoolButton() {
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