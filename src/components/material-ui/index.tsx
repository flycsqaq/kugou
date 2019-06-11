import { Grid, Card, Typography, IconButton, Paper } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVertRounded';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';

export const MCard = Card

export const MPaper = Paper

export const MGraid = Grid

export const MTypography = Typography

export const MIconButton = IconButton

export const MMoreIcon = MoreIcon

export const MArrowRight = ArrowRight

export const MArrowLeft = ArrowLeft

export const MArrowDropDown = ArrowDropDown

export const MArrowDropUp = ArrowDropUp

export const MPlayArrow = PlayArrow

export const MPause = Pause

export const MNext = SkipNextIcon

export const MBack = SkipPreviousIcon

export const MButton = Button

export const MStyledSlider = withStyles({
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid #de235b',
    '&$focused, &:hover': {
      boxShadow: `0px 0px 0px ${8}px ${fade('#de235b', 0.16)}`,
    },
    '&$activated': {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade('#de235b', 0.16)}`,
    },
    '&$jumped': {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade('#de235b', 0.16)}`,
    },
  },
  track: {
    backgroundColor: '#de235b',
    height: 8,
  },
  trackAfter: {
    backgroundColor: '#d0d7dc',
  },
  focused: {},
  activated: {},
  jumped: {},
})(Slider);