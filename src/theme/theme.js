import { createMuiTheme } from '@material-ui/core/styles';

const tyfYellow = "#ffdf58"
const tyfBlack = "#293334"

const theme = createMuiTheme({
  palette: {
    common: {
      black: `${tyfBlack}`,
      yellow: `${tyfYellow}`
    },
    primary: {
      main: `${tyfBlack}`,
    },
    secondary: {
      main: `${tyfYellow}`,
    },
    textSecondary: {
      main: "#000"
    }
  },
});

export default theme