import * as React from 'react';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';

import Typography from '@mui/material/Typography';

import arrowRight from '../../assets/img/arrow-right.svg'
import strategy from '../../assets/img/strategy.svg'
import { ListItem } from '@mui/material';
import styles from './styles';

const Card = () => {
    return (
        <MuiCard >
            <CardContent sx={{ padding: 0 }}>
                <Box component='img' src={strategy} />
                <Typography variant='h3'>
                    stratgeyy
                </Typography>
                <List>
                    <ListItem sx={styles.listItem}>
                        <Box component="img" sx={styles.image} src={arrowRight} />
                        Product management
                    </ListItem>

                    <ListItem sx={styles.listItem}>
                        <Box component="img" sx={styles.image} src={arrowRight} />
                        mvp definition
                    </ListItem>
                    <ListItem sx={styles.listItem}>
                        <Box component="img" sx={styles.image} src={arrowRight} />
                        Product strategy

                    </ListItem>

                </List>
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
                <Button>Read more
                    <Box component="img" sx={styles.image} src={arrowRight} />

                </Button>
            </CardActions>
        </MuiCard>
    )
}

export default Card