import { Box, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react';
import Button from '../Button';
import { MailOutline, LocalPhone, ArrowForwardIosOutlined } from '@mui/icons-material';
import photo_send from '../../assets/img/photo_send_2.png';
import styles from './styles';

const ContactUs = () => {
  return (
    <Box sx={styles.contactUs}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.form}>
          <Typography variant='h2'>Mind! contact us</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, sagittis eget facilisi in in urna tristique risus. Tortor consectetur nulla pretium malesuada porttitor.</Typography>
        </Box>
        <Box sx={styles.info}>
          <Box sx={styles.itemBlockInfo}>
            <Box sx={styles.titleInfo}>
              <MailOutline sx={styles.imgInfo} />
              email us
            </Box>
            <Box sx={styles.titleValue}>
              support@gmail.com
            </Box>

            <Box sx={styles.titleInfo}>
              <LocalPhone sx={styles.imgInfo} />
              phone us
            </Box>
            <Box sx={styles.titleValue}>
              +353 899 764 144
            </Box>

            <Box sx={styles.input}>
              <TextField placeholder='full name' sx={styles.TextField} />
              <TextField placeholder='email address' sx={styles.TextField} />
            </Box>
            <TextareaAutosize minRows={6}
              placeholder='write message'
              style={styles.textareaAutosize}
            />
            <Button>send us a message <ArrowForwardIosOutlined /></Button>

          </Box>
          <Box>
            <Box component='img' src={photo_send} sx={styles.photo}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactUs