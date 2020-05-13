import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3f51b5",
    padding: "30px",
    color: '#ffffff',
    height: "30px",
    width: "100%",
    },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Typography variant="h6" color='textSecondry' align='center'>
             <b> JOB RECRUITER PORTAL </b>
          </Typography>
    </div>
  );
}