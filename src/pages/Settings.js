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
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  Person as ProfileIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Palette as AppearanceIcon,
  IntegrationInstructions as IntegrationsIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

export default function Settings() {
  const [profile, setProfile] = useState({
    name: 'Emad Al-Ramimi',
    email: 'emad.alramimi@salesai.com',
    role: 'Sales Director',
  });

  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: {
      email: true,
      sms: false,
      pushNotifications: true,
    },
    language: 'en',
    timezone: 'UTC',
  });

  const handleProfileUpdate = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSettingsToggle = (category, field) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: !prev[category][field]
      }
    }));
  };

  const handleSelectChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Account Settings
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Customize your Sales AI Platform experience
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Profile Section */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar 
                  sx={{ 
                    width: 100, 
                    height: 100, 
                    mb: 2,
                    bgcolor: 'primary.main' 
                  }}
                >
                  {profile.name.charAt(0)}
                </Avatar>
                <Typography variant="h6">
                  {profile.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {profile.role}
                </Typography>
              </Box>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={profile.name}
                onChange={(e) => handleProfileUpdate('name', e.target.value)}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  )
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={profile.email}
                onChange={(e) => handleProfileUpdate('email', e.target.value)}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                  )
                }}
              />
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth
              >
                Update Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Preferences Section */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AppearanceIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="h6">
                  Appearance & Preferences
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.darkMode}
                        onChange={() => handleSettingsToggle('darkMode', 'darkMode')}
                        color="primary"
                      />
                    }
                    label="Dark Mode"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Language</InputLabel>
                    <Select
                      value={settings.language}
                      onChange={(e) => handleSelectChange('language', e.target.value)}
                      label="Language"
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                      <MenuItem value="fr">French</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Timezone</InputLabel>
                    <Select
                      value={settings.timezone}
                      onChange={(e) => handleSelectChange('timezone', e.target.value)}
                      label="Timezone"
                    >
                      <MenuItem value="UTC">UTC</MenuItem>
                      <MenuItem value="EST">Eastern Standard Time</MenuItem>
                      <MenuItem value="PST">Pacific Standard Time</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <NotificationsIcon sx={{ mr: 2, color: 'secondary.main' }} />
                <Typography variant="h6">
                  Notification Preferences
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.notifications.email}
                        onChange={() => handleSettingsToggle('notifications', 'email')}
                        color="primary"
                      />
                    }
                    label="Email Notifications"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.notifications.sms}
                        onChange={() => handleSettingsToggle('notifications', 'sms')}
                        color="primary"
                      />
                    }
                    label="SMS Alerts"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.notifications.pushNotifications}
                        onChange={() => handleSettingsToggle('notifications', 'pushNotifications')}
                        color="primary"
                      />
                    }
                    label="Push Notifications"
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <IntegrationsIcon sx={{ mr: 2, color: 'warning.main' }} />
                <Typography variant="h6">
                  Integrations
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    startIcon={<SecurityIcon />}
                  >
                    CRM Integration
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    startIcon={<ProfileIcon />}
                  >
                    LinkedIn Sync
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    startIcon={<NotificationsIcon />}
                  >
                    Email Tracking
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
