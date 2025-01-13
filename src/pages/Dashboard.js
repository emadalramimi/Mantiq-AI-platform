import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  IconButton,
  Button,
  Avatar,
  Tabs,
  Tab,
  Divider,
} from '@mui/material';
import { 
  TrendingUp,
  People,
  AttachMoney,
  Speed,
  MoreVert as MoreVertIcon,
  AutoAwesome as AIIcon,
} from '@mui/icons-material';
import SalesMetricsChart from '../components/charts/SalesMetricsChart';
import FunnelChart from '../components/charts/FunnelChart';
import ForecastChart from '../components/charts/ForecastChart';

// Enhanced mock data
const salesMetricsData = [{
  id: 'revenue',
  color: 'hsl(240, 70%, 50%)',
  data: [
    { x: 'Jan', y: 45 }, { x: 'Feb', y: 52 }, { x: 'Mar', y: 49 },
    { x: 'Apr', y: 63 }, { x: 'May', y: 58 }, { x: 'Jun', y: 71 },
    { x: 'Jul', y: 73 }, { x: 'Aug', y: 84 }, { x: 'Sep', y: 82 },
    { x: 'Oct', y: 88 }, { x: 'Nov', y: 85 }, { x: 'Dec', y: 92 }
  ]
}];

const forecastData = [{
  id: 'Actual',
  data: [
    { x: 'Q1', y: 150 }, { x: 'Q2', y: 180 }, { x: 'Q3', y: 210 }, { x: 'Q4', y: 240 }
  ]
}, {
  id: 'Forecast',
  data: [
    { x: 'Q1', y: 160 }, { x: 'Q2', y: 190 }, { x: 'Q3', y: 220 }, { x: 'Q4', y: 250 }
  ]
}];

const pipelineData = [
  { stage: 'Leads', value: 250 },
  { stage: 'Qualified', value: 180 },
  { stage: 'Meeting', value: 120 },
  { stage: 'Proposal', value: 80 },
  { stage: 'Negotiation', value: 40 },
  { stage: 'Closed', value: 25 },
];

const teamPerformance = [
  { name: 'John Doe', deals: 12, revenue: 150000, target: 80 },
  { name: 'Jane Smith', deals: 15, revenue: 180000, target: 95 },
  { name: 'Mike Johnson', deals: 10, revenue: 120000, target: 70 },
  { name: 'Sarah Wilson', deals: 14, revenue: 160000, target: 85 },
];

const StatCard = ({ title, value, icon, trend, color }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography color="textSecondary" variant="subtitle2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {value}
          </Typography>
          {trend && (
            <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <TrendingUp sx={{ fontSize: 16, mr: 0.5 }} />
              {trend}
            </Typography>
          )}
        </Box>
        <Avatar sx={{ bgcolor: `${color}.light`, color: `${color}.main` }}>
          {icon}
        </Avatar>
      </Box>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome back, Emad! 👋
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Here's what's happening with your sales today.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Revenue"
            value="$842,000"
            icon={<AttachMoney />}
            trend="+16% from last month"
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Leads"
            value="267"
            icon={<People />}
            trend="+5.2% from last month"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Win Rate"
            value="64%"
            icon={<Speed />}
            trend="+2.4% from last month"
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Avg. Deal Size"
            value="$24,500"
            icon={<TrendingUp />}
            trend="+12% from last month"
            color="warning"
          />
        </Grid>

        {/* Sales Metrics Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">Sales Performance</Typography>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <SalesMetricsChart data={salesMetricsData} height={400} />
            </CardContent>
          </Card>
        </Grid>

        {/* Pipeline Funnel */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales Pipeline
              </Typography>
              <FunnelChart data={pipelineData} height={400} />
            </CardContent>
          </Card>
        </Grid>

        {/* Forecast Chart */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">Revenue Forecast</Typography>
                <Button
                  variant="contained"
                  startIcon={<AIIcon />}
                  size="small"
                >
                  AI Insights
                </Button>
              </Box>
              <ForecastChart data={forecastData} height={300} />
            </CardContent>
          </Card>
        </Grid>

        {/* Team Performance */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Team Performance
              </Typography>
              <Grid container spacing={2}>
                {teamPerformance.map((member, index) => (
                  <Grid item xs={12} md={3} key={index}>
                    <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ mr: 2 }}>{member.name.charAt(0)}</Avatar>
                        <Box>
                          <Typography variant="subtitle1">{member.name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            Sales Representative
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="body2" color="textSecondary">
                          Target Achievement
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ flexGrow: 1, mr: 1 }}>
                            <LinearProgress
                              variant="determinate"
                              value={member.target}
                              sx={{ height: 8, borderRadius: 4 }}
                            />
                          </Box>
                          <Typography variant="body2">{member.target}%</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h6">
                            ${(member.revenue / 1000).toFixed(1)}k
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Revenue
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="h6">
                            {member.deals}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Deals
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* AI Insights */}
        <Grid item xs={12}>
          <Card sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🤖 AI Insights
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Lead Prioritization
                    </Typography>
                    <Typography variant="body2">
                      5 high-value leads require immediate follow-up based on engagement patterns.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        bgcolor: 'background.paper',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'background.paper',
                          opacity: 0.9,
                        },
                      }}
                    >
                      View Leads
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Deal Risk Analysis
                    </Typography>
                    <Typography variant="body2">
                      3 deals in negotiation phase show signs of potential delays. Recommended actions available.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        bgcolor: 'background.paper',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'background.paper',
                          opacity: 0.9,
                        },
                      }}
                    >
                      View Risks
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Revenue Optimization
                    </Typography>
                    <Typography variant="body2">
                      AI suggests potential for 15% revenue increase through optimized deal timing and pricing strategies.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        bgcolor: 'background.paper',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'background.paper',
                          opacity: 0.9,
                        },
                      }}
                    >
                      View Strategy
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
