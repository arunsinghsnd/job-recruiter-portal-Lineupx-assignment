import React from 'react';
import clsx from 'clsx'; // utility for constructing className strings conditionally. Also serves as a faster & smaller drop-in replacement for the classnames module. 
import { makeStyles, useTheme } from '@material-ui/core/styles';// this is imported styles using material UI
import {Drawer, CssBaseline,
    AppBar,Toolbar,
    List,Typography,
    Divider,ListItem,
    ListItemIcon,
    ListItemText,
    Badge,Link} from '@material-ui/core'; // this is imported material ui elements and components 

 // form icons used and imported files   
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import GroupIcon from '@material-ui/icons/Group';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import WorkIcon from '@material-ui/icons/Work';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Lineup from './Lineup.png';// logo imported of websites
import './Drawer.css'; // css files imported

const drawerWidth = 240; // this is width of the drawer while open how much it take the screen


// form here is providing the styling to the Drawer

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

// here ends the styling 



// creating multiple function to proving the functionally and transiation 
export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          

          

          <Typography variant="h6" noWrap>
          <Link href="#">
                <p><img style={{paddingTop: '0px'}} alt='logo' src={Lineup} height={30}/></p>
         </Link>
            
          </Typography>
          <div style={{ marginLeft: '550px' }}>
            <IconButton aria-label="" color="inherit">
              <Badge  color="primary">
                <MailIcon  fontSize="large"/>
              </Badge>
            </IconButton>
            <IconButton aria-label="" color="inherit">
              <Badge color="secondary">
                <GroupIcon  fontSize="large"/>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              
              aria-haspopup="true"
              
              color="inherit"
            >
              <AccountCircle  fontSize="large"/>
              <Typography>User Name</Typography>
              <ArrowDropDownIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Typography color='primary'><lable>Navigation Menu</lable></Typography>
        <List>
          {['Dashboard', 'Candidates'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <DashboardIcon /> : <AccountBoxIcon  />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
         <Typography  color='primary'><lable>Jobs</lable></Typography>
        <List>  
          {['Live',  'Rejected Jobs', 'Accepted Jobs'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <WorkIcon /> : <WorkOffIcon  />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
         <Typography color='primary'><lable>Supports</lable></Typography>
        <List>
          {[' Help Desk', 'Tutorial', 'Feedback'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <LiveHelpIcon /> : <FeedbackIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          
        </Typography>
      </main>
    </div>
  );
}
