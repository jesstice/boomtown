import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  lightBlue200,
  blueGrey900,
  white
} from 'material-ui/styles/colors';

export default getMuiTheme({
    palette: {
        textColor: blueGrey900,
        alternateTextColor: white,
        primary1Color: lightBlue200,
        accent1Color: blueGrey900
    },
    appBar: {
        color: white,
    }
    // raisedButton: {
    //     color: palette.alternateTextColor,
    //     textColor: palette.textColor,
    //     primaryColor: palette.primary1Color,
    //     primaryTextColor: palette.alternateTextColor,
    //     secondaryColor: palette.accent1Color,
    //     secondaryTextColor: palette.alternateTextColor
    // }
});
