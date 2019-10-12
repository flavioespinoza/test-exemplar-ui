import withStyles from '@material-ui/core/styles/withStyles';
import cardStyle from '../assets/jss/material-dashboard-pro-react/components/cardStyle';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => {
  return {
    ...cardStyle,
  };
});

function Card() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <h1>Hello Card</h1>
    </div>
  )
}


export default withStyles(cardStyle)(Card);