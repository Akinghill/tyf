import { createMuiTheme } from '@material-ui/core/styles';

const tyfYellow = "#fdd835"
const tyfBlack = "#000000"


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