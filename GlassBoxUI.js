import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const GlassBox = styled(Box)({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  padding: '20px',
});

const GlassBoxUI = ({ children, ...props }) => {
  return <GlassBox {...props}>{children}</GlassBox>;
};

export default GlassBoxUI;
