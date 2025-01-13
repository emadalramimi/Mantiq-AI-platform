import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Switch,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import {
  Autorenew as AutomationIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
  NotificationImportant as NotificationIcon,
} from '@mui/icons-material';

const defaultAutomations = [
  {
    id: 1,
    title: 'Follow-up Email',
    description: 'Automatic follow-up email for Saleh Al-Harthi',
    icon: <EmailIcon />,
    active: true,
  },
  {
    id: 2,
    title: 'Meeting Scheduling',
    description: 'Automated meeting scheduling for Khalid Al-Balushi',
    icon: <ScheduleIcon />,
    active: false,
  },
  {
    id: 3,
    title: 'Lead Notification',
    description: 'Real-time notifications for Nasser Al-Rawahi',
    icon: <NotificationIcon />,
    active: true,
  },
];

export default function TaskAutomation() {
  const [automations, setAutomations] = useState(defaultAutomations);
  const [openDialog, setOpenDialog] = useState(false);
  const [newAutomation, setNewAutomation] = useState({
    title: '',
    description: '',
  });

  const handleToggleAutomation = (id) => {
    setAutomations(automations.map(automation => 
      automation.id === id 
        ? { ...automation, active: !automation.active }
        : automation
    ));
  };

  const handleAddAutomation = () => {
    setAutomations([
      ...automations,
      {
        id: automations.length + 1,
        title: newAutomation.title,
        description: newAutomation.description,
        icon: <AutomationIcon />,
        active: true,
      }
    ]);
    setOpenDialog(false);
    setNewAutomation({ title: '', description: '' });
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Task Automation
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Streamline your sales workflow with intelligent automation
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Automation Overview */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">
                  Active Automations
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => setOpenDialog(true)}
                >
                  Create Automation
                </Button>
              </Box>
              <List>
                {automations.map((automation) => (
                  <ListItem key={automation.id} divider>
                    <Box sx={{ mr: 2 }}>
                      {automation.icon}
                    </Box>
                    <ListItemText
                      primary={automation.title}
                      secondary={automation.description}
                    />
                    <ListItemSecondaryAction>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Chip
                          label={automation.active ? 'Active' : 'Inactive'}
                          color={automation.active ? 'success' : 'default'}
                          size="small"
                          sx={{ mr: 2 }}
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={automation.active}
                              onChange={() => handleToggleAutomation(automation.id)}
                              color="primary"
                            />
                          }
                          label=""
                        />
                        <IconButton size="small" sx={{ ml: 1 }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton size="small" sx={{ ml: 1 }}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Automation Insights */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Automation Insights
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        Time Saved
                      </Typography>
                      <Typography variant="h4" color="primary">
                        12h 45m
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Estimated time saved this week
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        Efficiency Boost
                      </Typography>
                      <Typography variant="h4" color="secondary">
                        37%
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Increase in team productivity
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Workflow Templates */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Workflow Templates
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        Lead Nurturing
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Automated email sequence for new leads
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="small" 
                        sx={{ mt: 2 }}
                      >
                        Use Template
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        Post-Demo Follow-up
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Automated follow-up after product demonstration
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        size="small" 
                        sx={{ mt: 2 }}
                      >
                        Use Template
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">
                        Renewal Reminder
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Automated contract renewal notifications
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="warning" 
                        size="small" 
                        sx={{ mt: 2 }}
                      >
                        Use Template
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add Automation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Create New Automation</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Automation Title"
            fullWidth
            variant="outlined"
            value={newAutomation.title}
            onChange={(e) => setNewAutomation({ ...newAutomation, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            value={newAutomation.description}
            onChange={(e) => setNewAutomation({ ...newAutomation, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button 
            onClick={handleAddAutomation} 
            color="primary" 
            variant="contained"
            disabled={!newAutomation.title || !newAutomation.description}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
