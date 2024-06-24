import { Box, Container } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#4b4b7c',
        backgroundImage: 'url("footer1.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '4rem 0',
          color: 'white',
        }}
      >
        <Box>
          <Image
            src="/novalogic.png"
            alt="Footer logo"
            width={300}
            height={200}
          />
        </Box>
        <Box maxWidth={400} sx={{fontSize:'.75rem',letterSpacing:'2px',marginRight:'6rem'}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi provident vel optio labore animi perferendis officiis perspiciatis similique impedit quisquam, deserunt itaque corporis? Esse laudantium omnis quia aliquid ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo iusto et reprehenderit ratione praesentium beatae similique velit molestiae at!
        </Box>
        <Box >
          <ul style={{display:'flex',flexDirection:'column', gap:'1rem', paddingRight:'4rem'}}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>Testimonials</li>
          </ul>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Footer;
