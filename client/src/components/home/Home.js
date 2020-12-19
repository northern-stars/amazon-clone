import React from 'react'
import { Grid, Paper } from "@material-ui/core";
import Product from '../Product/Product'
import ProductData from '../Product/ProductData.json';
import {makeStyles} from '@material-ui/core/styles';
import { ImageStyled  } from "./Home.styled";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: 'flex'
  },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
      padding: '20px',
    }
  }));

function Home() {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
        <ImageStyled>
          <img 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          />
        </ImageStyled>
                
        <div className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} style={{height: '15rem'}}>               
            </Grid>
              {ProductData.map(d => 
                <Product
                  title={d.title}
                  price={d.price}
                  rating={d.rating}
                  image={d.image}
                  name={d.name}
                />)}   
          </Grid>
        </div>
      </div>     
    )
};

export default Home;
