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
    borderRadius: '10px',
  },

  grid: {
      position: 'relative',
      height: '45vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },

  photoTitle: {
    backgroundColor: '#fff',
    opacity: '85%',
    color: '#1c1c1c',
    position: 'fixed',
    display: 'flex',
    top: '110px',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '8px',
    fontFamily: 'Alumni Sans',
    fontSize: '30px',
    fontWeight: 'bold'
  },

  photoFooter: {
    backgroundColor: '#fff',
    opacity: '85%',
    color: '#1c1c1c',
    position: 'fixed',
    display: 'flex',
    bottom: '12px',
    justifyContent: 'center',
    width: '250px',
    padding: '8px',
    borderRadius: '8px',
    fontFamily: 'Alumni Sans',
  }

}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      
<div>     
    
        <section className={classes.gridContainer}>
            
        <Grid container spacing={0}>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>/ winter /</div>
            <Paper className={classes.paper}>product img here</Paper>
            <div className={classes.photoFooter}> Designed for colder climates, this capsule<br></br>
            includes the perfect winter wear that will<br></br>
            also leave your wallet warm and fuzzy.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>/ spring /</div>
            <Paper className={classes.paper}>product img here</Paper>
            <div className={classes.photoFooter}> Designed for colder climates, this capsule<br></br>
            includes the perfect winter wear that will<br></br>
            also leave your wallet warm and fuzzy.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>\ summer \</div>
            <Paper className={classes.paper}>product img here</Paper>
            <div className={classes.photoFooter}> Designed for colder climates, this capsule<br></br>
            includes the perfect winter wear that will<br></br>
            also leave your wallet warm and fuzzy.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>\ fall \</div>
            <Paper className={classes.paper}>product img here</Paper>
            <div className={classes.photoFooter}> Designed for colder climates, this capsule<br></br>
            includes the perfect winter wear that will<br></br>
            also leave your wallet warm and fuzzy.</div>
            </Grid>

        </Grid>
        </section>
</div>
  );
}

