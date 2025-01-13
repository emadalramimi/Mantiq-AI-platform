import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Tooltip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
} from '@mui/material';
import {
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  FilterList as FilterIcon,
  AutoFixHigh as AIIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  SentimentSatisfied as SentimentSatisfiedIcon,
  SentimentSatisfiedAlt as SentimentSatisfiedAltIcon,
  SentimentVeryDissatisfiedOutlined as SentimentVeryDissatisfiedOutlinedIcon,
} from '@mui/icons-material';
import GradientCard from '../components/common/GradientCard';
import AIChatInterface from '../components/common/AIChatInterface';

const socialMentions = [
  {
    id: 1,
    platform: 'Twitter',
    user: 'Ahmed Al-Balushi',
    content: 'Great experience with @SalesAI platform! The AI insights are game-changing. #SalesTech',
    sentiment: 'positive',
    engagement: 245,
    timestamp: '10 minutes ago',
    profileImage: '/path/to/ahmed.jpg'
  },
  {
    id: 2,
    platform: 'LinkedIn',
    user: 'Fatima Al-Harthy',
    content: 'Impressed by the innovative approach of SalesAI in transforming our sales processes.',
    sentiment: 'positive',
    engagement: 178,
    timestamp: '1 hour ago',
    profileImage: '/path/to/fatima.jpg'
  },
  {
    id: 3,
    platform: 'Facebook',
    user: 'Mohammed Al-Kindi',
    content: 'Having some issues with the integration. Support team please check.',
    sentiment: 'negative',
    engagement: 32,
    timestamp: '2 hours ago',
    profileImage: '/path/to/mohammed.jpg'
  }
];

const brandMetrics = {
  totalMentions: 1250,
  positiveSentiment: 75,
  negativeSentiment: 15,
  neutralSentiment: 10,
  trending: 'up',
  platforms: {
    Twitter: 450,
    LinkedIn: 380,
    Facebook: 280,
    Instagram: 140
  }
};

const trendingTopics = [
  { topic: '#SalesAI', count: 450, trend: 'up' },
  { topic: '#Innovation', count: 320, trend: 'up' },
  { topic: '#CustomerService', count: 280, trend: 'down' },
  { topic: '#TechSales', count: 180, trend: 'up' }
];

function SocialMediaMonitor() {
  const [filter, setFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('24h');

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'twitter':
        return <TwitterIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      default:
        return null;
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return <SentimentSatisfiedAltIcon />;
      case 'negative':
        return <SentimentVeryDissatisfiedIcon />;
      default:
        return <SentimentSatisfiedIcon />;
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'success';
      case 'negative':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Social Media Monitor
        </Typography>
        <Typography variant="body1" color="textSecondary">
          AI-powered social media monitoring and sentiment analysis
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Brand Metrics Overview */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                      Total Mentions
                    </Typography>
                    <Typography variant="h3" color="primary">
                      {brandMetrics.totalMentions}
                    </Typography>
                    <Chip 
                      icon={brandMetrics.trending === 'up' ? <TrendingUpIcon /> : <TrendingDownIcon />}
                      label={`${brandMetrics.trending === 'up' ? '+' : '-'}12% vs last week`}
                      color={brandMetrics.trending === 'up' ? 'success' : 'error'}
                      size="small"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                      Sentiment Distribution
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                      <Chip 
                        label={`${brandMetrics.positiveSentiment}% Positive`}
                        color="success"
                      />
                      <Chip 
                        label={`${brandMetrics.negativeSentiment}% Negative`}
                        color="error"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Platform Distribution
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(brandMetrics.platforms).map(([platform, count]) => (
                      <Grid item xs={6} key={platform}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {getPlatformIcon(platform)}
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="body2">{platform}</Typography>
                            <LinearProgress 
                              variant="determinate" 
                              value={(count / brandMetrics.totalMentions) * 100} 
                            />
                          </Box>
                          <Typography variant="body2">{count}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Social Mentions Feed */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">
                  Social Mentions
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <FormControl size="small">
                    <InputLabel>Platform</InputLabel>
                    <Select
                      value={filter}
                      label="Platform"
                      onChange={(e) => setFilter(e.target.value)}
                      sx={{ minWidth: 120 }}
                    >
                      <MenuItem value="all">All Platforms</MenuItem>
                      <MenuItem value="twitter">Twitter</MenuItem>
                      <MenuItem value="linkedin">LinkedIn</MenuItem>
                      <MenuItem value="facebook">Facebook</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small">
                    <InputLabel>Time Range</InputLabel>
                    <Select
                      value={timeRange}
                      label="Time Range"
                      onChange={(e) => setTimeRange(e.target.value)}
                      sx={{ minWidth: 120 }}
                    >
                      <MenuItem value="24h">Last 24 Hours</MenuItem>
                      <MenuItem value="7d">Last 7 Days</MenuItem>
                      <MenuItem value="30d">Last 30 Days</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              <List>
                {socialMentions.map((mention) => (
                  <ListItem key={mention.id} alignItems="flex-start" divider>
                    <ListItemAvatar>
                      <Avatar src={mention.profileImage}>
                        {getPlatformIcon(mention.platform)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="subtitle1">
                            {mention.user}
                          </Typography>
                          <Chip
                            icon={getPlatformIcon(mention.platform)}
                            label={mention.platform}
                            size="small"
                            variant="outlined"
                          />
                          <Chip
                            icon={getSentimentIcon(mention.sentiment)}
                            label={mention.sentiment}
                            size="small"
                            color={getSentimentColor(mention.sentiment)}
                          />
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body1" sx={{ my: 1 }}>
                            {mention.content}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="caption" color="textSecondary">
                              {mention.timestamp}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {mention.engagement} engagements
                            </Typography>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Trending Topics and AI Insights */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <GradientCard>
                <Typography variant="h6" gutterBottom color="white">
                  Trending Topics
                </Typography>
                <List>
                  {trendingTopics.map((topic) => (
                    <ListItem key={topic.topic}>
                      <ListItemText
                        primary={
                          <Typography color="white">
                            {topic.topic}
                          </Typography>
                        }
                        secondary={
                          <Typography color="white" variant="body2">
                            {topic.count} mentions
                          </Typography>
                        }
                      />
                      {topic.trend === 'up' ? (
                        <TrendingUpIcon sx={{ color: 'success.light' }} />
                      ) : (
                        <TrendingDownIcon sx={{ color: 'error.light' }} />
                      )}
                    </ListItem>
                  ))}
                </List>
              </GradientCard>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    AI Social Insights
                  </Typography>
                  <AIChatInterface />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SocialMediaMonitor;
