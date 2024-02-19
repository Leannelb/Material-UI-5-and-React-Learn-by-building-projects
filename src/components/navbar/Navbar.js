import React from 'react'
import {Button, Box} from '@mui/material';
import MuiButton from '@mui/material/Button';
import arrow from '../../assets/img/chevron-down.svg';

const pages =[ 
    {title: 'Demos', arrow: true},
    {title: 'Services', arrow: true},
    {title: 'Pages', arrow: true},
    {title: 'Portfolio', arrow: true},
    {title: 'Blog', arrow: true},
    {title: 'Contact', arrow: false}
];

const styles = {
    btnLink:{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: 500,
        textTransform: 'capitalize',
        display: 'flex',
        padding: '0',
        marginRight: '44px',
        color: 'black'

    }
}

const Navbar = () => {
  return  (
    <Box sx={{flexGrow: 1, display: {lg: 'flex'}, justifyContent:'flex-end'}}>
        {pages.map((page,index) => (
            <MuiButton key={index} sx={styles.btnLink}>
                {page.title}
                {page.arrow && (
                    <img src={arrow} style={{marginLeft: '5px'}} alt='arrow' />
                )}
            </MuiButton>
        ))}
    </Box>
  )
}
export default Navbar