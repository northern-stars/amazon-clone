import React from 'react'
import clsx from 'clsx';
import { AppBar,
         Drawer,
         Button,
         List,
         Divider,
         ListItemText,
         ListItemIcon,
         ListItem,
         Toolbar, 
         makeStyles,
         InputBase,
         BottomNavigation, 
         BottomNavigationAction,
         IconButton,
         MenuItem,
         Menu,
        } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cd9042',
    height: '22.1px',
    padding: '5.4px',
    borderRadius: '0 6px 6px 0'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
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
  }, 
  menuItem: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '200',
    marginRight: '5px'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
    >
        <MenuItem >
            <a className={classes.menuItem} href="/signin">Sign In/Up</a>
        </MenuItem>
        <MenuItem>
            <a className={classes.menuItem}>Log Out</a>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <a className={classes.menuItem}>Profile</a>
            <AccountCircle />
        </MenuItem>
        </Menu>
    );

    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: '#131921'}}>
        <Toolbar>
          <div>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer(anchor, true)}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
    
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
          
            <div className={classes.sectionDesktop}>
                <BottomNavigation
                    showLabels
                    className={classes.headerNavigation}
                >
                    <BottomNavigationAction className={classes.action} label="Sign In" href="/signin"/>
                    <BottomNavigationAction className={classes.action} label="& Orders" />
                    <BottomNavigationAction className={classes.action} label="Prime" />
                    <BottomNavigationAction className={classes.action} label="1" icon={<ShoppingBasketIcon/>} />  
                </BottomNavigation>
            
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            </div>

            <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMenu}
    
    </div>
  );
}
