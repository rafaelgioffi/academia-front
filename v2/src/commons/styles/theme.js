import { COBALT, BLACK_SQUEZEE } from "commons/constants/colors";

const theme = {
    components: {
        MuiCSSBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0
                }
            }
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