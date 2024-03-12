const styles = {
    card: (theme) => ({
        textAlign: 'left',
        borderRadius: '8px',
        border: `0.5px solid, ${theme.palette.slateBlue.main}`,
        padding: '44px',
        width: '403px',
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            maxWidth:'403px'
        }
    })
}

export default styles;