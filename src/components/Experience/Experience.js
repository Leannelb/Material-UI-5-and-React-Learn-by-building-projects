import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './styles'
import dashboard_photo from '../../assets/img/dashborad-photo.svg';
import landing_page from '../../assets/img/landing-page-photo.svg';
import illustration from '../../assets/img/ilustraton-page-photo.svg';
import { Grid, Link } from '@mui/material';


const links = [
    'Show all', 'Design', 'Branding', 'Development', 'Seo', 'UX/UI Design'
]
const Experience = () => {
    return (
        <Box sx={styles.experience}>
            <Box sx={styles.wrapper}>
                <Typography variant='h2'>professional experience</Typography>
                <Typography variant='body1' sx={{ textTransform: 'capitalize', margin: '25px 0' }}>professional design agency to provide solutions</Typography>

                <Box sx={styles.links}>
                    {links.map((link, index) => {
                        return (
                            <Link key={index} sx={styles.link}>
                                {link}
                            </Link>
                        )
                    })}
                </Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center'>
                    <Grid item xs={6} sm={4} md={4}>
                        <Box>
                            <Box component='img' src={dashboard_photo} sx={styles.imgItem} />
                            <Typography sx={styles.contentTitle}>Dashboard desgin</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center'>
                    <Grid item xs={6} sm={4} md={4}>
                        <Box>
                            <Box component='img' src={landing_page} sx={styles.imgItem} />
                            <Typography sx={styles.contentTitle}>Landing page</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center'>
                    <Grid item xs={6} sm={4} md={4}>
                        <Box>
                            <Box component='img' src={illustration} sx={styles.imgItem} />
                            <Typography sx={styles.contentTitle}>Illustration desgin</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Box>

    )
}

export default Experience