import React, { useState, useRef } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  CloudUpload as UploadIcon,
  Analytics as AnalyticsIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Check as CheckIcon,
  Warning as WarningIcon,
  DocumentScanner as DocumentScannerIcon,
  AutoFixHigh as AIIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import GradientCard from '../components/common/GradientCard';
import AIChatInterface from '../components/common/AIChatInterface';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const contractTemplates = [
  {
    id: 1,
    name: 'Standard Sales Agreement',
    industry: 'General Sales',
    complexity: 'Low',
    lastUsed: '2 weeks ago',
    active: true,
  },
  {
    id: 2,
    name: 'Enterprise Software License',
    industry: 'Technology',
    complexity: 'High',
    lastUsed: '1 month ago',
    active: false,
  },
  {
    id: 3,
    name: 'Service Level Agreement',
    industry: 'IT Services',
    complexity: 'Medium',
    lastUsed: '3 weeks ago',
    active: true,
  },
];

const contractRisks = [
  {
    id: 1,
    client: 'Tech Solutions Inc',
    riskLevel: 'High',
    issues: [
      'Ambiguous termination clauses',
      'Undefined service levels',
    ],
    flaggedBy: 'AI Risk Analysis',
  },
  {
    id: 2,
    client: 'Enterprise Corp',
    riskLevel: 'Medium',
    issues: [
      'Potential IP ownership dispute',
    ],
    flaggedBy: 'AI Risk Analysis',
  },
];

export default function ContractAI() {
  const [activeStep, setActiveStep] = useState(0);
  const [openTemplateDialog, setOpenTemplateDialog] = useState(false);
  const [contracts, setContracts] = useState(contractTemplates);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    industry: '',
    complexity: 'Low',
  });
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Implement file upload logic
      console.log('Uploaded file:', file.name);
    }
  };

  const handleAddTemplate = () => {
    if (newTemplate.name && newTemplate.industry) {
      setContracts([
        ...contracts,
        {
          id: contracts.length + 1,
          ...newTemplate,
          lastUsed: 'Just now',
          active: true,
        }
      ]);
      setOpenTemplateDialog(false);
      setNewTemplate({ name: '', industry: '', complexity: 'Low' });
    }
  };

  const handleToggleTemplate = (id) => {
    setContracts(contracts.map(contract => 
      contract.id === id 
        ? { ...contract, active: !contract.active }
        : contract
    ));
  };

  const steps = [
    'Upload Contract',
    'AI Analysis',
    'Review Suggestions',
    'Finalize',
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contract AI Assistant
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Intelligent contract management and risk analysis
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Contract Upload and Analysis */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <DocumentScannerIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="h6">
                  Contract Workflow
                </Typography>
              </Box>

              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<UploadIcon />}
                  sx={{ mr: 2 }}
                >
                  Upload Contract
                  <VisuallyHiddenInput 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx"
                  />
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<AIIcon />}
                  disabled={activeStep === 0}
                >
                  AI Analysis
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Contract Templates */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">
                  Contract Templates
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => setOpenTemplateDialog(true)}
                >
                  Create Template
                </Button>
              </Box>

              <List>
                {contracts.map((contract) => (
                  <ListItem key={contract.id} divider>
                    <ListItemText
                      primary={contract.name}
                      secondary={`${contract.industry} | ${contract.complexity} Complexity`}
                    />
                    <ListItemSecondaryAction>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Chip
                          label={contract.active ? 'Active' : 'Inactive'}
                          color={contract.active ? 'success' : 'default'}
                          size="small"
                          sx={{ mr: 2 }}
                        />
                        <Switch
                          checked={contract.active}
                          onChange={() => handleToggleTemplate(contract.id)}
                          color="primary"
                        />
                        <Tooltip title="Edit Template">
                          <IconButton size="small" sx={{ ml: 1 }}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Template">
                          <IconButton size="small" sx={{ ml: 1 }}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* AI Insights and Risk Analysis */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <GradientCard>
                <Typography variant="h6" gutterBottom color="white">
                  Contract Risk Analysis
                </Typography>
                {contractRisks.map((risk) => (
                  <Box 
                    key={risk.id} 
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.1)', 
                      p: 2, 
                      borderRadius: 2,
                      mb: 2 
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <WarningIcon 
                        color={risk.riskLevel === 'High' ? 'error' : 'warning'} 
                        sx={{ mr: 1 }} 
                      />
                      <Typography variant="subtitle1" color="white">
                        {risk.client} - {risk.riskLevel} Risk
                      </Typography>
                    </Box>
                    <List dense>
                      {risk.issues.map((issue, index) => (
                        <ListItem key={index} sx={{ py: 0 }}>
                          <ListItemText 
                            primary={issue} 
                            primaryTypographyProps={{ 
                              color: 'white', 
                              variant: 'body2' 
                            }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </GradientCard>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    AI Contract Assistant
                  </Typography>
                  <AIChatInterface />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Add Template Dialog */}
      <Dialog 
        open={openTemplateDialog} 
        onClose={() => setOpenTemplateDialog(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Create New Contract Template</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Template Name"
            fullWidth
            variant="outlined"
            value={newTemplate.name}
            onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Industry"
            fullWidth
            variant="outlined"
            value={newTemplate.industry}
            onChange={(e) => setNewTemplate({ ...newTemplate, industry: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Complexity"
            fullWidth
            variant="outlined"
            value={newTemplate.complexity}
            onChange={(e) => setNewTemplate({ ...newTemplate, complexity: e.target.value })}
            SelectProps={{
              native: true,
            }}
          >
            {['Low', 'Medium', 'High'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTemplateDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button 
            onClick={handleAddTemplate} 
            color="primary" 
            variant="contained"
            disabled={!newTemplate.name || !newTemplate.industry}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
