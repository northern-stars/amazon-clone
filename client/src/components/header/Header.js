import React from 'react'
import { AppBar,
         Toolbar, 
         makeStyles, 
         InputBase,
         BottomNavigation, 
         BottomNavigationAction
        } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles({
    appBar: {
        backgroundColor: '#131921',
        display: 'flex',
    },
    headerLogo: {
        width: '100px',
        objectFit: 'contain',
        marginTop: '10px',
        marginRight: '1rem', 
    },
    searchInput: {
        backgroundColor: 'white',
        paddingLeft: '0.5rem',
        border: 'none',
        borderRadius: '6px 0 0 6px'
        
    },
    searchIcon: {
        backgroundColor: '#cd9042',
        height: '22.1px',
        padding: '5.4px',
        borderRadius: '0 6px 6px 0'
    },
    headerSearch: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    },
    headerNavigation: {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: '#131921',
        padding: '0px',  
    },
    action: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        fontWeight: 800,
        padding: '0px',
        margin: '0px' 
    } 
});

function Header() {
    const classes = useStyles();

    return (
        <div className="header">
            <AppBar className={classes.appBar} position="static" >
                <Toolbar>
                    <img
                        className={classes.headerLogo}
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="brand logo"
                    />
                    <div className={classes.headerSearch}>
                        <InputBase 
                            className={classes.searchInput}
                            margin="none"
                            placeholder="Search.."
                            fullWidth
                        />
                        <SearchIcon className={classes.searchIcon}/>
                    </div>

                    <BottomNavigation
                        showLabels
                        className={classes.headerNavigation}
                    >
                        <BottomNavigationAction className={classes.action} label="Sign In" />
                        <BottomNavigationAction className={classes.action} label="& Orders" />
                        <BottomNavigationAction className={classes.action} label="Prime" />
                        <BottomNavigationAction className={classes.action} icon={<ShoppingBasketIcon/>}/>  
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;


