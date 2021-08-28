import React from 'react';
import './Seasons.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',  
    alignSelf: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '240px',
    margin: 0,
    padding: 0,
  },
  
  paper: {
    padding: theme.spacing(15),
    display: 'flex',
    top: '250px',
    height: '58vh',
    width: '88%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#fff',
    backgroundColor: '#1c1c1c',
    opacity: '90%',
  },

  grid: {
      position: 'relative',
      height: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }

}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <section className={classes.gridContainer}>
      <Grid container spacing={0}>

        <Grid className={classes.grid} item xs={3} sm={3}>
          <Paper className={classes.paper}>product img here</Paper>
        </Grid>

        <Grid className={classes.grid} item xs={3} sm={3}>
          <Paper className={classes.paper}>product img here</Paper>
        </Grid>

        <Grid className={classes.grid} item xs={3} sm={3}>
          <Paper className={classes.paper}>product img here</Paper>
        </Grid>

        <Grid className={classes.grid} item xs={3} sm={3}>
          <Paper className={classes.paper}>product img here</Paper>
        </Grid>

      </Grid>
    </section>
  );
}

