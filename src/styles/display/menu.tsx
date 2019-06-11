import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const MenuDisplayStyle = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  })
)