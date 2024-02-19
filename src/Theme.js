import { createTheme } from "@mui/material";
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const breakpoints = createBreakpoints({})

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
            color: '#000000',
            [breakpoints.up('md')]: {
                fontSize: '64px',
                lineHeight: '78px'
            }
        },
        body1: {
            fontFamily: 'Monserrat, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#686868',
            [breakpoints.up('md')]: {
                fontSize: '24px',
                lineHeight: '29px'
            }
        }
    }
})

export default theme;