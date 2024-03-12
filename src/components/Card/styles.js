const styles = {
    card: (theme) => ({
        textAlign: 'left',
        borderRadius: '8px',
        border: `0.5px solid, ${theme.palette.slateBlue.main}`,
        //adding color from theme 
        padding: '44px',
        width: '403px',
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            maxWidth: '403px'
        }
    }),
    btn: {
        //adding color from theme 
        color: theme.palette.slateBlue.main,
        fontFamily: 'Montserrat',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        textDecorationLine: 'underline',
        textTransform: 'capitalize',
    }
}

export default styles;