import React from 'react'
import { Grid } from "@material-ui/core";
import './Home.css'
import  ProductData from '../Product/ProductData.json';


function Home() {
    console.log(ProductData)
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="background image"
                />
             </div>
        
      
    </div>
       
    )
};

export default Home;
