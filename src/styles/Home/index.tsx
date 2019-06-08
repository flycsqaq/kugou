import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const HomeStyle = makeStyles((theme: Theme) =>
  createStyles({
    // newSongs: {
    //   flexBasis: '250px'
    // },
    flexContainer: {
      width: '100%',
    },
    flexPadding: {
      padding: '0 40px',
      position: 'relative',
    },
    title: {
      padding: '0.5em 0'
    },
    footerButton: {
      // 'flex-basis': '5%',
      margin: 'auto'
    },
    LRContainer: {
      height: '100%',
      display: 'flex',
      alignItems:'center'
    },
    footerContainer: {
      flexBasis: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    itemContainer: {
      display: 'flex',
      justifyContent: 'center'
      // height: '100%'
    },
    moreButton: {
      transform: 'rotate(90deg)'
    },
    leftButtom: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%'
    },
    rightButtom: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%'
    }
  })
)