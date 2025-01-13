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
  Tooltip,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import {
  Segment as SegmentIcon,
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  AttachMoney as MoneyIcon,
  Schedule as ScheduleIcon,
  AutoFixHigh as AIIcon,
  Add as AddIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import GradientCard from '../components/common/GradientCard';
import AIChatInterface from '../components/common/AIChatInterface';

const segmentData = [
  {
    id: 1,
    name: 'Enterprise Leaders',
    description: 'Large enterprises with high purchase potential',
    size: 150,
    avgRevenue: '$500,000',
    engagementScore: 85,
    characteristics: [
      'High budget',
      'Complex needs',
      'Long sales cycle',
      'Multiple stakeholders'
    ],
    recommendedApproach: [
      'Executive-level engagement',
      'Custom solutions',
      'Regular business reviews'
    ],
    topCompanies: [
      { name: 'Oman Oil', industry: 'Energy' },
      { name: 'Bank Muscat', industry: 'Finance' },
      { name: 'Ooredoo Oman', industry: 'Telecommunications' }
    ]
  },
  {
    id: 2,
    name: 'Growth SMBs',
    description: 'Fast-growing small and medium businesses',
    size: 300,
    avgRevenue: '$150,000',
    engagementScore: 78,
    characteristics: [
      'Rapid growth',
      'Tech-savvy',
      'Value-focused',
      'Quick decision making'
    ],
    recommendedApproach: [
      'ROI-focused pitches',
      'Scalable solutions',
      'Digital-first communication'
    ],
    topCompanies: [
      { name: 'Al-Habib Technologies', industry: 'Technology' },
      { name: 'Muscat Logistics', industry: 'Transportation' },
      { name: 'Gulf Solutions', industry: 'Consulting' }
    ]
  },
  {
    id: 3,
    name: 'Tech Innovators',
    description: 'Technology-focused companies seeking innovation',
    size: 200,
    avgRevenue: '$250,000',
    engagementScore: 92,
    characteristics: [
      'Innovation-driven',
      'Early adopters',
      'High technical expertise',
      'Integration focused'
    ],
    recommendedApproach: [
      'Technical deep-dives',
      'API-first solutions',
      'Innovation partnerships'
    ],
    topCompanies: [
      { name: 'Oman Data Park', industry: 'Technology' },
      { name: 'Digital Trends Oman', industry: 'Digital Services' },
      { name: 'Smart Solutions Muscat', industry: 'Software' }
    ]
  }
];

// Ensure default export
export default function CustomerSegmentation() {
  const [segments, setSegments] = useState(segmentData);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSegmentClick = (segment) => {
    setSelectedSegment(segment);
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Customer Segmentation
        </Typography>
        <Typography variant="body1" color="textSecondary">
          AI-driven customer segmentation and targeting
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Segment Overview */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">
                  Customer Segments
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => setOpenDialog(true)}
                >
                  Create Segment
                </Button>
              </Box>

              <Grid container spacing={2}>
                {segments.map((segment) => (
                  <Grid item xs={12} key={segment.id}>
                    <Card 
                      variant="outlined" 
                      sx={{ 
                        cursor: 'pointer',
                        '&:hover': { boxShadow: 3 },
                        bgcolor: selectedSegment?.id === segment.id ? 'primary.light' : 'background.paper'
                      }}
                      onClick={() => handleSegmentClick(segment)}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                              <GroupIcon />
                            </Avatar>
                            <Box>
                              <Typography variant="h6">{segment.name}</Typography>
                              <Typography variant="body2" color="textSecondary">
                                {segment.description}
                              </Typography>
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Chip 
                              icon={<TrendingUpIcon />} 
                              label={`${segment.engagementScore}% Engagement`}
                              color="primary"
                              sx={{ mr: 1 }}
                            />
                            <IconButton size="small">
                              <EditIcon />
                            </IconButton>
                          </Box>
                        </Box>
                        
                        <Box sx={{ mt: 2 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={4}>
                              <Typography variant="body2" color="textSecondary">
                                Segment Size
                              </Typography>
                              <Typography variant="h6">
                                {segment.size} Companies
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography variant="body2" color="textSecondary">
                                Average Revenue
                              </Typography>
                              <Typography variant="h6">
                                {segment.avgRevenue}
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography variant="body2" color="textSecondary">
                                Engagement Score
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LinearProgress 
                                  variant="determinate" 
                                  value={segment.engagementScore} 
                                  sx={{ flexGrow: 1, mr: 1 }}
                                />
                                <Typography variant="body2">
                                  {segment.engagementScore}%
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Segment Details and AI Insights */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <GradientCard>
                <Typography variant="h6" gutterBottom color="white">
                  AI Segment Insights
                </Typography>
                {selectedSegment ? (
                  <Box>
                    <Typography variant="subtitle1" color="white" gutterBottom>
                      Key Characteristics
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {selectedSegment.characteristics.map((char, index) => (
                        <Chip 
                          key={index}
                          label={char}
                          size="small"
                          sx={{ 
                            bgcolor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                          }}
                        />
                      ))}
                    </Box>
                    <Typography variant="subtitle1" color="white" gutterBottom>
                      Recommended Approach
                    </Typography>
                    <List dense>
                      {selectedSegment.recommendedApproach.map((approach, index) => (
                        <ListItem key={index}>
                          <ListItemText 
                            primary={approach}
                            sx={{ color: 'white' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ) : (
                  <Typography color="white">
                    Select a segment to view AI insights
                  </Typography>
                )}
              </GradientCard>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    AI Segmentation Assistant
                  </Typography>
                  <AIChatInterface />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Create Segment Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Create New Customer Segment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Segment Name"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            variant="outlined"
            multiline
            rows={2}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Target Company Size"
            fullWidth
            variant="outlined"
            type="number"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Expected Average Revenue"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Create Segment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
