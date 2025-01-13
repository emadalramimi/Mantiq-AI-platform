import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Chip,
  IconButton,
  Divider,
  Paper,
  MenuItem,
  Stack,
  Autocomplete,
} from '@mui/material';
import {
  Add as AddIcon,
  ContentCopy as ContentCopyIcon,
  Download as DownloadIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  AutoAwesome as AIIcon,
} from '@mui/icons-material';

const proposalTemplates = [
  { id: 1, name: 'Enterprise SaaS Solution', category: 'Technology' },
  { id: 2, name: 'Professional Services', category: 'Consulting' },
  { id: 3, name: 'Custom Implementation', category: 'Services' },
];

const aiSuggestions = [
  'Add case studies from similar industries',
  'Include ROI calculator section',
  'Highlight security compliance features',
  'Add customer testimonials',
];

const ProposalSection = ({ title, content, onEdit }) => (
  <Paper sx={{ p: 2, mb: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Typography variant="h6">{title}</Typography>
      <Box>
        <IconButton size="small" onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
    <Typography variant="body1">{content}</Typography>
  </Paper>
);

export default function ProposalBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [sections, setSections] = useState([
    { id: 1, title: 'Executive Summary', content: 'Our solution provides...' },
    { id: 2, title: 'Solution Overview', content: 'Key features include...' },
  ]);

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Header Section */}
        <Grid item xs={12}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Proposal Builder
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Create professional proposals with AI assistance
            </Typography>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <TextField
                  label="Proposal Title"
                  variant="outlined"
                  fullWidth
                  sx={{ mr: 2 }}
                />
                <Button
                  variant="contained"
                  startIcon={<AIIcon />}
                  color="primary"
                >
                  Generate with AI
                </Button>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Tags
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label="Enterprise" onDelete={() => {}} />
                  <Chip label="SaaS" onDelete={() => {}} />
                  <Chip label="Technology" onDelete={() => {}} />
                  <Chip
                    icon={<AddIcon />}
                    label="Add Tag"
                    variant="outlined"
                    onClick={() => {}}
                  />
                </Stack>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Proposal Sections */}
              {sections.map((section) => (
                <ProposalSection
                  key={section.id}
                  title={section.title}
                  content={section.content}
                  onEdit={() => {}}
                />
              ))}

              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                fullWidth
                sx={{ mt: 2 }}
              >
                Add New Section
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Templates */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Templates
              </Typography>
              <TextField
                select
                fullWidth
                label="Select Template"
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                sx={{ mb: 2 }}
              >
                {proposalTemplates.map((template) => (
                  <MenuItem key={template.id} value={template.id}>
                    {template.name}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="outlined"
                startIcon={<ContentCopyIcon />}
                fullWidth
              >
                Use Template
              </Button>
            </CardContent>
          </Card>

          {/* AI Suggestions */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AIIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">
                  AI Suggestions
                </Typography>
              </Box>
              <Stack spacing={2}>
                {aiSuggestions.map((suggestion, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 2,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  >
                    <Typography variant="body2">
                      {suggestion}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Actions
              </Typography>
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  fullWidth
                >
                  Export as PDF
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<ContentCopyIcon />}
                  fullWidth
                >
                  Save as Template
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
