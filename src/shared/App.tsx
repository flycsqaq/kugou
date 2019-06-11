import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { AppStyle } from '@styles/shared/app'
import { MTypography } from '@components/material-ui'
import Router from '@shared/Router'
import Play from '@shared/Play'
import { PlayContainer } from '@context/play';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      'white-space': 'nowrap'
    },
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('lg')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    footerbar: {
      'padding-bottom': '150px'
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
    },
    footerBar: {
      top: 'auto',
      bottom: 0,
      'z-index': 1200,
      marginLeft: drawerWidth,
      [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    current: {
      background: '#afbfff'
    }
  }),
);

export default () => {
  const classess = AppStyle({})
  const classes = useStyles({});
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { play, songs } = PlayContainer.useContainer()
  // va Router = Router
  // const Play = Play
  const index = songs.findIndex((song: any) => song.hash === play.hash)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <MTypography component='h1'>
            我的歌单
          </MTypography>
        </ListItem>
        <ListItem>
          <ListItemText primary={`最近播放(${songs.length})`} />
        </ListItem>
        {
          songs.slice(index, index+5).map((song: any, num: number) => {
            if (num === 0) {
              return (
              <ListItem key={num} className={classes.current}>
                <MTypography  className={classes.listItem}>
                  {song.filename}
                </MTypography>
              </ListItem>
              )
            }
            return (
              <ListItem key={num}>
                <MTypography  className={classes.listItem}>
                  {song.filename}
                </MTypography>
              </ListItem>
            )
          })
        }
      </List>
        {/* <ListItem>
          <ListItemText primary={'我的收藏'} />
        </ListItem>
      <Divider />
      <List>
        <ListItem>
          <MTypography component='h1'>
            我的收藏
          </MTypography>
        </ListItem>
        <ListItem>
          <ListItemText primary={'歌单'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'歌曲'} />
        </ListItem>
      </List> */}
    </div>
  );
  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              KuGou
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="Mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, 
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classess.root}>
            <Router />
          </div>
          <div className={classes.footerbar} />
        </main>
        <AppBar position="fixed" className={classes.footerBar}>
        <Play />
      </AppBar>
      </div>
  )
}