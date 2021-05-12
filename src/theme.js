import { grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8190EB',
      dark: '#5C5C90',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#81D4FC',
    },
    background: {
      default: '#1E1F33',
      paper: '#292847',
    },
    divider: '#403F6B',
    text: {
      primary: '#FFFFFF',
      secondary: grey[400],
    },
    success: {
      main: '#B2FF59',
    },
    warning: {
      main: '#FF8F02',
    },
    error: {
      main: '#FF3D00',
    },
  },
});

export default theme;
