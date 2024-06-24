import { Box, Button, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <Box>
      <Container style={{ padding: '2rem', display: 'flex' }}>
        <Box
          sx={{
            flex: '1',
            display: 'flex',
            alignItems: 'baseline',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box maxWidth={400} fontSize={'1.6rem'}>
            <b> Lorem ipsum, dolor sit amet </b> consectetur adipisicing elit.
            Quibusdam neque optio iusto perferendis provident suscipit
            dignissimos reiciendis saepe obcaecati molestias?
          </Box>
          <Button  
            sx={{
              marginBottom: '2rem', 
              color: 'aliceblue',
            //   padding: '.5rem 2rem',
              fontSize: '1rem',
            }}
          >
            Login &rarr;
          </Button>
        </Box>
        <Box sx={{ flex: '1' }}>
          <Image
            width={1000}
            height={760}
            src={'/hero-desktop.png'}
            alt="hero desktop"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
