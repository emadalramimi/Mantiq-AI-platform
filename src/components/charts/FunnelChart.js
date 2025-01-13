import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const FunnelChart = ({ data, height = 300 }) => {
  const theme = useTheme();
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <Box sx={{ height, position: 'relative', mt: 2 }}>
      {data.map((item, index) => {
        const width = (item.value / maxValue) * 100;
        const opacity = 0.9 - (index * 0.1); // Adjusted opacity for better visibility
        
        return (
          <Box
            key={item.stage}
            sx={{
              position: 'relative',
              height: `${100 / data.length}%`,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 1.5, // Increased margin for better separation
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: `${(100 - width) / 2}%`,
                width: `${width}%`,
                height: '85%', // Increased height
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                opacity,
                borderRadius: 1,
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                '&:hover': {
                  opacity: opacity + 0.1,
                  transform: 'scale(1.02)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            />
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%',
                zIndex: 1, // Ensure text is above the bars
              }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 'medium',
                  color: theme.palette.text.primary
                }}
              >
                {item.stage}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 'bold',
                  color: theme.palette.text.primary
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default FunnelChart;
