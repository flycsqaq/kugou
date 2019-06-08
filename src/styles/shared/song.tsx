import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const SongStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: 'column'
    },
    songContainer: {
      flexBasis: '100%'
    },
    openButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      height: '100%',
      padding: '1rem 2rem',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }
  })
)