import React from 'react';
import './Seasons.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  gridContainer: {
  //   display: 'flex',  
  //   // alignSelf: 'center',
  //   // alignItems: 'center',
  //   position: 'relative',
  //   // top: '230px',
  marginTop: 'auto',
  //   // padding: 0,
  },
  
  paper: {
    padding: theme.spacing(15),
    display: 'flex',
    // top: '250px',
    height: '60vh',
    width: '88%',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    color: '#fff',
    backgroundColor: '#1c1c1c',
    opacity: '90%',
    borderRadius: '10px',
    margin: '10px'
  },

  grid: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center'
  },

  photoTitle: {
    backgroundColor: '#fff',
    opacity: '85%',
    color: '#1c1c1c',
    // position: 'fixed',
    display: 'flex',
    // top: '100px',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '8px',
    fontFamily: 'Raleway',
    fontSize: '30px',
    fontWeight: 'bold'
  },

  photoFooter: {
    backgroundColor: '#fff',
    opacity: '85%',
    color: '#1c1c1c',
    // position: 'fixed',
    display: 'flex',
    // bottom: '15px',
    justifyContent: 'center',
    width: '250px',
    padding: '8px',
    borderRadius: '8px',
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: 'bold'
  }

}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      
<div>     
    
        {/* <section className={classes.gridContainer}> */}
            
        <Grid container spacing={0}>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>winter</div>
            <Paper className={classes.paper}>product img</Paper>
            <div className={classes.photoFooter}> Designed for colder climates, this capsule includes the perfect winter wear that will also leave your wallet warm and fuzzy.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>spring</div>
            <Paper className={classes.paper}>product img</Paper>
            <div className={classes.photoFooter}> Whether it's going to be a sunny or soaked season, hot or humid, our spring capsule will accompany you every step of the way.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>summer</div>
            <Paper className={classes.paper}>product img</Paper>
            <div className={classes.photoFooter}> No need to sweat your style this summer, this collection is sure to beat the heat and fashion police. Limited quantity, order now!</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>fall</div>
            <Paper className={classes.paper}>product img</Paper>
            <div className={classes.photoFooter}> We dare you not to fall in love with these fall favorites. Although paired perfectly with Pumpkin Spice Latte's, this capsule is anything but basic.</div>
            </Grid>

        </Grid>
        {/* </section> */}
</div>
  );
}

