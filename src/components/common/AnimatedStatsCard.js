import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    '& .icon-wrapper': {
      animation: `${pulse} 1s ease-in-out infinite`,
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(2),
}));

const AnimatedStatsCard = ({ icon, title, value, trend, subtitle, color }) => {
  return (
    <StyledPaper elevation={3}>
      <Box sx={{ position: 'relative' }}>
        <IconWrapper className="icon-wrapper" sx={{ bgcolor: `${color}.main` }}>
          {icon}
        </IconWrapper>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
          {value}
        </Typography>
        {trend && (
          <Typography
            variant="body2"
            sx={{
              color: trend.startsWith('+') ? 'success.main' : 'error.main',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            {trend}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </StyledPaper>
  );
};

export default AnimatedStatsCard;
