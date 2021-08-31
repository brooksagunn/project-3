import React from "react";
import './Product.css';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
    card: {
      borderRadius: '10px',
      boxShadow: 'none',
      position: 'relative',
      width: 300,
      height: 360,
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '33%',
        bottom: 0,
        zIndex: 0,
        background: 'linear-gradient(to top, rgba(228, 227, 201, 0.28), rgba(0,0,0,0))',
      },
    },
    content: {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      width: '100%',
      color: 'white'
    },
    media: {
        height: '100%',
        width: 'auto'
    }
}));



export default function Product(props) {
    const styles = useStyles();
    return(
        <Card className={styles.card} >
            <CardMedia
                className={styles.media}
                image={props.name}
            />
            <Box 
                py={3} 
                px={2}
                className={styles.content}
            >
            
            </Box>
        </Card>
    );
}

