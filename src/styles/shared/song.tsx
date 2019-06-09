import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const SongStyle = makeStyles((theme: Theme) =>
  createStyles({
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