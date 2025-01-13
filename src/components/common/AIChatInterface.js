import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
  Fade,
} from '@mui/material';
import {
  Send as SendIcon,
  AutoAwesome as AIIcon,
  Person as PersonIcon,
  AttachFile as AttachFileIcon,
  Mic as MicIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ChatContainer = styled(Paper)(({ theme }) => ({
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
}));

const MessageList = styled(List)(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  padding: theme.spacing(2),
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.paper,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.light,
    borderRadius: '3px',
  },
}));

const MessageBubble = styled(Box)(({ theme, isAi }) => ({
  background: isAi ? theme.palette.primary.main : theme.palette.grey[100],
  color: isAi ? theme.palette.primary.contrastText : theme.palette.text.primary,
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.spacing(2),
  maxWidth: '80%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    [isAi ? 'left' : 'right']: -10,
    transform: 'translateY(-50%)',
    border: '5px solid transparent',
    borderLeftColor: isAi ? theme.palette.primary.main : 'transparent',
    borderRightColor: isAi ? 'transparent' : theme.palette.grey[100],
  },
}));

const InputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
}));

const defaultMessages = [
  {
    id: 1,
    text: "Hello, Emad! I'm your AI sales assistant. How can I help you today with your sales strategy?",
    isAi: true,
    timestamp: new Date().toISOString(),
  },
];

const AIChatInterface = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      isAi: false,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        text: "I'm analyzing your request and will provide a detailed response shortly...",
        isAi: true,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <ChatContainer elevation={3}>
      <MessageList>
        {messages.map((message) => (
          <ListItem
            key={message.id}
            sx={{
              flexDirection: message.isAi ? 'row' : 'row-reverse',
              alignItems: 'flex-start',
              mb: 2,
            }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor: message.isAi ? 'primary.main' : 'secondary.main',
                }}
              >
                {message.isAi ? <AIIcon /> : <PersonIcon />}
              </Avatar>
            </ListItemAvatar>
            <Box sx={{ maxWidth: '80%' }}>
              <MessageBubble isAi={message.isAi}>
                <Typography variant="body1">{message.text}</Typography>
              </MessageBubble>
              <Typography
                variant="caption"
                sx={{ ml: 1, mt: 0.5, display: 'block', color: 'text.secondary' }}
              >
                {new Date(message.timestamp).toLocaleTimeString()}
              </Typography>
            </Box>
          </ListItem>
        ))}
        {isTyping && (
          <Fade in={isTyping}>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <Chip
                icon={<AIIcon />}
                label="AI is typing..."
                variant="outlined"
                color="primary"
                size="small"
              />
            </Box>
          </Fade>
        )}
      </MessageList>
      <InputContainer>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small">
            <AttachFileIcon />
          </IconButton>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            size="small"
            multiline
            maxRows={4}
            InputProps={{
              endAdornment: (
                <IconButton size="small">
                  <MicIcon />
                </IconButton>
              ),
            }}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </InputContainer>
    </ChatContainer>
  );
};

export default AIChatInterface;
