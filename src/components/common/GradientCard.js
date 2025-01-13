import React from 'react';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme, gradient }) => ({
  background: gradient || `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const GradientCard = ({ children, gradient, ...props }) => {
  return (
    <StyledPaper elevation={4} gradient={gradient} {...props}>
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </StyledPaper>
  );
};

export default GradientCard;
