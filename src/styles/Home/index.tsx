import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const HomeStyle = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      padding: '10px 0'
    },
    moreButton: {
      transform: 'rotate(90deg)'
    }
  })
)