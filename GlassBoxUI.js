import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const GlassBox = styled(Box)({
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow:
    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)",
  borderRadius: '20px',
  padding: '20px',
});

function GlassBoxUI({ children, ...props }) {
  return React.createElement(GlassBox, props, children);
}

export default GlassBoxUI;
