import React from 'react'
import { AppBar, Toolbar, makeStyles, InputBase, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const useStyles = makeStyles({
    appBar: {
        backgroundColor: '#131921',
        display: 'flex',
        // alignItems: 'left',
      
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
        border: 'none'
        
    },
    searchIcon: {
        backgroundColor: '#cd9042',
        height: '22.1px',
        padding: '5.4px',
    },
    headerSearch: {
        display: 'flex',
        flex: 1,
        alignItems: 'center'
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
    const styles = useStyles();

    return (
        <div className="header">
            <AppBar className={styles.appBar} position="static" >
                <Toolbar>
                    <img
                        className={styles.headerLogo}
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="brand logo"
                    />
                    <div className={styles.headerSearch}>
                        <InputBase 
                            className={styles.searchInput}
                            margin="none"
                            placeholder="Search.."
                            fullWidth
                        />
                        <SearchIcon className={styles.searchIcon}/>
                    </div>

                    <BottomNavigation
                        showLabels
                        className={styles.headerNavigation}
                    >
                        <BottomNavigationAction className={styles.action} label="Sign In" />
                        <BottomNavigationAction className={styles.action} label="& Orders" />
                        <BottomNavigationAction className={styles.action} label="Prime" />
                        <BottomNavigationAction className={styles.action} icon={<ShoppingBasketIcon/>} />

                        
                    </BottomNavigation>


                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;


