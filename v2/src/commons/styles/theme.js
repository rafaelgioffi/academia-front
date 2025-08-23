import { COBALT, BLACK_SQUEZEE } from "commons/constants/colors";
import RalewayWolf from "assets/fonts/raleway-regular-webfont.woff";

const theme = {
    components: {
        MuiCSSBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Raleway';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWolf}) format('wolf2);
                inicodeRange: U-0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, 
                U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC;
        }
                body: {
                    margin: 0,
                    padding: 0
        }
                    `,
        }
    },
    palette: {
        primary: {
            main: COBALT
        },
        background: {
            default: BLACK_SQUEZEE
        },
    },
}

export default theme;