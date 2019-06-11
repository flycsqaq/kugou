import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const playStyle = makeStyles((theme: Theme)=> 
  createStyles({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 0 auto'
    },
    content: {
      flex: '1 0 auto',
      justifyContent: 'center'
    },
    cycle: {
      float: 'left'
    },
    cover: {
      width: 151,
    },
    text: {
      textAlign: 'center'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      justifyContent: 'center'
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    floatRight: {
      float: 'right'
    },
    pag: {
      textAlign: 'center'
    },
    slider: {
      padding: theme.spacing(0, 3)
    },
    time: {
      padding: '5px 10px'
    }
}));