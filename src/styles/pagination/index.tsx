import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const PaginationStyle = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      flexBasis: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    left: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    right: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
)