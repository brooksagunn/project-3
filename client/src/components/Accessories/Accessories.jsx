// import React from "react";
// import './Accessories.css';

// export default function Bag() {
//     return (
        
//         // <div className="head">
            
//         //         <h1>Coming Soon!</h1>
        
//         // </div>








//     );
// }


import React from 'react';
import Converse from '../../assets/images/converse.jpg';
import DrMartens from '../../assets/images/drmartens.jpg';
import CarsCrocs from '../../assets/images/crocs.jpg';
import Toms from '../../assets/images/toms.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from '../../components/Product/Product';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";



const accessories=[Converse, DrMartens, CarsCrocs, Toms]



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
    zIndex: 500,
    display: 'flex',
    bottom: '65px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '18px'
  },

  bagButton: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '18px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '9.5px',
    borderRadius: '8px',
    left: '300px'
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
  },

  addBag1: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '20px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '2px',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '128px',
    height: '36px',
    left: '60px'
  },

  addBag2: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '20px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '2px',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '128px',
    height: '36px',
    left: '60px'
  },

  addBag3: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '20px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '2px',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '128px',
    height: '36px',
    left: '60px'
  },

  addBag4: {
    position: 'absolute',
    zIndex: 500,
    display: 'flex',
    bottom: '20px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '2px',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '128px',
    height: '36px',
    left: '60px'
  },

}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const itemCounter = {
    Converse: 0,
    DrMartens: 0,
    CarsCrocs: 0,
    Toms: 0
  }
  const [itemCount, setItemCount] = React.useState(itemCounter);
  

  return (
      
<div class='body'>     
    
        <section className={classes.gridContainer}>
            
        <Grid container spacing={0}>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>Converse</div>
              <p className={classes.price}>$59</p>
                <button className={classes.bagButton}>Add to Bag</button>
            <div className={classes.addBag1}>
              <Badge color="secondary" badgeContent={itemCount.Converse}>
                <LocalMallIcon />{" "}
              </Badge>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      setItemCount({...itemCount, Converse: Math.max(itemCount.Converse - 1, 0)});
                    }}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    onClick={() => {
                      setItemCount({...itemCount, Converse: itemCount.Converse + 1});
                    }}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
            </div>

            <Paper className={classes.paper}><Product name={accessories[0]}/></Paper>

            <div className={classes.photoFooter}> Designed for colder climates, this capsule includes the perfect winter wear that will also leave your wallet warm and fuzzy.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>Dr Martens</div>
            <p className={classes.price}>$139</p>
            <button className={classes.bagButton}>Add to Bag</button>
            <div className={classes.addBag2}>
          <div>
            <Badge color="secondary" badgeContent={itemCount.DrMartens}>
            <LocalMallIcon />{" "}
            </Badge>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, DrMartens: Math.max(itemCount.DrMartens - 1, 0)});
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, DrMartens: itemCount.DrMartens + 1});
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
            <Paper className={classes.paper}><Product name={accessories[1]}/></Paper>
            <div className={classes.photoFooter}> Whether it's going to be a sunny or soaked season, hot or humid, our spring capsule will accompany you every step of the way.</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>Cars Crocs</div>
            <p className={classes.price}>$69</p>
            <button className={classes.bagButton}>Add to Bag</button>
            <div className={classes.addBag3}>
          <div>
            <Badge color="secondary" badgeContent={itemCount.CarsCrocs}>
            <LocalMallIcon />{" "}
            </Badge>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, CarsCrocs: Math.max(itemCount.CarsCrocs - 1, 0)});
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, CarsCrocs: itemCount.CarsCrocs + 1});
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
            <Paper className={classes.paper}><Product name={accessories[2]}/></Paper>
            <div className={classes.photoFooter}> No need to sweat your style this summer, this collection is sure to beat the heat and fashion police. Limited quantity, order now!</div>
            </Grid>

            <Grid className={classes.grid} item xs={3} sm={3}>
            <div className={classes.photoTitle}>Toms</div>
            <p className={classes.price}>$79</p>
            <div className={classes.addBag4}>
          <div>
            <Badge color="secondary" badgeContent={itemCount.Toms}>
              <LocalMallIcon />{" "}
            </Badge>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, Toms: Math.max(itemCount.Toms - 1, 0)});
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  setItemCount({...itemCount, Toms: itemCount.Toms+ 1});
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
            <button className={classes.bagButton}>Add to Bag</button>
            <Paper className={classes.paper}><Product name={accessories[3]}/></Paper>
            <div className={classes.photoFooter}> We dare you not to fall in love with these fall favorites. Although paired perfectly with Pumpkin Spice Latte's, this capsule is anything but basic.</div>
            </Grid>

        </Grid>      

        </section>
</div>
  );
}

