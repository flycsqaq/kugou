import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const AppStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem',
      background: '#e7e9fd',
      'min-height': '100vh'
    },
  })
)