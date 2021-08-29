import React from 'react';
import './Seasons.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from '../../components/Product/Product';



const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',  
    alignSelf: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '230px',
    margin: 0,
    padding: 0,
  },
  
  paper: {
    padding: theme.spacing(15),
    display: 'flex',
    top: '230px',
    height: '60vh',
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
      height: '60vh',
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
    top: '125px',
    justifyContent: 'center',
    padding: '10px',
    borderRadius: '8px',
    fontFamily: 'Raleway',
    fontSize: '35px',
    fontWeight: 'bold'
  },

  price: {
    position: 'absolute',
    zIndex: 1000,
    display: 'flex',
    bottom: '65px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '18px'
  },

  bagButton: {
    position: 'absolute',
    zIndex: 1000,
    display: 'flex',
    bottom: '20px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '8px',
    borderRadius: '8px'
  },

  photoFooter: {
    backgroundColor: '#fff',
    opacity: '85%',
    color: '#1c1c1c',
    position: 'fixed',
    display: 'flex',
    bottom: '20px',
    justifyContent: 'center',
    width: '300px',
    padding: '8px',
    borderRadius: '8px',
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontWeight: 'bold'
  }

}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      
<div>     
    
        <section className={classes.gridContainer}>
            
        <Grid container spacing={0}>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>winter</div>
            <p className={classes.price}>$199</p>
            <button className={classes.bagButton}>Add to Bag</button>
            <Paper className={classes.paper}><Product /></Paper>
            <div className={classes.photoFooter}> Designed for colder climates, this capsule includes the perfect winter wear that will also leave your wallet warm and fuzzy.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>spring</div>
            <p className={classes.price}>$149</p>
            <button className={classes.bagButton}>Add to Bag</button>
            <Paper className={classes.paper}><Product /></Paper>
            <div className={classes.photoFooter}> Whether it's going to be a sunny or soaked season, hot or humid, our spring capsule will accompany you every step of the way.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>summer</div>
            <p className={classes.price}>$179</p>
            <button className={classes.bagButton}>Add to Bag</button>
            <Paper className={classes.paper}><Product /></Paper>
            <div className={classes.photoFooter}> No need to sweat your style this summer, this collection is sure to beat the heat and fashion police. Limited quantity, order now!</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>fall</div>
            <p className={classes.price}>$179</p>
            <button className={classes.bagButton}>Add to Bag</button>
            <Paper className={classes.paper}><Product /></Paper>
            <div className={classes.photoFooter}> We dare you not to fall in love with these fall favorites. Although paired perfectly with Pumpkin Spice Latte's, this capsule is anything but basic.</div>
            </Grid>

        </Grid>
        </section>
</div>
  );
}

