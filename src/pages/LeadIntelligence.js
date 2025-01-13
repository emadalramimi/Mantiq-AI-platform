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
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Search as SearchIcon,
  Person as PersonIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Analytics as AnalyticsIcon,
  AutoFixHigh as AIIcon,
} from '@mui/icons-material';
import GradientCard from '../components/common/GradientCard';
import AIChatInterface from '../components/common/AIChatInterface';

const leadProfiles = [
  {
    id: 1,
    name: 'Ahmed Al-Busaidi',
    company: 'Tech Innovations LLC',
    role: 'Chief Technology Officer',
    email: 'ahmed.busaidi@techinnovations.om',
    phone: '+968 9123 4567',
    potentialScore: 85,
    interests: ['Cloud Computing', 'AI', 'Digital Transformation'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ahmedbusaidi',
    }
  },
  {
    id: 2,
    name: 'Fatima Al-Raisi',
    company: 'Global Enterprise Solutions',
    role: 'Head of Business Development',
    email: 'fatima.raisi@globalenterprise.om',
    phone: '+968 9234 5678',
    potentialScore: 92,
    interests: ['Strategic Partnerships', 'Enterprise Software', 'Innovation'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/fatimaraisi',
    }
  },
];

export default function LeadIntelligence() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLeads, setFilteredLeads] = useState(leadProfiles);

  const handleSearch = () => {
    const filtered = leadProfiles.filter(lead => 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLeads(filtered);
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Lead Intelligence
        </Typography>
        <Typography variant="body1" color="textSecondary">
          AI-powered lead research and insights
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Lead Search */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Search Leads"
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
                {filteredLeads.map((lead) => (
                  <React.Fragment key={lead.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                              {lead.name}
                            </Typography>
                            <Chip 
                              label={`Potential: ${lead.potentialScore}%`} 
                              color="primary" 
                              size="small" 
                            />
                          </Box>
                        }
                        secondary={`${lead.role} at ${lead.company}`}
                      />
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="LinkedIn Profile">
                          <IconButton 
                            size="small" 
                            href={lead.socialLinks.linkedin} 
                            target="_blank"
                          >
                            <LinkedInIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Email">
                          <IconButton 
                            size="small" 
                            href={`mailto:${lead.email}`}
                          >
                            <EmailIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Phone">
                          <IconButton 
                            size="small" 
                            href={`tel:${lead.phone}`}
                          >
                            <PhoneIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* AI Insights */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #2196F3, #1565C0)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AIIcon sx={{ color: 'white', mr: 1, fontSize: 28 }} />
                <Typography variant="h6" color="white">
                  AI Lead Insights
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {filteredLeads.map((lead) => (
                  <Box 
                    key={lead.id} 
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.15)', 
                      p: 2, 
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.2)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar 
                        sx={{ 
                          width: 32, 
                          height: 32, 
                          bgcolor: 'rgba(255,255,255,0.2)',
                          mr: 1
                        }}
                      >
                        <PersonIcon sx={{ fontSize: 20, color: 'white' }} />
                      </Avatar>
                      <Typography variant="subtitle1" color="white" sx={{ fontWeight: 500 }}>
                        {lead.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ mb: 1 }}>
                      Key Interests & Focus Areas
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {lead.interests.map((interest) => (
                        <Chip 
                          key={interest}
                          label={interest} 
                          size="small"
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            borderColor: 'rgba(255,255,255,0.3)',
                            '&:hover': {
                              bgcolor: 'rgba(255,255,255,0.2)',
                            }
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                      <AnalyticsIcon sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, mr: 1 }} />
                      <Typography variant="caption" color="rgba(255,255,255,0.7)">
                        Engagement Potential: {lead.potentialScore}%
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.25)',
                  }
                }}
                startIcon={<AIIcon />}
              >
                Generate More Insights
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
