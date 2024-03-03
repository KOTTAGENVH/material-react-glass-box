import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const GlassBox = styled(Box)({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  padding: '20px',
});

function GlassBoxUI({ children, ...props }) {
  return React.createElement(GlassBox, props, children);
}

export default GlassBoxUI;
