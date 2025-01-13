import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import theme from './theme/customTheme';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import ProposalBuilder from './pages/ProposalBuilder';
import AIAnalysis from './pages/AIAnalysis';
import TaskAutomation from './pages/TaskAutomation';
import CollaborationHub from './pages/CollaborationHub';
import Settings from './pages/Settings';
import ContractAI from './pages/ContractAI';
import LeadIntelligence from './pages/LeadIntelligence';
import CompetitiveIntelligence from './pages/CompetitiveIntelligence';
import CustomerSegmentation from './pages/CustomerSegmentation';
import SocialMediaMonitor from './pages/SocialMediaMonitor';

// Global CSS
import { GlobalStyles } from '@mui/material';

const globalStyles = {
  '*::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '*::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '*::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '3px',
  },
  '*::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
  '.fade-enter': {
    opacity: 0,
  },
  '.fade-enter-active': {
    opacity: 1,
    transition: 'opacity 300ms ease-in',
  },
  '.fade-exit': {
    opacity: 1,
  },
  '.fade-exit-active': {
    opacity: 0,
    transition: 'opacity 300ms ease-in',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          minHeight: '100vh',
          background: theme => `linear-gradient(45deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[100]} 100%)`,
        }}>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/proposals" element={<ProposalBuilder />} />
              <Route path="/analysis" element={<AIAnalysis />} />
              <Route path="/automation" element={<TaskAutomation />} />
              <Route path="/collaboration" element={<CollaborationHub />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/contracts" element={<ContractAI />} />
              <Route path="/lead-intelligence" element={<LeadIntelligence />} />
              <Route path="/competitive-intelligence" element={<CompetitiveIntelligence />} />
              <Route path="/customer-segments" element={<CustomerSegmentation />} />
              <Route path="/social-monitor" element={<SocialMediaMonitor />} />
            </Routes>
          </MainLayout>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
