import React from "react";
import { NavLink } from "react-router-dom";

// side drawer imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    // marginLeft: theme.spacing(2),
    marginLeft: "0",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: "fixed",
    top: "12px",
    zIndex: "1000",
    background: "#191d2b",
    color: "#f4f4f4",
    borderRadius: "0",

  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#191d2b"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const navbarLinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "My Work",
    link: "/work"
  },
  {
    name: "Contact",
    link: "/contact"
  }
]

const NavigationBar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div style={mobileOpen ? { display: "block", position: "absolute", left: "210px", top: "10px" } : { display: "none" }}>
        <IconButton onClick={handleDrawerClose} >
          <CloseIcon style={{ fill: "#f4f4f4" }} />
        </IconButton>
      </div>
      <div style={{ width: "200px", height: "240px", padding: "20px 0" }} className="mx-auto">
        <img src="https://tf-react-chester.now.sh/images/brand-image.jpg" alt="1" style={{ width: "100%", borderRadius: "50%", border: "7px solid #2e344e" }} />
      </div>
      <Divider />
      <List>
        {navbarLinks.map((data, index) => (
          <ListItem
            button
            exact
            key={`${data.name}_${index}`}
            style={{ color: "rgba(244,244,244,.8)", textAlign: "center" }}
            to={data.link}
            component={NavLink}
            activeStyle={{
              background: "#037fff"
            }}
          >
            <div className="navigation-title-wrapper">
              <span className="navigation-title-text">{data.name}</span>
            </div>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon style={{ fill: "#f4f4f4", fontSize: '2.5rem' }} />
        </IconButton>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>

        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default NavigationBar;