import React from 'react'
import { Box, } from '@mui/material'
import Header from './components/Header'
import ContactUs from './components/ContactUs'
import Hero from './components/Hero';
import Card from './components/Card';
import CreativeDesign from './components/CreativeDesign';
import Experience from './components/Experience';

const App = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Card />
      <CreativeDesign />
      <Experience />
      <ContactUs />
    </Box>
  )
}

export default App
