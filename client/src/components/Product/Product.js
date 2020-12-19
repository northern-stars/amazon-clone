import React from 'react';
import { Grid,
         Card, 
         CardActions, 
         CardActionArea, 
         CardMedia, 
         CardContent, 
         Typography, 
         Button, 
         Paper 
        } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  image: {
    objectFit: 'scale-down',
    marginTop: '5px'
  },
  starIcon: {
    color: 'orange',  
  },
  rateStar: {
    // marginTop: '0.8rem',
  },
  productTitle: {
    display: 'block',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    height: '5.4em',
    lineHeight: '1.8em',
    
  },


}));

function Product({ id, title, image, price, rating }) {
  const classes = useStyles();

    return (
      <Grid item sm={4} xs={12}>
      
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.image}
                component="img"
                alt="Contemplative Reptile"
                height="150"
                image={image}
                title={title}
              />
              <CardContent>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h2"
                >
                    {price} <small>$</small>
                </Typography>
                <Typography
                  className={classes.productTitle} 
                  variant="body2" 
                  color="textPrimary" 
                  component="p"
                  
                >
                  {title}
                </Typography>
                <Typography className={classes.rateStar}>
                  {Array(rating)
                    .fill()
                    .map((_, i) => ( <StarRoundedIcon className={classes.starIcon} fontSize="small" />
                  ))}
                  {Array(5-rating)
                    .fill()
                    .map((_, i) => ( <StarBorderRoundedIcon color="disabled" fontSize="small"/>
                  ))}
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <strong>Detail</strong>
                </Button>
                <Button size="small" color="primary">
                  <strong>Add to Basket</strong>
                </Button>
              </CardActions>
          </Card>
        
      </Grid>
    );
};

export default Product







