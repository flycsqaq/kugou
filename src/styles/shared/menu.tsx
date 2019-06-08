import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const MenuStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'min-content'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
)