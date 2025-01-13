import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Tooltip,
  Avatar,
} from '@mui/material';
import {
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Search as SearchIcon,
  AutoFixHigh as AIIcon,
} from '@mui/icons-material';
import GradientCard from '../components/common/GradientCard';
import AIChatInterface from '../components/common/AIChatInterface';

const competitorData = [
  {
    id: 1,
    name: 'Tech Horizon Solutions',
    industry: 'Enterprise Software',
    marketShare: 15,
    marketTrend: 'up',
    recentNews: [
      'Launched new AI-powered analytics platform',
      'Secured $50M in Series C funding',
    ],
    strengths: ['AI Integration', 'Cloud Services', 'Enterprise Solutions'],
    weaknesses: ['High Pricing', 'Complex Onboarding'],
  },
  {
    id: 2,
    name: 'Digital Transformation Inc.',
    industry: 'Business Consulting',
    marketShare: 12,
    marketTrend: 'down',
    recentNews: [
      'Restructuring leadership team',
      'Reduced workforce by 10%',
    ],
    strengths: ['Strategic Consulting', 'Global Presence'],
    weaknesses: ['Slow Innovation', 'Limited Tech Capabilities'],
  },
];

export default function CompetitiveIntelligence() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompetitors, setFilteredCompetitors] = useState(competitorData);

  const handleSearch = () => {
    const filtered = competitorData.filter(competitor => 
      competitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      competitor.industry.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCompetitors(filtered);
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Competitive Intelligence
        </Typography>
        <Typography variant="body1" color="textSecondary">
          AI-powered market and competitor analysis
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Competitor Search */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Search Competitors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={handleSearch}>
                        <SearchIcon />
                      </IconButton>
                    ),
                  }}
                />
              </Box>

              <List>
                {filteredCompetitors.map((competitor) => (
                  <React.Fragment key={competitor.id}>
                    <ListItem>
                      <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                        <BusinessIcon />
                      </Avatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                              {competitor.name}
                            </Typography>
                            <Chip 
                              label={`Market Share: ${competitor.marketShare}%`} 
                              color="primary" 
                              size="small" 
                              sx={{ mr: 1 }}
                            />
                            {competitor.marketTrend === 'up' ? (
                              <TrendingUpIcon color="success" fontSize="small" />
                            ) : (
                              <TrendingDownIcon color="error" fontSize="small" />
                            )}
                          </Box>
                        }
                        secondary={competitor.industry}
                      />
                    </ListItem>
                    <Box sx={{ pl: 10, pr: 2, pb: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Recent News
                      </Typography>
                      {competitor.recentNews.map((news, index) => (
                        <Chip 
                          key={index} 
                          label={news} 
                          size="small" 
                          variant="outlined" 
                          sx={{ mr: 1, mb: 1 }} 
                        />
                      ))}
                      <Box sx={{ display: 'flex', mt: 2 }}>
                        <Box sx={{ mr: 4 }}>
                          <Typography variant="subtitle2" color="text.secondary">
                            Strengths
                          </Typography>
                          {competitor.strengths.map((strength, index) => (
                            <Chip 
                              key={index} 
                              label={strength} 
                              size="small" 
                              color="success" 
                              variant="outlined" 
                              sx={{ mr: 1, mb: 1 }} 
                            />
                          ))}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary">
                            Weaknesses
                          </Typography>
                          {competitor.weaknesses.map((weakness, index) => (
                            <Chip 
                              key={index} 
                              label={weakness} 
                              size="small" 
                              color="error" 
                              variant="outlined" 
                              sx={{ mr: 1, mb: 1 }} 
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* AI Insights */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <GradientCard>
                <Typography variant="h6" gutterBottom color="white">
                  AI Market Insights
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {filteredCompetitors.map((competitor) => (
                    <Box 
                      key={competitor.id} 
                      sx={{ 
                        bgcolor: 'rgba(255,255,255,0.1)', 
                        p: 2, 
                        borderRadius: 2 
                      }}
                    >
                      <Typography variant="subtitle1" color="white">
                        {competitor.name} - Strategic Analysis
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <AIIcon sx={{ color: 'white', mr: 1 }} />
                        <Typography variant="body2" color="white">
                          Potential market disruption detected
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </GradientCard>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    AI Competitive Assistant
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
