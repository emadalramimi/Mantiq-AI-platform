import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  AutoAwesome as AIIcon,
  TrendingUp,
  Warning,
  Insights,
  Analytics,
} from '@mui/icons-material';

const aiInsights = [
  {
    id: 1,
    title: 'Lead Scoring',
    description: 'AI-powered predictive scoring for lead potential',
    icon: <TrendingUp />,
    score: 85,
  },
  {
    id: 2,
    title: 'Deal Risk Assessment',
    description: 'Identifying potential bottlenecks in sales pipeline',
    icon: <Warning />,
    score: 65,
  },
  {
    id: 3,
    title: 'Sales Forecasting',
    description: 'Predictive analysis of revenue and growth',
    icon: <Insights />,
    score: 92,
  },
];

const recommendedActions = [
  {
    id: 1,
    title: 'High-Priority Leads',
    description: '5 leads with >80% conversion probability',
    actionText: 'View Leads',
  },
  {
    id: 2,
    title: 'Potential Deal Risks',
    description: '3 deals showing signs of potential delay',
    actionText: 'Mitigate Risks',
  },
];

const teamPerformance = [
  {
    name: 'Saleh Al-Harthi',
    role: 'Sales Manager',
    performance: 92,
    target: '120%',
    deals: 15,
    revenue: '$450,000'
  },
  {
    name: 'Khalid Al-Balushi',
    role: 'Sales Representative',
    performance: 85,
    target: '105%',
    deals: 12,
    revenue: '$350,000'
  },
  {
    name: 'Nasser Al-Rawahi',
    role: 'Sales Analyst',
    performance: 78,
    target: '95%',
    deals: 8,
    revenue: '$250,000'
  },
  {
    name: 'Adil Al-Siyabi',
    role: 'Business Development',
    performance: 88,
    target: '110%',
    deals: 10,
    revenue: '$320,000'
  }
];

export default function AIAnalysis() {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          AI-Powered Sales Intelligence
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Leverage advanced AI to gain deeper insights and make data-driven decisions
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* AI Insights Overview */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AIIcon sx={{ mr: 2, color: 'primary.main', fontSize: 40 }} />
                <Typography variant="h6">
                  Comprehensive AI Insights
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {aiInsights.map((insight) => (
                  <Grid item xs={12} sm={4} key={insight.id}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.main' }}>
                            {insight.icon}
                          </Avatar>
                          <Chip 
                            label={`${insight.score}%`} 
                            color={insight.score > 80 ? 'success' : insight.score > 60 ? 'warning' : 'error'}
                            size="small"
                          />
                        </Box>
                        <Typography variant="subtitle1">
                          {insight.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {insight.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Recommended Actions */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', p: 2, borderRadius: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
              <Avatar 
                sx={{ 
                  bgcolor: 'primary.light',
                  width: 48,
                  height: 48
                }}
              >
                <Analytics sx={{ color: 'primary.main' }} />
              </Avatar>
              <Typography variant="h5" fontWeight="600">
                Recommended Actions
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {recommendedActions.map((action) => (
                <Box
                  key={action.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: 'primary.lighter',
                        color: 'primary.main'
                      }}
                    >
                      <AIIcon />
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {action.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {action.description}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          }
                        }}
                      >
                        {action.actionText}
                      </Button>
                    </Box>
                  </Box>
                  {action.id < recommendedActions.length && (
                    <Divider sx={{ mt: 2 }} />
                  )}
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        {/* AI Configuration */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                AI Model Configuration
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        Lead Scoring Model
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Current accuracy: 85%
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="small" 
                        sx={{ mt: 2 }}
                      >
                        Retrain Model
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        Forecast Prediction
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Machine learning model trained on 5 years of data
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        size="small" 
                        sx={{ mt: 2 }}
                      >
                        Update Dataset
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        Risk Assessment
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Advanced probabilistic risk modeling
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="warning" 
                        size="small" 
                        sx={{ mt: 2 }}
                      >
                        Adjust Parameters
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
