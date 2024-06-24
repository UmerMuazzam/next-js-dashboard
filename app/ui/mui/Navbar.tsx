import { Box, Button, Container } from '@mui/material'
import Image from 'next/image';
import React from 'react'


const pages= ['Home','About','Contact','Services','Testimonials']
const Navbar = () => {
  return (
    <Box sx={{ bgcolor: '#4b4b7c', padding: '1rem 0' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Image width={150} height={50} src="/novalogic.png" alt="Novalogic" />
        </Box>
        <Box margin={'auto 0'}>
          <ul style={{ display: 'flex', gap: '1rem', color: 'white' , alignItems:'center' }}>
            {pages.map((page, i) => (
              <Button key={i}>{page}</Button>
            ))}
          </ul>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar
