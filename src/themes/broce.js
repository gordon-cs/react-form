import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';

const cyan = '#00adef';

const myTheme = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan,
    primary2Color: cyan,
    primary3Color: Colors.lightBlack,
    accent1Color: cyan,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
  },
  checkbox: {
    boxColor: '#9b9b9b',
    checkedColor: cyan
  },
  flatButton: {
    textColor: '#646464'
  }
};

export default myTheme;
