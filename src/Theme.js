import { createTheme } from "@mui/material";

export const theme = createTheme ({
    palette: {
        primary: {
            main: '#686868',
        },
        slateBlue: {
            main: '#777FEB',
        }
    },
    typography:{
        h2: {
            fontFamily: 'Monserrat, sans-serif',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '39px',
            color: '#000000'
        }
    }
})

export default theme;