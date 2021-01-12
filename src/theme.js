import { green, grey, orange, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#83CFDF',
    },
    secondary: {
      main: '#708ED2',
    },
    background: {
      default: '#272532',
      paper: '#373B69',
    },
    divider: '#708ED2',
    text: {
      primary: '#EBE5E2',
      secondary: grey[400],
    },
    success: {
      main: green.A400,
    },
    warning: {
      main: orange.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
