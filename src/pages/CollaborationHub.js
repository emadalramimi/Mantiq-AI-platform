import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  AvatarGroup,
  Button,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Chip,
  Tab,
  Tabs,
  Paper,
} from '@mui/material';
import {
  Add as AddIcon,
  Message as MessageIcon,
  AttachFile as AttachFileIcon,
  Star as StarIcon,
  MoreVert as MoreVertIcon,
  Timeline as TimelineIcon,
  Assignment as TaskIcon,
  Group as TeamIcon,
} from '@mui/icons-material';

const teamMembers = [
  {
    id: 1,
    name: 'Saleh Al-Harthi',
    role: 'Sales Manager',
    avatar: '/path/to/saleh-avatar.jpg',
    status: 'online',
    tasks: 12,
    lastActive: '2 mins ago'
  },
  {
    id: 2,
    name: 'Khalid Al-Balushi',
    role: 'Sales Representative',
    avatar: '/path/to/khalid-avatar.jpg',
    status: 'away',
    tasks: 8,
    lastActive: '15 mins ago'
  },
  {
    id: 3,
    name: 'Nasser Al-Rawahi',
    role: 'Sales Analyst',
    avatar: '/path/to/nasser-avatar.jpg',
    status: 'offline',
    tasks: 5,
    lastActive: '1 hour ago'
  },
  {
    id: 4,
    name: 'Adil Al-Siyabi',
    role: 'Business Development',
    avatar: '/path/to/adil-avatar.jpg',
    status: 'online',
    tasks: 15,
    lastActive: '5 mins ago'
  }
];

const recentActivities = [
  {
    id: 1,
    user: 'Emad Al-Ramimi',
    action: 'updated the proposal for',
    target: 'Enterprise Corp',
    time: '10 minutes ago',
  },
  {
    id: 2,
    user: 'Adil Al-Siyabi',
    action: 'closed a deal with',
    target: 'Tech Solutions Inc',
    time: '1 hour ago',
  },
];

const tasks = [
  {
    id: 1,
    title: 'Follow up with Enterprise Corp',
    assignee: 'John Doe',
    priority: 'High',
    dueDate: '2025-01-15',
  },
  {
    id: 2,
    title: 'Prepare Q1 forecast',
    assignee: 'Jane Smith',
    priority: 'Medium',
    dueDate: '2025-01-20',
  },
];

function TabPanel({ children, value, index }) {
  return (
    <Box hidden={value !== index} sx={{ p: 2 }}>
      {value === index && children}
    </Box>
  );
}

export default function CollaborationHub() {
  const [tabValue, setTabValue] = useState(0);
  const [message, setMessage] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Collaboration Hub
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Work together with your team in real-time
            </Typography>
          </Box>
        </Grid>

        {/* Team Overview */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">
                  Team Overview
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                >
                  Invite Member
                </Button>
              </Box>
              <Grid container spacing={2}>
                {teamMembers.map((member) => (
                  <Grid item xs={12} sm={6} md={4} key={member.id}>
                    <Paper sx={{ p: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          src={member.avatar}
                          sx={{ width: 50, height: 50, mr: 2 }}
                        />
                        <Box>
                          <Typography variant="subtitle1">
                            {member.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {member.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Chip
                        size="small"
                        label={member.status}
                        color={member.status === 'online' ? 'success' : 'default'}
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Activity Feed and Tasks */}
          <Card>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab icon={<TimelineIcon />} label="Activity" />
                <Tab icon={<TaskIcon />} label="Tasks" />
                <Tab icon={<TeamIcon />} label="Team Chat" />
              </Tabs>
            </Box>

            <TabPanel value={tabValue} index={0}>
              <List>
                {recentActivities.map((activity) => (
                  <ListItem key={activity.id}>
                    <ListItemAvatar>
                      <Avatar>{activity.user[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body1">
                          <strong>{activity.user}</strong> {activity.action}{' '}
                          <strong>{activity.target}</strong>
                        </Typography>
                      }
                      secondary={activity.time}
                    />
                  </ListItem>
                ))}
              </List>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <List>
                {tasks.map((task) => (
                  <ListItem key={task.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <TaskIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={task.title}
                      secondary={`Assigned to ${task.assignee} • Due ${task.dueDate}`}
                    />
                    <ListItemSecondaryAction>
                      <Chip
                        size="small"
                        label={task.priority}
                        color={task.priority === 'High' ? 'error' : 'default'}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                fullWidth
                sx={{ mt: 2 }}
              >
                Add New Task
              </Button>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '400px' }}>
                <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
                  {/* Chat messages would go here */}
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                  <IconButton color="primary">
                    <AttachFileIcon />
                  </IconButton>
                  <Button variant="contained">
                    Send
                  </Button>
                </Box>
              </Box>
            </TabPanel>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Quick Actions */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<MessageIcon />}
                  >
                    New Message
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<TaskIcon />}
                  >
                    Create Task
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Pinned Items */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pinned Items
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <StarIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Q1 Sales Strategy"
                    secondary="Updated 2 days ago"
                  />
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <StarIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Team Goals 2025"
                    secondary="Updated 5 days ago"
                  />
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
