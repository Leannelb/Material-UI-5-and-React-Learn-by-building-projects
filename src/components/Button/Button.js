import React from 'react'
import MuiButton from '@mui/material/Button';


const styles = {
    btn:(theme) =>({
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'capitalize',
        color: 'white',
        padding: '20px, 60px', // padding top and bottom = 20, padding l & r 60px
        borderRadius: '8px',
        background: theme.palette.slateBlue.main,
        '&:hover': {
            background: '#646ab0'
        },
    }),
}
const Button = ({children}) => {
  return (
    <MuiButton sx={styles.btn}>{children}</MuiButton>
  )
}

export default Button